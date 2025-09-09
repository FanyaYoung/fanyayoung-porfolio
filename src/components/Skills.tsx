import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Core Expertise");

  const skillCategories = {
    "Core Expertise": [
      { skill: "Prompt Engineering", level: 95 },
      { skill: "Search Query Evaluation", level: 92 },
      { skill: "Tool Invocation Review", level: 90 },
      { skill: "AI Model Interaction Logs", level: 88 },
      { skill: "Query Rewriting", level: 90 },
      { skill: "User Intent Capture", level: 93 }
    ],
    "Technical Skills": [
      { skill: "Python", level: 95 },
      { skill: "SQL", level: 90 },
      { skill: "Computational Statistics", level: 88 },
      { skill: "Information Retrieval", level: 85 },
      { skill: "Data Annotation Tools", level: 90 },
      { skill: "AI/ML Integration", level: 87 }
    ],
    "Evaluation & Quality": [
      { skill: "Annotation & Labeling", level: 93 },
      { skill: "Rubric-Based Evaluation", level: 90 },
      { skill: "Edge Case Handling", level: 88 },
      { skill: "Inter-Rater Agreement", level: 85 },
      { skill: "Search Relevance Testing", level: 87 },
      { skill: "Content Safety Review", level: 92 }
    ],
    "Soft Skills": [
      { skill: "Attention to Detail", level: 98 },
      { skill: "Clear Written Communication", level: 95 },
      { skill: "Evidence-Based Rationale", level: 93 },
      { skill: "Independent Work", level: 90 },
      { skill: "Calibration & Consistency", level: 92 },
      { skill: "Boolean Query Operators", level: 88 }
    ]
  };

  const tools = [
    "Python", "SQL", "Data Annotation Tools", "Information Retrieval Systems", "AI/ML Integration", 
    "Query Operators (AND/OR)", "Boolean Filters", "Search Relevance Testing", "Prompt Engineering Tools",
    "Content Safety Platforms", "Statistical Analysis", "Evidence-Based Evaluation", "User Intent Analysis"
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
                {skillCategories[activeCategory as keyof typeof skillCategories]?.map((item, index) => (
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