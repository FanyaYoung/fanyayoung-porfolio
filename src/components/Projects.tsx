import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import projectShowcase from "@/assets/project-showcase.jpg";

export const Projects = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "Walmart International: Multi‑Piece Shipping",
      description: "Research-led service and communications model for orders fulfilled across multiple boxes, improving customer experience and reducing support inquiries by 40%.",
      image: "/lovable-uploads/walmart-slide1.jpg",
      technologies: ["User Research", "Service Design", "Communications", "Customer Experience"],
      liveUrl: "/projects/walmart",
      githubUrl: null,
      featured: true,
    },
    {
      title: "Make Me Up - AI Beauty & Styling Platform",
      description: "Revolutionary AI-powered beauty and styling application featuring advanced prompt engineering for personalized makeup recommendations, user intent capture for style preferences, and comprehensive content safety review for beauty standards.",
      image: "/lovable-uploads/makemeup-title-slide.jpg",
      technologies: ["React", "TypeScript", "Supabase", "Google Cloud Storage", "SQL", "Python", "Java", "AI/ML Integration", "Prompt Engineering", "User Intent Capture"],
      liveUrl: "https://demo.makemeup.app/",
      githubUrl: "#",
      featured: true
    },
    {
      title: "4Us - Community Connection Platform",
      description: "All your event photos & videos in one shared space. Create private digital spaces where guests can share memories live, with everything organized, downloadable, and yours to keep.",
      image: "/lovable-uploads/4us-title-slide.jpg",
      technologies: ["React", "TypeScript", "Supabase", "Google Cloud Storage", "SQL", "Python", "Java", "Query Rewriting", "Rubric-Based Evaluation", "Content Safety"],
      liveUrl: "https://4us.lovable.app",
      githubUrl: "#",
      featured: true
    },
    {
      title: "MGM - Social Impact & Sustainability Research",
      description: "Comprehensive research report analyzing MGM Resorts' social impact and sustainability initiatives. Strategic research framework for hospitality industry sustainability practices, community engagement, and environmental stewardship programs.",
      image: "/lovable-uploads/mgm-title-slide.jpg",
      technologies: ["React", "TypeScript", "Azure Cloud", "Power BI", "SQL Server", "Python", "Machine Learning", "Sustainability Research", "Social Impact Analysis", "Hospitality Research"],
      liveUrl: "/projects/mgm",
      githubUrl: "#",
      featured: true
    },
    {
      title: "LG - Convenient Stores Market Research",
      description: "Comprehensive market research study focusing on convenient stores and retail consumer behavior. Customer-centered design research bringing insights to product development and strategic positioning.",
      image: "/lovable-uploads/lg-title-slide.jpg",
      technologies: ["React", "TypeScript", "Supabase", "Google Cloud Storage", "SQL", "Python", "Java", "Human-Computer Interaction", "User Experience Research", "Customer Journey Mapping"],
      liveUrl: "/projects/lg",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Search Query Evaluation Framework",
      description: "Enterprise-grade search relevance testing system with Boolean query operators, inter-rater agreement analysis, and calibration & consistency metrics for annotation & labeling quality assurance.",
      image: projectShowcase,
      technologies: ["Python", "SQL", "Information Retrieval", "Statistical Analysis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "AI Tool Invocation Review System",
      description: "Comprehensive platform for AI model interaction logs analysis, tool invocation review workflows, and automated content safety review with attention to detail verification protocols.",
      image: projectShowcase,
      technologies: ["Python", "Data Annotation Tools", "AI Model Integration", "Tool Review"],
      liveUrl: "#",
      githubUrl: "#",
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
            A showcase of my latest work in AI/ML, full-stack development, and innovative tech solutions.
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
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover:border-primary hover:text-primary"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      disabled={project.githubUrl === '#'}
                    >
                      <Github size={16} className="mr-2" />
                      Code
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
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        disabled={project.githubUrl === '#'}
                      >
                        <Github size={16} />
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

        <div className="text-center mt-12">
          <Button className="btn-cyber">
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
