import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, Cpu, Zap, Target, TrendingUp, Users, MessageCircle, BookOpen, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import profileAvatar from "@/assets/profile-avatar.jpg";

const AIPage = () => {
  const aiExpertise = [
    "Generative AI Strategy & Implementation",
    "Large Language Model (LLM) Optimization",
    "AI Ethics & Responsible AI Development", 
    "Machine Learning Pipeline Design",
    "Natural Language Processing (NLP)",
    "Computer Vision Applications",
    "AI Product Management & Roadmapping",
    "Cross-functional AI Team Leadership"
  ];

  const aiProjects = [
    {
      title: "Enterprise AI Adoption Framework",
      description: "Developed comprehensive strategy for Fortune 500 company to integrate generative AI across operations, resulting in 40% efficiency gains.",
      technologies: ["GPT-4", "LangChain", "Python", "MLOps"],
      impact: "40% efficiency increase"
    },
    {
      title: "AI-Powered Customer Insights Platform", 
      description: "Built machine learning system to analyze customer behavior patterns, enabling personalized experiences at scale.",
      technologies: ["TensorFlow", "PyTorch", "AWS SageMaker", "React"],
      impact: "65% engagement boost"
    },
    {
      title: "Responsible AI Governance System",
      description: "Designed ethical AI framework and bias detection tools for financial services, ensuring compliance and fairness.",
      technologies: ["Fairlearn", "MLflow", "Docker", "Kubernetes"],
      impact: "100% compliance rate"
    }
  ];

  const aiPhilosophy = [
    {
      title: "Human-Centric AI",
      description: "AI should amplify human capabilities, not replace human judgment. Focus on augmentation over automation.",
      icon: Users
    },
    {
      title: "Ethical Innovation",
      description: "Responsible development practices that prioritize transparency, fairness, and social impact.",
      icon: Target
    },
    {
      title: "Practical Impact",
      description: "Bridge the gap between AI research and real-world business applications that deliver measurable value.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
          <div className="text-center mb-12">
            <div className="mb-6">
              <img 
                src={profileAvatar} 
                alt="Fanya Young - AI Strategist"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
              AI Strategy & Innovation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming businesses through intelligent AI solutions, ethical frameworks, and strategic implementation
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                AI Leadership Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As an AI strategist and advocate, I believe in the transformative power of artificial intelligence when applied thoughtfully 
                and ethically. My approach combines deep technical expertise with strategic business acumen to deliver AI solutions that 
                create genuine value while respecting human agency and social responsibility.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                {aiPhilosophy.map((principle, index) => (
                  <div key={index} className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <principle.icon className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold text-sm mb-2">{principle.title}</h4>
                    <p className="text-xs text-muted-foreground">{principle.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" />
                AI Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {aiExpertise.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Featured AI Projects
              </CardTitle>
              <CardDescription>
                Strategic AI implementations that delivered measurable business impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {aiProjects.map((project, index) => (
                  <div key={index} className="p-6 border rounded-lg hover:border-primary/50 transition-colors">
                    <h3 className="font-semibold mb-3">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <div className="text-sm font-medium text-primary">Impact</div>
                      <div className="text-sm text-muted-foreground">{project.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                AI Advocacy & Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                I'm passionate about demystifying AI and helping organizations navigate the complex landscape of artificial intelligence. 
                Through workshops, strategic consulting, and thought leadership, I help teams understand not just what AI can do, 
                but how to implement it responsibly and effectively.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  AI Strategy Workshops for C-Suite
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Cross-functional AI Training Programs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Ethical AI Framework Development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Industry Conference Speaking
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Thought Leadership
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Contributing to the AI discourse through research, writing, and community engagement. 
                I believe in open dialogue about AI's potential and challenges.
              </p>
              <div className="space-y-3">
                <div className="p-3 border rounded">
                  <h4 className="font-medium text-sm mb-1">Research Focus</h4>
                  <p className="text-xs text-muted-foreground">Responsible AI deployment in enterprise environments</p>
                </div>
                <div className="p-3 border rounded">
                  <h4 className="font-medium text-sm mb-1">Publications</h4>
                  <p className="text-xs text-muted-foreground">AI ethics frameworks and implementation guides</p>
                </div>
                <div className="p-3 border rounded">
                  <h4 className="font-medium text-sm mb-1">Community</h4>
                  <p className="text-xs text-muted-foreground">Active contributor to AI ethics and governance discussions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Ready to Transform Your AI Strategy?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's work together to develop an AI strategy that aligns with your business goals while maintaining 
                ethical standards and delivering measurable impact.
              </p>
              <Button size="lg" className="mr-4">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download AI Strategy Guide
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIPage;