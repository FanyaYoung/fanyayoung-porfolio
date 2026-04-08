import { useState, useEffect } from "react";
import { ChevronDown, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import neuralHeroBg from "@/assets/neural-hero-bg.jpg";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Innovation Attorney | Legal Technologist | AI Strategist";

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

      {/* Circuit lines */}
      <svg className="absolute inset-0 z-[1] w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        {/* Horizontal circuit traces */}
        <line x1="0" y1="20%" x2="30%" y2="20%" stroke="hsl(270 100% 70% / 0.15)" strokeWidth="1" />
        <line x1="70%" y1="80%" x2="100%" y2="80%" stroke="hsl(200 100% 70% / 0.12)" strokeWidth="1" />
        <line x1="10%" y1="60%" x2="40%" y2="60%" stroke="hsl(180 100% 50% / 0.1)" strokeWidth="1" />
        <line x1="60%" y1="35%" x2="95%" y2="35%" stroke="hsl(270 100% 70% / 0.1)" strokeWidth="1" />
        {/* Vertical circuit traces */}
        <line x1="25%" y1="0" x2="25%" y2="25%" stroke="hsl(200 100% 70% / 0.1)" strokeWidth="1" />
        <line x1="75%" y1="70%" x2="75%" y2="100%" stroke="hsl(270 100% 70% / 0.12)" strokeWidth="1" />
        {/* Circuit nodes */}
        <circle cx="30%" cy="20%" r="3" fill="hsl(270 100% 70% / 0.4)" className="animate-pulse" />
        <circle cx="70%" cy="80%" r="3" fill="hsl(200 100% 70% / 0.35)" className="animate-pulse" style={{ animationDelay: '1s' }} />
        <circle cx="25%" cy="25%" r="2.5" fill="hsl(180 100% 50% / 0.3)" className="animate-pulse" style={{ animationDelay: '2s' }} />
        <circle cx="75%" cy="70%" r="2.5" fill="hsl(270 100% 70% / 0.3)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="40%" cy="60%" r="2" fill="hsl(200 100% 70% / 0.25)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        <circle cx="60%" cy="35%" r="2" fill="hsl(180 100% 50% / 0.25)" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Fanya Young</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground font-mono min-h-[2rem] mb-8">
            {displayText}
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Optimizing legal service delivery through technology, generative AI, and innovation. 
          Bridging the gap between legal practice and cutting-edge technology to drive efficiency and client value.
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
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors" asChild>
              <a href="mailto:e.fanya.young@gmail.com">
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

      {/* Floating light particles */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full opacity-40 float blur-[2px]" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full opacity-30 float blur-[1px]" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent rounded-full opacity-30 float blur-[1px]" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/5 right-1/3 w-2 h-2 bg-primary rounded-full opacity-20 float blur-[3px]" style={{ animationDelay: "0.7s" }} />
      <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-secondary rounded-full opacity-25 float blur-[2px]" style={{ animationDelay: "1.3s" }} />
    </section>
  );
};