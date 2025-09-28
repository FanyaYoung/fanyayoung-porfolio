import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, Mail, Sparkles, Images, FlaskConical, Target, BarChart3, Presentation, ArrowLeft, Gauge, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { ResearchSlideshow } from "@/components/ResearchSlideshow";

/**
 * SI&S Case Study — Infused with MGM deck blue tones + Real Artifacts & Photos
 */

const LINKS = {
  pdf: "#",
  prototype: "#",
  email: "mailto:fanyayoung@gmail.com",
};

// 🎨 Blue‑infused gradients with gold accents
const GRADIENTS = {
  hero: "from-sky-500 via-indigo-500 to-blue-700",
  pill: "from-sky-400 to-indigo-500",
  glow: "shadow-[0_0_60px_rgba(59,130,246,0.35)]",
};

// Real STORY images from uploads
const STORY_IMAGES = [
  { caption: "Research planning and brainstorming", src: "/lovable-uploads/mgm-research-planning.jpg" },
  { caption: "Strategic planning framework", src: "/lovable-uploads/mgm-roadmap-1.jpg" },
  { caption: "Project roadmap development", src: "/lovable-uploads/mgm-roadmap-2.jpg" },
];

// Research artifact gallery
const GALLERY = [
  { caption: "Project methodology overview", src: "/lovable-uploads/mgm-proposal-2.jpg" },
  { caption: "Field research in Las Vegas", src: "/lovable-uploads/mgm-field-research.jpg" },
];

const Pill = ({ children }) => (
  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-white bg-gradient-to-r ${GRADIENTS.pill} ${GRADIENTS.glow}`}>
    <Sparkles className="w-3.5 h-3.5" />
    {children}
  </span>
);

const Glass = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl ${GRADIENTS.glow} shadow-xl ${className}`}>{children}</div>
);

const Metric = ({ value, label }) => (
  <div className="rounded-xl border border-white/20 bg-white/5 backdrop-blur p-4 text-center">
    <div className="text-3xl md:text-4xl font-extrabold text-sky-200 leading-none">{value}</div>
    <div className="text-xs md:text-sm text-white/70 mt-1">{label}</div>
  </div>
);

