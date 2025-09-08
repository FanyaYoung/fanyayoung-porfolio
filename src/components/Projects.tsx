import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import projectShowcase from "@/assets/project-showcase.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Neural Network Visualizer",
      description: "Interactive web application for visualizing and understanding neural network architectures in real-time. Built with TensorFlow.js and React.",
      image: projectShowcase,
      technologies: ["React", "TensorFlow.js", "D3.js", "Python"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI-Powered Code Assistant",
      description: "VS Code extension that uses machine learning to provide intelligent code suggestions and automated refactoring capabilities.",
      image: projectShowcase,
      technologies: ["TypeScript", "OpenAI API", "VS Code API", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Full-stack dashboard for real-time data analysis and predictive modeling using advanced machine learning algorithms.",
      image: projectShowcase,
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Computer Vision API",
      description: "RESTful API for image recognition and object detection, deployed on AWS with auto-scaling capabilities.",
      image: projectShowcase,
      technologies: ["Python", "PyTorch", "FastAPI", "AWS", "Docker"],
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
                    <Button size="sm" className="btn-cyber">
                      <Play size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="hover:border-primary hover:text-primary">
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
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
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
