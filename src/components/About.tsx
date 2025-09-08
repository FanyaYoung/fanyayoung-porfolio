import { Code, Brain, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profileAvatar from "@/assets/profile-avatar.jpg";

export const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Deep learning, neural networks, and intelligent automation solutions"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Modern web applications with React, Node.js, and cloud technologies"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "High-performance applications with cutting-edge optimization techniques"
    },
    {
      icon: Users,
      title: "Collaborative Innovation",
      description: "Leading teams to deliver innovative solutions and technical excellence"
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about pushing the boundaries of technology and creating 
            intelligent solutions that make a real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={profileAvatar} 
                alt="Fanya Young" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-cyber"
              />
              <div className="absolute inset-0 bg-gradient-cyber opacity-20 rounded-2xl" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate AI/ML engineer and full-stack developer with a deep fascination 
              for creating intelligent systems that solve real-world problems. My journey spans 
              across machine learning research, neural network architectures, and building 
              scalable web applications.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in Python, TensorFlow, React, and cloud platforms, I bridge the 
              gap between cutting-edge AI research and practical, user-friendly applications. 
              I believe in the power of technology to transform industries and improve lives.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {["Python", "TensorFlow", "React", "Node.js", "AWS", "Docker"].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-space-grey border border-primary/20 rounded-full text-sm font-medium text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-neon">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};