import { useState, useEffect } from "react";
import { ChevronDown, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import neuralHeroBg from "@/assets/neural-hero-bg.jpg";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "AI Strategist | Advocate | Evangelist | Researcher";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={neuralHeroBg} 
          alt="Neural network background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-bg" />
        <div className="absolute inset-0 neural-grid" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glitch">
            <span className="text-gradient">Fanya Young</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground font-mono min-h-[2rem] mb-8">
            {displayText}
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting intelligent solutions at the intersection of artificial intelligence, 
          machine learning, and cutting-edge web technologies. Building the future, one algorithm at a time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <Button 
            className="btn-cyber text-lg px-8 py-4"
            onClick={() => scrollToNext()}
          >
            Explore My Work
          </Button>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors" asChild>
              <a href="https://www.linkedin.com/in/fanyayoung/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <a href="mailto:e.fanya.young@gmail.com" className="flex items-center justify-center w-full h-full">
                <Mail size={24} />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToNext}
            className="animate-bounce p-2 rounded-full hover:bg-primary/10 transition-colors"
          >
            <ChevronDown size={32} className="text-primary" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full opacity-60 float" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full opacity-40 float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent rounded-full opacity-50 float" style={{ animationDelay: "2s" }} />
    </section>
  );
};