import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Upload, X, Loader2, Link as LinkIcon, ExternalLink, LogOut, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

interface MediaItem {
  id: string;
  title: string;
  category: string;
  file_path: string;
  file_type: string;
  created_at: string;
  thumbnail_url?: string | null;
  description?: string | null;
  source_title?: string | null;
}

const categories = [
  { value: "rowing", label: "Embarcadero Rowing Club" },
  { value: "good-life", label: "The Good Life" },
  { value: "tiktok", label: "TikTok" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
];

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const getPublicUrl = (filePath: string) =>
  `${SUPABASE_URL}/storage/v1/object/public/social-media/${filePath}`;

const getHostname = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const VideoCard = ({ item, onDelete, canDelete }: { item: MediaItem; onDelete: (id: string, path: string) => void; canDelete: boolean }) => {
  const isLink = item.file_type === "link";
  const isVideo = item.file_type.startsWith("video/");
  const url = isLink ? item.file_path : getPublicUrl(item.file_path);

  return (
    <div className="card-neon p-0 overflow-hidden group relative">
      <div className="aspect-video bg-muted relative">
        {isLink ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full relative group/link"
          >
            {item.thumbnail_url ? (
              <>
                <img
                  src={item.thumbnail_url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/link:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium truncate">
                    {getHostname(url)}
                  </span>
                  <ExternalLink className="text-primary shrink-0" size={16} />
                </div>
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/10 to-background hover:from-primary/20 transition-colors p-6 text-center">
                <ExternalLink className="text-primary" size={32} />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-1">
                    {getHostname(url)}
                  </p>
                  <p className="text-sm text-muted-foreground truncate max-w-full">View original post</p>
                </div>
              </div>
            )}
          </a>
        ) : isVideo ? (
          <video src={url} controls className="w-full h-full object-cover" />
        ) : (
          <img src={url} alt={item.title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-foreground font-medium text-sm truncate">{item.title}</h3>
          {canDelete && (
            <button
              onClick={() => onDelete(item.id, item.file_path)}
              className="text-muted-foreground hover:text-destructive transition-colors ml-2 shrink-0 opacity-0 group-hover:opacity-100"
              aria-label="Delete"
            >
              <X size={16} />
            </button>
          )}
        </div>
        {isLink && item.description && (
          <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};

const SocialMedia = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAdmin, user, signOut } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [activeTab, setActiveTab] = useState("rowing");
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadCategory, setUploadCategory] = useState("rowing");
  const [uploadTitle, setUploadTitle] = useState("");
  const [importUrl, setImportUrl] = useState("");
  const [importing, setImporting] = useState(false);

  const fetchMedia = async () => {
    const { data, error } = await supabase
      .from("social_media")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setMedia(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const title = uploadTitle.trim() || file.name.replace(/\.[^.]+$/, "");
    const ext = file.name.split(".").pop();
    const filePath = `${uploadCategory}/${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;

    setUploading(true);

    const { error: storageError } = await supabase.storage
      .from("social-media")
      .upload(filePath, file);

    if (storageError) {
      toast({ title: "Upload failed", description: storageError.message, variant: "destructive" });
      setUploading(false);
      return;
    }

    const { error: dbError } = await supabase.from("social_media").insert({
      title,
      category: uploadCategory,
      file_path: filePath,
      file_type: file.type,
    });

    if (dbError) {
      toast({ title: "Error saving metadata", description: dbError.message, variant: "destructive" });
    } else {
      toast({ title: "Uploaded successfully" });
      setUploadTitle("");
      fetchMedia();
    }

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleImportUrl = async () => {
    const trimmed = importUrl.trim();
    if (!trimmed) return;

    try {
      new URL(trimmed);
    } catch {
      toast({ title: "Invalid URL", description: "Please enter a valid URL.", variant: "destructive" });
      return;
    }

    setImporting(true);
    const title = uploadTitle.trim() || getHostname(trimmed);

    const { error } = await supabase.from("social_media").insert({
      title,
      category: uploadCategory,
      file_path: trimmed,
      file_type: "link",
    });

    if (error) {
      toast({ title: "Import failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Post imported" });
      setImportUrl("");
      setUploadTitle("");
      fetchMedia();
    }
    setImporting(false);
  };

  const handleDelete = async (id: string, filePath: string) => {
    const item = media.find((m) => m.id === id);
    if (item && item.file_type !== "link") {
      await supabase.storage.from("social-media").remove([filePath]);
    }
    await supabase.from("social_media").delete().eq("id", id);
    setMedia((prev) => prev.filter((m) => m.id !== id));
    toast({ title: "Deleted" });
  };

  const filteredMedia = media.filter((m) => m.category === activeTab);

  return (
    <div className="min-h-screen relative">
      {/* Ambient gradient backdrop */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, hsl(270 100% 70% / 0.12) 0%, hsl(230 20% 5%) 55%)",
        }}
      />

      <header className="border-b border-border/50 bg-background/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Back to home"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-semibold text-foreground tracking-tight flex-1">
            Social Media
          </h1>
          {user ? (
            <button
              onClick={signOut}
              className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 text-sm"
              aria-label="Sign out"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Sign out</span>
            </button>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              className="text-muted-foreground/40 hover:text-primary transition-colors"
              aria-label="Admin sign in"
              title="Admin"
            >
              <LogIn size={16} />
            </button>
          )}
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-4">
              Media Library
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-foreground tracking-tight mb-4">
              Behind the scenes.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A curated collection of full-length video content across platforms and pursuits.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-10 flex-wrap h-auto gap-1 bg-card/50 backdrop-blur-sm border border-border/50">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="text-sm data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.value} value={cat.value}>
                {loading ? (
                  <div className="flex justify-center py-20">
                    <Loader2 className="animate-spin text-primary" size={28} />
                  </div>
                ) : filteredMedia.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMedia.map((item) => (
                      <VideoCard key={item.id} item={item} onDelete={handleDelete} canDelete={isAdmin} />
                    ))}
                  </div>
                ) : (
                  <div className="card-neon text-center py-20">
                    <p className="text-muted-foreground">
                      No videos yet in this category.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>

          {/* Upload Section — admins only */}
          {isAdmin && (
          <div className="mt-20 card-neon">
            <div className="mb-6">
              <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-2">
                Add Content
              </span>
              <h2 className="text-2xl font-semibold text-foreground tracking-tight">
                Upload Media
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
              <div className="flex flex-col gap-1.5 w-full sm:w-auto">
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  Title
                </label>
                <input
                  type="text"
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  placeholder="Optional"
                  className="h-11 rounded-md border border-border bg-background/50 backdrop-blur-sm px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors w-full sm:w-64"
                />
              </div>
              <div className="flex flex-col gap-1.5 w-full sm:w-auto">
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  Category
                </label>
                <select
                  value={uploadCategory}
                  onChange={(e) => setUploadCategory(e.target.value)}
                  className="h-11 rounded-md border border-border bg-background/50 backdrop-blur-sm px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*,image/*"
                  onChange={handleUpload}
                  className="hidden"
                  id="media-upload"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="btn-cyber inline-flex items-center gap-2 h-11 disabled:opacity-50"
                >
                  {uploading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Upload size={16} />
                  )}
                  {uploading ? "Uploading…" : "Choose File"}
                </button>
              </div>
            </div>

            {/* URL Import */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="mb-4">
                <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-2">
                  Or Import by URL
                </span>
                <p className="text-sm text-muted-foreground">
                  Paste a link to a TikTok, Instagram, Facebook, or other social post.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    Post URL
                  </label>
                  <input
                    type="url"
                    value={importUrl}
                    onChange={(e) => setImportUrl(e.target.value)}
                    placeholder="https://www.tiktok.com/@user/video/..."
                    className="h-11 rounded-md border border-border bg-background/50 backdrop-blur-sm px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors w-full"
                  />
                </div>
                <button
                  onClick={handleImportUrl}
                  disabled={importing || !importUrl.trim()}
                  className="btn-cyber inline-flex items-center gap-2 h-11 disabled:opacity-50"
                >
                  {importing ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <LinkIcon size={16} />
                  )}
                  {importing ? "Importing…" : "Import"}
                </button>
              </div>
              <p className="text-xs text-muted-foreground/70 mt-2">
                Uses the Title and Category selected above.
              </p>
            </div>
          </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SocialMedia;
