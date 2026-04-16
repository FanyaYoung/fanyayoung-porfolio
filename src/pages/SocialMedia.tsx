import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Upload, X, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface MediaItem {
  id: string;
  title: string;
  category: string;
  file_path: string;
  file_type: string;
  created_at: string;
}

const categories = [
  { value: "rowing", label: "Embarcadero Rowing Club" },
  { value: "tiktok", label: "TikTok" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
];

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const getPublicUrl = (filePath: string) =>
  `${SUPABASE_URL}/storage/v1/object/public/social-media/${filePath}`;

const VideoCard = ({ item, onDelete }: { item: MediaItem; onDelete: (id: string, path: string) => void }) => {
  const url = getPublicUrl(item.file_path);
  const isVideo = item.file_type.startsWith("video/");

  return (
    <div className="card-neon p-0 overflow-hidden group relative">
      <div className="aspect-video bg-muted">
        {isVideo ? (
          <video src={url} controls className="w-full h-full object-cover" />
        ) : (
          <img src={url} alt={item.title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="p-4 flex items-center justify-between">
        <h3 className="text-foreground font-medium text-sm truncate">{item.title}</h3>
        <button
          onClick={() => onDelete(item.id, item.file_path)}
          className="text-muted-foreground hover:text-destructive transition-colors ml-2 shrink-0 opacity-0 group-hover:opacity-100"
          aria-label="Delete"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

const SocialMedia = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [activeTab, setActiveTab] = useState("rowing");
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadCategory, setUploadCategory] = useState("rowing");
  const [uploadTitle, setUploadTitle] = useState("");

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

  const handleDelete = async (id: string, filePath: string) => {
    await supabase.storage.from("social-media").remove([filePath]);
    await supabase.from("social_media").delete().eq("id", id);
    setMedia((prev) => prev.filter((m) => m.id !== id));
    toast({ title: "Deleted" });
  };

  const filteredMedia = media.filter((m) => m.category === activeTab);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-semibold text-foreground tracking-tight">
            Social Media
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-muted-foreground mb-8">
            A collection of video content across platforms.
          </p>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8 flex-wrap h-auto gap-1">
              {categories.map((cat) => (
                <TabsTrigger key={cat.value} value={cat.value} className="text-sm">
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.value} value={cat.value}>
                {loading ? (
                  <div className="flex justify-center py-16">
                    <Loader2 className="animate-spin text-muted-foreground" size={24} />
                  </div>
                ) : filteredMedia.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMedia.map((item) => (
                      <VideoCard key={item.id} item={item} onDelete={handleDelete} />
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-16">
                    No videos yet in this category.
                  </p>
                )}
              </TabsContent>
            ))}
          </Tabs>

          {/* Upload Section */}
          <div className="mt-16 border-t border-border pt-10">
            <h2 className="text-lg font-semibold text-foreground mb-6">Upload Media</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
              <div className="flex flex-col gap-1.5 w-full sm:w-auto">
                <label className="text-sm text-muted-foreground">Title (optional)</label>
                <input
                  type="text"
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  placeholder="Video title"
                  className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring w-full sm:w-64"
                />
              </div>
              <div className="flex flex-col gap-1.5 w-full sm:w-auto">
                <label className="text-sm text-muted-foreground">Category</label>
                <select
                  value={uploadCategory}
                  onChange={(e) => setUploadCategory(e.target.value)}
                  className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
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
                  className="inline-flex items-center gap-2 h-10 px-5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default SocialMedia;