const MGMProject = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <div className="relative max-w-6xl mx-auto px-6 pt-6">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/')}
          className="text-white/80 hover:text-white hover:bg-white/10"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS.hero} opacity-30`} />
        <div className="relative max-w-6xl mx-auto px-6 pt-10 pb-20">
          <Pill>Service Design • HCI • Research</Pill>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-sky-100 drop-shadow-[0_2px_20px_rgba(59,130,246,0.35)]"
          >
            MGM Social Impact & Sustainability Research
          </motion.h1>
          <p className="mt-4 max-w-3xl text-white/80 text-lg">
            Leading a comprehensive field study to identify opportunities for promoting diversity, inclusion, and sustainability 
            efforts across MGM's resort portfolio. Researching initiatives across dining, accommodations, pools, spas, and entertainment.
          </p>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 -mt-10">
          <Glass className="p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Metric value="40+" label="Interviews & Field Observations" />
              <Metric value="8" label="Product Teams Engaged" />
              <Metric value="4" label="Hotel Tiers Compared" />
              <Metric value="100+" label="Insights Generated" />
            </div>
          </Glass>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6 text-sky-200"><FlaskConical className="w-5 h-5" /> Research Planning & Roadmaps</h2>
        <p className="text-white/70 mb-6">
          <strong>Social Impact & Sustainability (SI&S)</strong><br/>
          MGM Resorts, Inc. owns 60% of the "Vegas Strip." MGM wanted to support SI&S efforts by managing resources and promoting diversity and inclusion.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Dialog>
            <DialogTrigger asChild>
              <motion.figure 
                whileHover={{ scale: 1.02 }} 
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur cursor-pointer"
              >
                <img src={STORY_IMAGES[0].src} alt={STORY_IMAGES[0].caption} className="w-full h-56 object-cover transition duration-500 group-hover:scale-[1.03]" />
                <figcaption className="p-3 text-sm text-white/80">{STORY_IMAGES[0].caption}</figcaption>
              </motion.figure>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-black/90 border-white/20">
              <div className="flex items-center justify-center h-full p-4">
                <img 
                  src={STORY_IMAGES[0].src} 
                  alt={STORY_IMAGES[0].caption} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <p className="text-white/70 my-8">
          I brainstormed and developed a comprehensive field study methodology to interview managers, staff, and stakeholders 
          across different tiers of MGM hotels to ensure SI&S initiatives could be evaluated for feasibility across all properties.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Dialog>
            <DialogTrigger asChild>
              <motion.figure 
                whileHover={{ scale: 1.02 }} 
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur cursor-pointer"
              >
                <img src={STORY_IMAGES[1].src} alt={STORY_IMAGES[1].caption} className="w-full h-56 object-cover transition duration-500 group-hover:scale-[1.03]" />
                <figcaption className="p-3 text-sm text-white/80">{STORY_IMAGES[1].caption}</figcaption>
              </motion.figure>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-black/90 border-white/20">
              <div className="flex items-center justify-center h-full p-4">
                <img 
                  src={STORY_IMAGES[1].src} 
                  alt={STORY_IMAGES[1].caption} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <p className="text-white/70 my-8">
          Thus, the SI&S Program Manager (PM) came to me with the request to launch a research initiative that would identify opportunities to promote MGM's efforts within the app and website.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Dialog>
            <DialogTrigger asChild>
              <motion.figure 
                whileHover={{ scale: 1.02 }} 
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur cursor-pointer"
              >
                <img src={STORY_IMAGES[2].src} alt={STORY_IMAGES[2].caption} className="w-full h-56 object-cover transition duration-500 group-hover:scale-[1.03]" />
                <figcaption className="p-3 text-sm text-white/80">{STORY_IMAGES[2].caption}</figcaption>
              </motion.figure>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-black/90 border-white/20">
              <div className="flex items-center justify-center h-full p-4">
                <img 
                  src={STORY_IMAGES[2].src} 
                  alt={STORY_IMAGES[2].caption} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
      </section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center gap-2 mb-4 text-sky-200"><Images className="w-5 h-5" /> <h2 className="text-2xl md:text-3xl font-bold">Research Proposal</h2></div>
        <p className="text-white/70 mb-6 text-sm">Research proposal presentations and field study findings from Las Vegas properties.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {GALLERY.map((g, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <motion.figure 
                  whileHover={{ scale: 1.02 }} 
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur cursor-pointer"
                >
                  <img src={g.src} alt={g.caption} className="w-full h-56 object-cover transition duration-500 group-hover:scale-[1.03]" />
                  <figcaption className="p-3 text-sm text-white/80">{g.caption}</figcaption>
                </motion.figure>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-black/90 border-white/20">
                <div className="flex items-center justify-center h-full p-4">
                  <img 
                    src={g.src} 
                    alt={g.caption} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>

      {/* RESEARCH FINDINGS AND INSIGHTS */}
      <section id="findings" className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center gap-2 mb-4 text-sky-200"><Target className="w-5 h-5" /> <h2 className="text-2xl md:text-3xl font-bold">Research Findings and Insights</h2></div>
        <p className="text-white/70 mb-6 text-sm">Navigate through detailed research findings and strategic recommendations from the comprehensive field study across MGM properties.</p>
        <ResearchSlideshow />
      </section>

      {/* RESEARCH METHODOLOGY */}
      <section id="methodology" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6 text-sky-200"><Gauge className="w-5 h-5" /> Research Methodology</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Glass className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Strategic Areas Researched</h3>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="flex justify-between items-center">
                <span>Dining Experiences</span>
                <span className="text-amber-400 font-semibold ml-4">Sustainability Focus</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Accommodations</span>
                <span className="text-amber-400 font-semibold ml-4">Diversity Programs</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Pool & Spa Services</span>
                <span className="text-amber-400 font-semibold ml-4">Eco-Friendly Practices</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Entertainment</span>
                <span className="text-amber-400 font-semibold ml-4">Inclusion Opportunities</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Gaming & Retail</span>
                <span className="text-amber-400 font-semibold ml-4">Social Impact Integration</span>
              </div>
            </div>
          </Glass>
          
          <Glass className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Research Approach</h3>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="flex justify-between items-center">
                <span>Field Observations</span>
                <span className="text-amber-400 font-semibold ml-4">In-Situ Research</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Stakeholder Interviews</span>
                <span className="text-amber-400 font-semibold ml-4">Staff & Management</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Property Visits</span>
                <span className="text-amber-400 font-semibold ml-4">Multiple Hotel Tiers</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Synthesis & Analysis</span>
                <span className="text-amber-400 font-semibold ml-4">Thematic Analysis</span>
              </div>
            </div>
          </Glass>
        </div>
      </section>

      {/* KEY OUTCOMES & FRAMEWORK */}
      <section id="results" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6 text-sky-200"><BarChart3 className="w-5 h-5" /> Key Outcomes & Framework</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Metric value="100%" label="Executive approval" />
          <Metric value="4" label="Properties assessed" />
          <Metric value="20" label="Interviews conducted" />
          <Metric value="5" label="Strategic areas covered" />
        </div>
        
        <Glass className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Impact & Results</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-amber-400 mb-2">Research Findings</h4>
              <ul className="space-y-1 text-white/80 text-sm">
                <li>• Identified SI&S experiences across all resort touchpoints</li>
                <li>• Mapped feasibility of initiatives across hotel tiers</li>
                <li>• Documented best practices and implementation opportunities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-400 mb-2">Digital Experience Framework</h4>
              <ul className="space-y-1 text-white/80 text-sm">
                <li>• Created framework for new digital SI&S experience</li>
                <li>• Established metrics for promoting diversity & inclusion</li>
                <li>• Provided roadmap for app and website integration</li>
              </ul>
            </div>
          </div>
        </Glass>
      </section>

    
    </div>
  );
};

export default MGMProject;