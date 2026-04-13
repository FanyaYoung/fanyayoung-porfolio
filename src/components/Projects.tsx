import { ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import projectShowcase from "@/assets/project-showcase.jpg";

export const Projects = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "Sam's Club — Club Pick Up (CPU) & Quick Pick",
      description: "Led a cross-functional initiative to streamline the pickup workflow, aligning operational processes with customer expectations to improve speed and satisfaction across 1.3K touchpoints.",
      image: "/lovable-uploads/samsclub-title-slide.jpg",
      technologies: ["Process Optimization", "Service Design", "Workflow Automation", "Stakeholder Alignment"],
      liveUrl: "/projects/samsclub",
      featured: true,
    },
    {
      title: "Walmart International: Multi‑Piece Shipping",
      description: "Developed and implemented a streamlined service and communications model for multi-box fulfillment, reducing support inquiries by 40% and improving the end-to-end customer experience.",
      image: "/lovable-uploads/walmart-slide1.jpg",
      technologies: ["Process Improvement", "Service Design", "Communications Strategy", "Client Experience"],
      liveUrl: "/projects/walmart",
      featured: true,
    },
    {
      title: "MGM — Social Impact & Sustainability Strategy",
      description: "Delivered a strategic analysis of MGM Resorts' sustainability and social impact programs, producing an actionable framework for community engagement, environmental stewardship, and ESG reporting.",
      image: "/lovable-uploads/mgm-hero.png",
      technologies: ["Strategic Analysis", "ESG Framework", "Stakeholder Engagement", "Environmental Strategy", "Community Impact", "Reporting"],
      liveUrl: "/projects/mgm",
      featured: true
    },
    {
      title: "LG — Convenience Store Market Strategy",
      description: "Conducted comprehensive market analysis of convenience store retail to inform product positioning and strategic growth, translating consumer behavior insights into actionable business recommendations.",
      image: "/lovable-uploads/lg-title-slide.jpg",
      technologies: ["Market Analysis", "Consumer Insights", "Strategic Planning", "Retail Strategy", "Business Development"],
      liveUrl: "/projects/lg",
      featured: true
    },
    {
      title: "Legal Technology Integration",
      description: "Vetting, piloting, and onboarding legal technology platforms including generative AI tools—driving adoption, measuring ROI, and serving as product manager to optimize legal service delivery.",
      image: projectShowcase,
      technologies: ["Legal Tech", "AI Integration", "Product Management", "ROI Analysis", "Change Management"],
      liveUrl: "#",
      featured: false
    },
    {
      title: "AI Strategy & Implementation",
      description: "Identifying generative AI use cases for legal practice, developing training programs, building knowledge libraries, and serving as a strategic resource to accelerate firm-wide AI adoption.",
      image: projectShowcase,
      technologies: ["AI Strategy", "Generative AI", "Training & Enablement", "Knowledge Management", "Implementation Planning"],
      liveUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-space-grey/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projects showcasing legal innovation, technology integration, and client service optimization.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="card-neon group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gradient">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button 
                      size="sm" 
                      className="btn-cyber"
                      onClick={() => {
                        if (project.liveUrl.startsWith('/')) {
                          navigate(project.liveUrl);
                        } else {
                          window.open(project.liveUrl, '_blank');
                        }
                      }}
                      disabled={project.liveUrl === '#'}
                    >
                      <Play size={16} className="mr-2" />
                      {project.liveUrl.startsWith('/') ? 'View Project' : 'Live Demo'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card key={index} className="card-neon group">
                <CardHeader>
                  <CardTitle className="text-lg text-gradient flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => {
                          if (project.liveUrl.startsWith('/')) {
                            navigate(project.liveUrl);
                          } else {
                            window.open(project.liveUrl, '_blank');
                          }
                        }}
                        disabled={project.liveUrl === '#'}
                      >
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
