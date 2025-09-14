import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Briefcase, Users, TrendingUp, MessageCircle, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const EvangelistJobs = () => {
  const keyResponsibilities = [
    "Own end-to-end strategy for generating demand and driving adoption across regional and global teams",
    "Communicate 'what's in it for them' to diverse audiences from frontline operators to senior leaders",
    "Use storytelling to make complex technology accessible and inspiring",
    "Identify optimal go-to-market approaches: roadshows, events, leadership briefings, training series",
    "Build deep product expertise for impactful use cases across regions",
    "Develop creative assets using AI/design tools or partner with creative teams",
    "Cultivate trust-based relationships with regional and global partners",
    "Maintain leadership visibility through progress reporting and impact stories"
  ];

  const requiredSkills = [
    "7+ years in internal product marketing, communications, or similar roles at large tech companies",
    "Strong understanding of AI and GenAI concepts and their business applications",
    "Track record of driving cross-functional initiatives with technical and operational stakeholders",
    "Strong communication and storytelling skills, with ability to influence without direct authority",
    "Proven ability to build relationships across functions and organizational levels",
    "Ability to drive culture and mindset shift toward a tech-first approach",
    "Data-driven decision-maker with experience in performance metrics and KPIs",
    "Demonstrated success using technical initiatives to achieve business goals"
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
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
              Product Evangelist & Program Leader
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Drive adoption of AI-powered products across global teams through strategic storytelling, relationship building, and culture transformation
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Role Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                As a Product Evangelist, Program Leader, you'll be the internal champion for AI-powered products developed by our Customer Obsession team. 
                You'll help regional and global teams understand, adopt, and maximize product value by translating complex capabilities into compelling stories 
                that resonate with operational audiences and inspire technology adoption culture.
              </p>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm font-medium text-primary mb-2">Mission Focus</p>
                <p className="text-sm text-muted-foreground">
                  Create excitement, build understanding, and help teams see how new solutions transform work processes. 
                  Strengthen feedback loops between tech and ops while removing adoption barriers and scaling usage globally.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Key Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Experience Level</span>
                <Badge variant="secondary">7+ Years</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Focus Area</span>
                <Badge variant="secondary">AI/GenAI</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Team Type</span>
                <Badge variant="secondary">Cross-functional</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Scope</span>
                <Badge variant="secondary">Global</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Key Responsibilities
              </CardTitle>
              <CardDescription>
                Strategic initiatives and daily activities that drive product adoption
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {keyResponsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Required Skills & Experience
              </CardTitle>
              <CardDescription>
                Essential qualifications for success in this role
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requiredSkills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Storytelling Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Transform complex AI concepts into compelling narratives that inspire adoption
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Data-Driven Impact</h3>
              <p className="text-sm text-muted-foreground">
                Set and track KPIs to measure adoption success and business impact
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Relationship Building</h3>
              <p className="text-sm text-muted-foreground">
                Cultivate trust-based partnerships across all organizational levels
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Ready to Drive AI Adoption?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join us in transforming how global teams embrace and leverage AI technology. 
                Be the bridge between innovation and implementation.
              </p>
              <Button size="lg" className="mr-4">
                Apply Now
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EvangelistJobs;