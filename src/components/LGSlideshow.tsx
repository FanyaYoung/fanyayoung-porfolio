import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import all LG research slides
import slide1 from "@/assets/lg-slide-1.jpg";
import slide2 from "@/assets/lg-slide-2.jpg";
import slide3 from "@/assets/lg-slide-3.jpg";
import slide4 from "@/assets/lg-slide-4.jpg";
import slide5 from "@/assets/lg-slide-5.jpg";
import slide6 from "@/assets/lg-slide-6.jpg";
import slide7 from "@/assets/lg-slide-7.jpg";
import slide8 from "@/assets/lg-slide-8.jpg";
import slide9 from "@/assets/lg-slide-9.jpg";
import slide10 from "@/assets/lg-slide-10.jpg";
import slide11 from "@/assets/lg-slide-11.jpg";
import slide12 from "@/assets/lg-slide-12.jpg";
import slide13 from "@/assets/lg-slide-13.jpg";
import slide14 from "@/assets/lg-slide-14.jpg";
import slide15 from "@/assets/lg-slide-15.jpg";

const SLIDES = [
  slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8,
  slide9, slide10, slide11, slide12, slide13, slide14, slide15
];

export const LGSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape") setIsFullscreen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Main Slideshow */}
      <div className="relative bg-slate-900/50 backdrop-blur rounded-3xl overflow-hidden border border-white/20">
        {/* Slide Display */}
        <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={SLIDES[currentSlide]}
              alt={`Research slide ${currentSlide + 1}`}
              className="w-full h-full object-contain"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur text-white hover:bg-black/70 transition-all duration-200 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur text-white hover:bg-black/70 transition-all duration-200 z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur text-white hover:bg-black/70 transition-all duration-200 z-10"
            aria-label="Enter fullscreen"
          >
            <Maximize2 size={16} />
          </button>
        </div>

        {/* Controls */}
        <div className="p-4 md:p-6 space-y-4">
          {/* Progress Bar */}
          <div className="flex items-center gap-2 text-sm text-white/70">
            <span>
              {currentSlide + 1} / {SLIDES.length}
            </span>
            <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white/60 rounded-full transition-all duration-300" 
                style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex flex-wrap gap-1 justify-center">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? "bg-white scale-125" 
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur flex items-center justify-center"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={SLIDES[currentSlide]}
                alt={`Research slide ${currentSlide + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 text-white hover:bg-white/20"
              >
                <X size={20} />
              </Button>

              {/* Navigation in Fullscreen */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur text-white hover:bg-black/70 transition-all duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur text-white hover:bg-black/70 transition-all duration-200"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};