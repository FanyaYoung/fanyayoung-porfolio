import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { SEO } from "@/components/SEO";

const Index = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Fanya Young Portfolio",
      url: "https://fanyayoung-porfolio.lovable.app/",
      author: { "@type": "Person", name: "Fanya Young" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Fanya Young",
      jobTitle: "Innovation Attorney & AI Strategist",
      url: "https://fanyayoung-porfolio.lovable.app/",
      email: "mailto:e.fanya.young@gmail.com",
      sameAs: ["https://www.linkedin.com/in/fanyayoung/"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Fanya Young — Innovation Attorney & AI Strategist"
        description="Portfolio of Fanya Young — Innovation Attorney, AI Strategist, and Legal Technologist bridging law, technology, and service design."
        path="/"
        jsonLd={jsonLd}
      />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
