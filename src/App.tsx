import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import LGProject from "./pages/LGProject";
import MGMProject from "./pages/MGMProject";
import WalmartProject from "./pages/WalmartProject";
import SamsClubProject from "./pages/SamsClubProject";
import SocialMedia from "./pages/SocialMedia";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const isSocialMediaDomain = window.location.hostname === "socialmedia.fanyayoung.com";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {isSocialMediaDomain ? (
            <>
              <Route path="/" element={<SocialMedia />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Index />} />
              <Route path="/projects/lg" element={<LGProject />} />
              <Route path="/projects/mgm" element={<MGMProject />} />
              <Route path="/projects/walmart" element={<WalmartProject />} />
              <Route path="/projects/samsclub" element={<SamsClubProject />} />
              <Route path="/social-media" element={<SocialMedia />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<NotFound />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
