import { Code, Brain, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Innovation Attorney",
      description: "Leading projects to optimize legal service delivery, streamline workflows, and integrate technology into the practice of law"
    },
    {
      icon: Code,
      title: "Legal Technologist", 
      description: "Vetting, piloting, and onboarding legal technology including generative AI—driving adoption, measuring ROI, and serving as product manager"
    },
    {
      icon: Zap,
      title: "AI Strategist",
      description: "Identifying AI and generative AI use cases for legal practice, developing training, and serving as a one-on-one resource for attorneys"
    },
    {
      icon: Users,
      title: "Client Solutions",
      description: "Designing dashboards, workflow automation, client-facing platforms, and data-driven solutions to improve collaboration and reporting"
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
            Driving innovation at the intersection of law, technology, and business strategy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi. I'm Fanya Young.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an Innovation Attorney and Legal Technologist with a J.D. and 
              extensive experience in litigation. I lead projects to optimize 
              legal service delivery, integrate generative AI into legal practice, 
              and design client-facing solutions that drive measurable results.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I also hold an eMBA from Quantic, with expertise in 
              strategy, marketing, data analytics, and business execution.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              What makes me different? I combine deep legal expertise with 
              hands-on technology implementation. As a former trial attorney, 
              I bring compelling storytelling, stakeholder influence, and 
              rigorous analytical thinking to every project. Now I channel 
              those skills into driving legal innovation—vetting and deploying 
              AI tools, automating workflows, building knowledge libraries, 
              and designing dashboards that transform how legal teams operate.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My unique combination of legal practice and technology expertise 
              lets me bridge the gap between attorneys and innovation—
              helping firms accelerate AI adoption, improve efficiency, 
              and deliver exceptional client service.
              If you're ready to unlock that advantage,
              let's connect. Email me directly at e.fanya.young@gmail.com
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {["Legal Technology", "Generative AI", "Project Management", "Knowledge Management", "Workflow Automation", "Client Solutions"].map((tech) => (
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

        {/* Navigation Options */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-gradient">My Work</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing user research, AI strategy, and product development across various industries.
          </p>
        </div>
      </div>
    </section>
  );
};