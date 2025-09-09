import { ArrowLeft, ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import projectShowcase from "@/assets/project-showcase.jpg";

const LGProject = () => {
  const navigate = useNavigate();

  const projectDetails = {
    title: "LG - Human Computing Interaction Research",
    description: "Customer-centered design research platform focused on bringing customers to the forefront of product, engineering, and design through shared experiences and physical space exploration.",
    fullDescription: "The goal was simple: bring customers to the forefront of product, engineering, and design. I wanted to help the team develop an understanding of the customer experience. Through a shared experience of exploring the physical space of our users, we would identify pain points, think of new ways to address the problem, and create a solution to delight our users.",
    image: projectShowcase,
    technologies: ["React", "TypeScript", "Supabase", "Google Cloud Storage", "SQL", "Python", "Java", "Human-Computer Interaction", "User Experience Research", "Customer Journey Mapping"],
    features: [
      "Customer-centered design methodology implementation",
      "Physical space exploration and mapping tools", 
      "Pain point identification and analysis systems",
      "Cross-functional team collaboration platform",
      "User experience journey visualization",
      "Customer feedback integration workflows",
      "Design thinking workshop facilitation tools",
      "Iterative solution development tracking"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Python", "Java", "SQL"],
      database: ["Supabase", "PostgreSQL"],
      cloud: ["Google Cloud Storage", "Cloud Functions"],
      research: ["User Experience Research", "Human-Computer Interaction"]
    },
    liveUrl: "#",
    githubUrl: "#"
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="mr-4 hover:bg-primary/10"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back
          </Button>
        </div>

        {/* Project Hero */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-lg mb-8">
            <img 
              src={projectDetails.image} 
              alt={projectDetails.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-cyber opacity-20" />
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              {projectDetails.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {projectDetails.description}
            </p>
            
            <div className="flex gap-4 justify-center">
              <Button className="btn-cyber" disabled={projectDetails.liveUrl === '#'}>
                <Play size={20} className="mr-2" />
                Live Demo
              </Button>
              <Button variant="outline" className="hover:border-primary hover:text-primary" disabled={projectDetails.githubUrl === '#'}>
                <Github size={20} className="mr-2" />
                View Code
              </Button>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {projectDetails.fullDescription}
                </p>
              </CardContent>
            </Card>

            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {projectDetails.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="text-lg text-gradient">Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {projectDetails.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 border-primary/20 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="text-lg text-gradient">Tech Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(projectDetails.techStack).map(([category, techs]) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-primary capitalize mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-1">
                      {techs.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-muted rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="text-lg text-gradient">Project Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full btn-cyber" 
                  size="sm"
                  disabled={projectDetails.liveUrl === '#'}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full hover:border-primary hover:text-primary" 
                  size="sm"
                  disabled={projectDetails.githubUrl === '#'}
                >
                  <Github size={16} className="mr-2" />
                  Source Code
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-neon max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Interested in Similar Projects?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can build something amazing together.
              </p>
              <Button 
                className="btn-cyber"
                onClick={() => navigate('/#contact')}
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LGProject;