import { Code, Brain, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Prompt Engineering",
      description: "AI model interaction logs, query rewriting, and user intent capture with evidence-based rationale"
    },
    {
      icon: Code,
      title: "Search Query Evaluation",
      description: "Tool invocation review, search relevance testing, and rubric-based evaluation systems"
    },
    {
      icon: Zap,
      title: "Data Annotation & Analysis",
      description: "Annotation & labeling with computational statistics and information retrieval expertise"
    },
    {
      icon: Users,
      title: "Quality Assurance",
      description: "Inter-rater agreement, edge case handling, and content safety review with attention to detail"
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
              I'm a dedicated AI Design Researcher and Prompt Engineer specializing in search query evaluation, 
              tool invocation review, and AI model interaction analysis. With exceptional attention to detail 
              and clear written communication, I excel at user intent capture and query rewriting for 
              optimal AI system performance.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans Python, SQL, computational statistics, and data annotation tools. 
              I provide evidence-based rationale through rubric-based evaluation, ensuring calibration & consistency 
              in independent work environments while maintaining the highest standards in content safety review.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {["Python", "SQL", "Prompt Engineering", "Data Annotation Tools", "Information Retrieval", "AI/ML Integration"].map((tech) => (
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