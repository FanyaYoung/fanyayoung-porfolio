import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface VideoEntry {
  id: string;
  title: string;
  embedUrl: string;
  platform: string;
}

const PLACEHOLDER_VIDEOS: Record<string, VideoEntry[]> = {
  rowing: [
    {
      id: "rowing-1",
      title: "Morning Row on the Bay",
      embedUrl: "",
      platform: "rowing",
    },
  ],
  tiktok: [
    {
      id: "tiktok-1",
      title: "TikTok Video",
      embedUrl: "",
      platform: "tiktok",
    },
  ],
  facebook: [
    {
      id: "fb-1",
      title: "Facebook Video",
      embedUrl: "",
      platform: "facebook",
    },
  ],
  instagram: [
    {
      id: "ig-1",
      title: "Instagram Reel",
      embedUrl: "",
      platform: "instagram",
    },
  ],
};

const categories = [
  { value: "rowing", label: "Embarcadero Rowing Club" },
  { value: "tiktok", label: "TikTok" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
];

const VideoCard = ({ video }: { video: VideoEntry }) => (
  <div className="rounded-lg border border-border bg-card overflow-hidden">
    {video.embedUrl ? (
      <div className="aspect-video">
        <iframe
          src={video.embedUrl}
          className="w-full h-full"
          allowFullScreen
          allow="autoplay; encrypted-media"
          title={video.title}
        />
      </div>
    ) : (
      <div className="aspect-video bg-muted flex items-center justify-center">
        <p className="text-muted-foreground text-sm">
          Video embed coming soon
        </p>
      </div>
    )}
    <div className="p-4">
      <h3 className="text-foreground font-medium text-sm">{video.title}</h3>
    </div>
  </div>
);

const SocialMedia = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("rowing");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Content */}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(PLACEHOLDER_VIDEOS[cat.value] || []).map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
                {(!PLACEHOLDER_VIDEOS[cat.value] ||
                  PLACEHOLDER_VIDEOS[cat.value].length === 0) && (
                  <p className="text-muted-foreground text-center py-16">
                    No videos yet in this category.
                  </p>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default SocialMedia;
