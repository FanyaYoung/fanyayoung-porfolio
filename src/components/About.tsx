import { Code, Brain, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const About = () => {
  const features = [
    {
      icon: Users,
      title: "Researcher",
      description: "User research methodologies, behavioral analysis, and evidence-based insights to drive product decisions"
    },
    {
      icon: Code,
      title: "AI Strategist", 
      description: "Strategic AI implementation, transformation roadmaps, and intelligent solution architecture for business growth"
    },
    {
      icon: Zap,
      title: "Advocate",
      description: "Championing user needs, stakeholder alignment, and driving organizational change through compelling narratives"
    },
    {
      icon: Brain,
      title: "Evangelist",
      description: "AI adoption leadership, cross-functional team enablement, and building cultures that embrace innovation"
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

        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi. I'm Fanya Young.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a UX Research Lead and AI Consultant. 
              With my 11+ years of UX Research and AI consulting, I guide
              companies like Toyota, Walmart, Expedia, and ServiceNow
              to translate complex AI and product challenges into clear,
              user-driven strategies.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Right now, I'm also pursuing my eMBA at Quantic,
              where I'm sharpening my skills in strategy, marketing, 
              data analytics, probability, and statistics.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              What makes me different?
              My deep expertise in human-computer interaction,
              hands-on AI product building and transformation work,
              and complex problem solving skills. Also, my work as a 
              trial attorney honed my skills of 
              creating engaging presentations, 
              compelling narratives, and 
              influencing stakeholders.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My unique skills lets me bridge research, strategy,
              and business execution—
              so employers can accelerate AI adoption,
              scale research across global teams,
              and deliver measurable business impact.
              If you're ready to unlock that advantage,
              let's connect. Email me directly at e.fanya.young@gmail.com
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {["Python", "SQL", "User Research", "Qualitative Analysis", "Information Retrieval", "AI/ML Integration"].map((tech) => (
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
          <h3 className="text-2xl font-semibold mb-8 text-gradient">Explore My Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="group hover:border-primary/50 transition-colors cursor-pointer">
              <CardContent className="p-8">
                <Link to="/ai-strategy" className="block">
                  <Brain className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-semibold mb-3">AI Strategy & Innovation</h4>
                  <p className="text-muted-foreground">
                    Dive deep into my AI expertise, strategic frameworks, and innovative solutions that transform businesses through intelligent technology implementation.
                  </p>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="group hover:border-primary/50 transition-colors cursor-pointer">
              <CardContent className="p-8">
                <Link to="/evangelist-jobs" className="block">
                  <Users className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-semibold mb-3">Product Evangelism</h4>
                  <p className="text-muted-foreground">
                    Learn about my approach to product evangelism, driving adoption across global teams, and building cultures that embrace technology innovation.
                  </p>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};