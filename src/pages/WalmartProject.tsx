import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Users, Clock, Target, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const LINKS = {
  email: "mailto:fanya.young@walmart.com",
  testPlan: "/lovable-uploads/Mutliple_Shipment_v31.docx",
  studyReport: "/lovable-uploads/Delivery_for_High-Value_Item.docx"
};

const GRADIENTS = {
  walmart: "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800",
  walmartGlow: "shadow-[0_0_40px_rgba(59,130,246,0.3)]",
  pill: "bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30",
  glass: "bg-white/5 backdrop-blur-sm border border-white/10"
};

const RESEARCH_IMAGES = [
  { src: "/lovable-uploads/walmart-slide6.jpg", caption: "67% likelihood to order with MPS model" },
  { src: "/lovable-uploads/walmart-slide7.jpg", caption: "Perception of MPS effort & complexity" },
  { src: "/lovable-uploads/walmart-slide8.jpg", caption: "Building confidence through guarantees" }
];

const INSIGHTS_IMAGES = [
  { src: "/lovable-uploads/walmart-slide17-2.jpg", caption: "Insights & Recommendations Overview" },
  { src: "/lovable-uploads/walmart-slide18-2.jpg", caption: "Mental Model for MPS" },
  { src: "/lovable-uploads/walmart-slide19.jpg", caption: "Information for Customers" },
  { src: "/lovable-uploads/walmart-slide20.jpg", caption: "Optimal User Experience" },
  { src: "/lovable-uploads/walmart-slide21.jpg", caption: "Customer's Proof of Delivery" }
];

const GALLERY_IMAGES = [
  { src: "/lovable-uploads/walmart-slide1.jpg", caption: "Project Overview & Context" },
  { src: "/lovable-uploads/walmart-slide2.jpg", caption: "Problem Statement" },
  { src: "/lovable-uploads/walmart-slide3.jpg", caption: "Research Objectives" },
  { src: "/lovable-uploads/walmart-slide4.jpg", caption: "Research Approach" },
  { src: "/lovable-uploads/walmart-slide5.jpg", caption: "Methodology Details" }
];

