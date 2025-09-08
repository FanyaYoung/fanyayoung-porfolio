import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("AI/ML");

  const skillCategories = {
    "AI/ML": [
      { skill: "TensorFlow/PyTorch", level: 95 },
      { skill: "Deep Learning", level: 90 },
      { skill: "Computer Vision", level: 85 },
      { skill: "Natural Language Processing", level: 80 },
      { skill: "MLOps", level: 85 },
      { skill: "Model Deployment", level: 88 }
    ],
    "Frontend": [
      { skill: "React/Next.js", level: 95 },
      { skill: "TypeScript", level: 90 },
      { skill: "Tailwind CSS", level: 88 },
      { skill: "Three.js", level: 75 },
      { skill: "Web Performance", level: 85 },
      { skill: "Mobile Responsive", level: 92 }
    ],
    "Backend": [
      { skill: "Python", level: 95 },
      { skill: "Node.js", level: 85 },
      { skill: "FastAPI/Django", level: 90 },
      { skill: "PostgreSQL/MongoDB", level: 85 },
      { skill: "GraphQL", level: 80 },
      { skill: "Microservices", level: 88 }
    ],
    "DevOps": [
      { skill: "Docker/Kubernetes", level: 85 },
      { skill: "AWS/GCP", level: 88 },
      { skill: "CI/CD", level: 90 },
      { skill: "Terraform", level: 75 },
      { skill: "Monitoring", level: 80 },
      { skill: "Security", level: 82 }
    ]
  };

  const tools = [
    "Python", "JavaScript", "TypeScript", "React", "TensorFlow", "PyTorch", 
    "AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis", "GraphQL",
    "FastAPI", "Node.js", "Next.js", "Tailwind", "Git", "Linux"
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable, and performant applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Category Selection */}
          <div className="lg:col-span-1">
            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="text-gradient">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {Object.keys(skillCategories).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-primary/20 border border-primary text-primary"
                        : "hover:bg-space-grey border border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="text-gradient">{activeCategory} Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillCategories[activeCategory as keyof typeof skillCategories].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{item.skill}</span>
                      <span className="text-primary font-mono text-sm">{item.level}%</span>
                    </div>
                    <Progress 
                      value={item.level} 
                      className="h-2 bg-space-grey"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tools & Technologies */}
        <Card className="card-neon">
          <CardHeader>
            <CardTitle className="text-gradient text-center">Tools & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-medium text-foreground hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {tool}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "20+", label: "Technologies" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};