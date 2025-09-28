import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Import all slides
import slide2 from "@/assets/mgm-findings-slide-2.jpg";
import slide3 from "@/assets/mgm-findings-slide-3.jpg";
import slide4 from "@/assets/mgm-findings-slide-4.jpg";
import slide5 from "@/assets/mgm-findings-slide-5.jpg";
import slide6 from "@/assets/mgm-findings-slide-6.jpg";
import slide7 from "@/assets/mgm-findings-slide-7.jpg";
import slide8 from "@/assets/mgm-findings-slide-8.jpg";
import slide9 from "@/assets/mgm-findings-slide-9.jpg";
import slide10 from "@/assets/mgm-findings-slide-10.jpg";

const SLIDES = [
  { src: slide2, caption: "Sustainability initiatives across MGM properties" },
  { src: slide3, caption: "Diversity and inclusion program analysis" },
  { src: slide4, caption: "Customer experience touchpoint mapping" },
  { src: slide5, caption: "Social impact measurement and metrics" },
  { src: slide6, caption: "Implementation roadmap and recommendations" },
  { src: slide7, caption: "Stakeholder engagement and feedback synthesis" },
  { src: slide8, caption: "Digital experience integration opportunities" },
  { src: slide9, caption: "Cross-property scalability assessment" },
  { src: slide10, caption: "Future research directions and next steps" },
];

interface ResearchSlideshowProps {
  className?: string;
}

export const ResearchSlideshow: React.FC<ResearchSlideshowProps> = ({ className = "" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevSlide();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const slideVariants = {
    enter: {
      x: 1000,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: -1000,
      opacity: 0,
    },
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main slideshow container */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
        {/* Slide area */}
        <div className="relative h-96 md:h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              <img
                src={SLIDES[currentSlide].src}
                alt={SLIDES[currentSlide].caption}
                className="w-full h-full object-contain bg-slate-900/50"
              />
              
              {/* Full-screen view button */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70 backdrop-blur"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Full View
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-black/90 border-white/20">
                  <div className="flex items-center justify-center h-full p-4">
                    <img 
                      src={SLIDES[currentSlide].src} 
                      alt={SLIDES[currentSlide].caption} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 backdrop-blur rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 backdrop-blur rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <p className="text-white text-sm text-center font-medium">
            {SLIDES[currentSlide].caption}
          </p>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-sky-400 scale-110"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="flex justify-center mt-4">
        <span className="text-white/60 text-sm">
          {currentSlide + 1} of {SLIDES.length}
        </span>
      </div>
    </div>
  );
};