const Pill = ({ icon: Icon, children, className = "" }: { icon: any; children: React.ReactNode; className?: string }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${GRADIENTS.pill} ${className}`}>
    <Icon className="w-4 h-4" />
    {children}
  </div>
);

const Glass = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`${GRADIENTS.glass} rounded-xl p-6 ${className}`}>
    {children}
  </div>
);

const Metric = ({ value, label }: { value: string; label: string }) => (
  <Glass className="text-center">
    <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </Glass>
);

export default function WalmartProject() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="gap-2 hover:bg-accent/50"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-600/5" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <Pill icon={Target}>Lead Researcher</Pill>
              <Pill icon={Users}>15 Participants</Pill>
              <Pill icon={Clock}>Oct–Nov Sprint</Pill>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                Walmart International
              </span>
              <br />
              <span className="text-foreground/90">Multi‑Piece Shipping</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-4 leading-relaxed"
            >
              A research-led service and communications model for orders fulfilled across multiple boxes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-y border-border/50 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Metric value="67%" label="Likely to Order" />
            <Metric value="73%" label="Trust SMS Updates" />
            <Metric value="40%" label="Inquiry Reduction" />
            <Metric value="5-10" label="Acceptable Comms" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Problem & Objectives */}
        <section className="max-w-4xl mx-auto">
          <Glass>
            <h2 className="text-3xl font-bold mb-6 text-center">Research Challenge</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Problem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Large or complex orders (e.g., furniture) are fulfilled in multiple boxes. Customers often receive partial updates 
                  (e.g., email for 1 box but silence on the others) and lack the identifiers needed to track or resolve issues for each box. 
                  This creates uncertainty, more work, and an elevated sense of risk.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-500">Objectives</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Understand attitudes and expectations for multi-piece shipments (MPS)</li>
                  <li>• Define the type, channel, and cadence of notifications that reduce effort and anxiety</li>
                  <li>• Identify proof-of-delivery (POD) details customers need to self-serve and resolve issues</li>
                </ul>
              </div>
            </div>
          </Glass>
        </section>

        {/* Research Findings */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Research Findings</h2>
            <p className="text-xl text-muted-foreground">Insights from unmoderated study with 15 Canadian online shoppers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {RESEARCH_IMAGES.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">{image.caption}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-full h-[90vh] p-0 bg-black/90 border-white/20">
                  <div className="flex items-center justify-center h-full p-4">
                    <img 
                      src={image.src} 
                      alt={image.caption} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <Glass className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">Mental Model: What Customers Are Trying to Do</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-muted-foreground">
                <li>• Track multiple boxes without manual reconciliation</li>
                <li>• Receive directly or coordinate with others at the right moment</li>
              </ul>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Mitigate risk (missing/damaged items) and know who is responsible</li>
                <li>• Resolve issues quickly using the right identifiers</li>
              </ul>
            </div>
          </Glass>
        </section>

        {/* Research Approach Gallery */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Research Approach</h2>
            <p className="text-xl text-muted-foreground">Unmoderated user test with hybrid card sort and structured prompts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {GALLERY_IMAGES.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3">
                        <p className="text-xs text-muted-foreground text-center">{image.caption}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-full h-[90vh] p-0 bg-black/90 border-white/20">
                  <div className="flex items-center justify-center h-full p-4">
                    <img 
                      src={image.src} 
                      alt={image.caption} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* Insights & Recommendations */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Insights & Recommendations</h2>
            <p className="text-xl text-muted-foreground">Strategic framework for multi-piece shipping communications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {INSIGHTS_IMAGES.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">{image.caption}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-full h-[90vh] p-0 bg-black/90 border-white/20">
                  <div className="flex items-center justify-center h-full p-4">
                    <img 
                      src={image.src} 
                      alt={image.caption} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <Glass className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">Experience Principles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-muted-foreground">
                <li>• Stage communications by customer need (manifest → progress → completion)</li>
                <li>• Make per-box status visible (container-level tracking + linkable IDs)</li>
              </ul>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Prioritize actionability (clear identifiers, next best action)</li>
                <li>• Design for the unhappy paths (delays, split deliveries, damage, theft)</li>
              </ul>
            </div>
          </Glass>
        </section>

        {/* Communications Model */}
        <section className="max-w-4xl mx-auto">
          <Glass>
            <h2 className="text-3xl font-bold mb-8 text-center">Proposed Communications Model</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">At Order & Kickoff (Email)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Order confirmation + MPS explainer (what to expect, warehouse/source, typical timelines)</li>
                  <li>• Per-box manifest (box count, items per box if known, carrier(s))</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-blue-500 mb-3">When First Box Ships (Email)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Explicitly state: "1 of N boxes has shipped"</li>
                  <li>• Link to tracking hub that shows each box as a tile with its own carrier + tracking</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Subsequent Shipments (SMS preferred, Email fallback)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• "Box X of N is out for delivery" → link to tracking hub</li>
                  <li>• "Box X of N delivered" → quick feedback affordance if something's wrong</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Completion (Email)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• "All N boxes delivered" + proof-of-delivery pack</li>
                  <li>• One-click pathways for: report missing/damaged, contact retailer/carrier with prefilled IDs</li>
                </ul>
              </div>
            </div>
          </Glass>
        </section>

        {/* Impact & Results */}
        <section className="text-center">
          <Glass className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Impact & Next Steps</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Key Results</h3>
                <ul className="space-y-2 text-muted-foreground text-left">
                  <li>• 67% more likely to order with MPS model</li>
                  <li>• 73% trust SMS updates for day-of coordination</li>
                  <li>• 40% projected reduction in "where is my box?" inquiries</li>
                  <li>• Clarity and accountability ranked as top benefits</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-500">Next Steps</h3>
                <ul className="space-y-2 text-muted-foreground text-left">
                  <li>• Prototype tracking hub and validate with n=12–18</li>
                  <li>• A/B test email-first vs. SMS-first for mid-journey updates</li>
                  <li>• Instrument funnel: tracking opens, issue-report conversion</li>
                  <li>• Measure contact deflection rates</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border/50 pt-6">
              <p className="text-sm text-muted-foreground">
                <strong>Credits:</strong> Fanya Young (Lead Researcher) • Partners: Inventory & Fulfillment, Customer Care, Last-Mile Delivery
              </p>
            </div>
          </Glass>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Fanya Young. Research conducted at Walmart International.
          </p>
        </div>
      </footer>
    </div>
  );
}