import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Legal Technology");

  const skillCategories = {
    "Legal Technology": [
      { skill: "Generative AI Integration", level: 95 },
      { skill: "Legal Tech Vetting & Piloting", level: 93 },
      { skill: "Technology Product Management", level: 90 },
      { skill: "AI Use Case Development", level: 92 },
      { skill: "ROI Measurement & Analytics", level: 88 },
      { skill: "Technology Adoption & Training", level: 91 }
    ],
    "Legal Practice": [
      { skill: "Litigation Strategy", level: 95 },
      { skill: "Legal Research & Analysis", level: 93 },
      { skill: "Client Service Delivery", level: 92 },
      { skill: "Matter Management", level: 90 },
      { skill: "Compliance & Risk Assessment", level: 88 },
      { skill: "Brief Writing & Advocacy", level: 94 }
    ],
    "Innovation & Strategy": [
      { skill: "Workflow Automation", level: 93 },
      { skill: "Process Optimization", level: 91 },
      { skill: "Knowledge Management", level: 90 },
      { skill: "Data Strategy & Analytics", level: 88 },
      { skill: "Change Management", level: 87 },
      { skill: "Benchmarking & Market Analysis", level: 85 }
    ],
    "Client Solutions": [
      { skill: "Dashboard Design", level: 92 },
      { skill: "Client Reporting & Metrics", level: 90 },
      { skill: "Collaboration Platforms", level: 88 },
      { skill: "Budget Tracking Solutions", level: 87 },
      { skill: "Playbook & Precedent Libraries", level: 91 },
      { skill: "Experience Data Capture", level: 89 }
    ],
    "Communication": [
      { skill: "Stakeholder Presentations", level: 96 },
      { skill: "Cross-functional Collaboration", level: 93 },
      { skill: "Attorney Training & Enablement", level: 92 },
      { skill: "Written Communication", level: 95 },
      { skill: "Client Relations", level: 91 },
      { skill: "Project Management", level: 90 }
    ]
  };

  const tools = [
    "Generative AI Platforms", "Legal Analytics", "E-Discovery Tools", "Document Automation",
    "Knowledge Management Systems", "CaseStream", "Dashboard Tools", "Python", "SQL",
    "Workflow Automation", "Client Portals", "Data Visualization", "Legal Research Platforms",
    "AI Prompt Engineering", "Project Management Tools", "Collaboration Platforms"
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for driving legal innovation, technology integration, and client service excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
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

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "4+", label: "Years Litigation" },
            { number: "50+", label: "Projects Led" },
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
