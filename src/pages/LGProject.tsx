import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, Mail, Sparkles, Users, MapPin, FlaskConical, Target, BarChart3, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

/**
 * LG Future Experience — Bringing Customers into B2B Product Development
 * A workshop study combining field research with cross-functional team alignment
 */

const LINKS = {
  pdf: "#", // optional: "/files/lg_case_study_fanya_young.pdf"
  prototype: "#", // optional: Figma/Proto link
  email: "mailto:fanyayoung@gmail.com",
  slides: "https://fanyauxdd4fd.myportfolio.com/lg",
};

const GRADIENTS = {
  hero: "from-pink-500 via-fuchsia-500 to-indigo-500",
  pill: "from-fuchsia-500 to-indigo-500",
  glow: "shadow-[0_0_60px_rgba(236,72,153,0.35)]",
};

const STORY_IMAGES = [
  { caption: "Cross-functional team workshop", src: "/lovable-uploads/b51ca83a-ba20-47f5-9f68-ad9f62393918.png" },
  { caption: "Field observations in retail stores", src: "/lovable-uploads/d2dea265-762a-4ee9-b8a0-c33dfabab111.png" },
  { caption: "Team synthesis and insights", src: "/lovable-uploads/568e8f8a-2fa9-498e-ad88-d7c5f1d70731.png" },
];

const FINDINGS_IMAGES = [
  { caption: "Team hypotheses before field visits", src: "/lovable-uploads/8932de04-cfce-4125-a046-7724dfc4fc44.png" },
  { caption: "Customer insights and behaviors", src: "/lovable-uploads/91433eda-1226-4bb8-bad0-a845cca8c7ec.png" },
  { caption: "Validated findings and next steps", src: "/lovable-uploads/ee0ffbe7-0ab9-4550-8d0d-7fc70c13e93b.png" },
];

const Pill = ({ children }) => (
  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-white bg-gradient-to-r ${GRADIENTS.pill} ${GRADIENTS.glow}`}>
    <Sparkles className="w-3.5 h-3.5" />
    {children}
  </span>
);

const Glass = ({ children, className = "" }) => (
  <div className={`rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl ${GRADIENTS.glow} shadow-2xl ${className}`}>{children}</div>
);

const Metric = ({ value, label }) => (
  <div className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur p-4 text-center">
    <div className="text-3xl md:text-4xl font-extrabold text-white leading-none">{value}</div>
    <div className="text-xs md:text-sm text-white/80 mt-1">{label}</div>
  </div>
);

const LGProject = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
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
          <Pill>Field Research • Workshop Design • B2B Product Development</Pill>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
          >
            LG Future Experience — Bringing Customers into the Room
          </motion.h1>
          <p className="mt-4 max-w-3xl text-white/85 text-lg">
            The Future Experience team had a mandate to "disrupt the industry" with a new B2B product. The challenge? 
            How to bring "Users" into the "User Experience" before developing the product. I designed a workshop study 
            that brought engineers, PMs, and designers into retail environments to observe real customer behaviors.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LINKS.slides} className="group inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-slate-900 font-semibold hover:translate-y-[-1px] transition">
              View Full Research <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a href={LINKS.email} className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-white/40 hover:bg-white/15 transition">
              <Mail className="w-4 h-4" /> Contact
            </a>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 -mt-10">
          <Glass className="p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Metric value="12" label="Team Members (Eng, PM, Design)" />
              <Metric value="15+" label="Retail Locations Visited" />
              <Metric value="3" label="Customer Journey Phases" />
              <Metric value="100%" label="Team Alignment on Priorities" />
            </div>
          </Glass>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section id="challenge" className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2"><Target className="w-5 h-5" /> The Challenge</h2>
            <p className="text-white/85">
              Too often we build products within a silo, losing sight of user needs, behaviors, and attitudes. 
              The Future Experience team needed to <strong>"disrupt the industry"</strong> with a new B2B product, 
              but how do you bring real customers into the development process before you even know what to build?
            </p>
            <p className="text-white/75">
              I designed a workshop that would help the team develop deep customer understanding through shared field experiences. 
              By exploring the physical spaces where our users actually work, we could identify pain points and 
              build solutions customers would love.
            </p>
          </div>
          <div className="lg:col-span-5">
            <Glass className="p-6">
              <div className="flex items-center gap-2 text-white/90"><Users className="w-5 h-5" /> Project Overview</div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div><div className="text-white/70">Role</div><div className="font-semibold">Lead UX Researcher</div></div>
                <div><div className="text-white/70">Timeline</div><div className="font-semibold">8 weeks</div></div>
                <div><div className="text-white/70">Team</div><div className="font-semibold">Engineers, PMs, Designers</div></div>
                <div><div className="text-white/70">Focus</div><div className="font-semibold">Retail/Convenience Stores</div></div>
              </div>
            </Glass>
          </div>
        </div>
      </section>

      {/* THE WORKSHOP */}
      <section id="workshop" className="max-w-6xl mx-auto px-6 pb-6">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6"><FlaskConical className="w-5 h-5" /> The Workshop Experience</h2>
        <p className="text-white/75 mb-8">
          I created a field research workshop for LG engineers, PMs, and designers. Teams divided into groups of 3 
          and visited convenience stores, gas stations, and retail locations to observe real customer behaviors 
          and pain points in their natural environment.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {STORY_IMAGES.map((g, i) => (
            <motion.figure key={i} whileHover={{ scale: 1.02 }} className="group overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur">
              <div className="relative overflow-hidden">
                <img src={g.src} alt={g.caption} className="w-full h-56 object-cover transition duration-500 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <figcaption className="p-3 text-sm text-white/85">{g.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* FINDINGS */}
      <section id="findings" className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center gap-2 mb-4"><MapPin className="w-5 h-5" /> <h2 className="text-2xl md:text-3xl font-bold">Research Findings</h2></div>
        <p className="text-white/75 mb-6">
          After the workshop, I continued field research across convenience stores and gas stations. 
          We validated some hypotheses and disproved others, gaining crucial insights about customer behavior and needs.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {FINDINGS_IMAGES.map((g, i) => (
            <motion.figure key={i} whileHover={{ scale: 1.02 }} className="group overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur">
              <div className="relative overflow-hidden">
                <img src={g.src} alt={g.caption} className="w-full h-56 object-cover transition duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <figcaption className="p-3 text-sm text-white/85">{g.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6"><BarChart3 className="w-5 h-5" /> Impact & Results</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Glass className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Team Transformation</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>• <strong>Shared understanding</strong> — Everyone observed the same customer pain points</li>
              <li>• <strong>Customer-first mindset</strong> — Decisions now grounded in real user behavior</li>
              <li>• <strong>Better product ideas</strong> — Solutions that address actual needs, not assumptions</li>
              <li>• <strong>Team alignment</strong> — Engineering, PM, and Design all working from same insights</li>
            </ul>
          </Glass>
          
          <Glass className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Research Outcomes</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>• <strong>Validated hypotheses</strong> — Confirmed key assumptions about user behavior</li>
              <li>• <strong>Disproved assumptions</strong> — Discovered gaps in our understanding</li>
              <li>• <strong>New opportunities</strong> — Identified unmet needs in convenience retail</li>
              <li>• <strong>Product roadmap</strong> — Clear direction for B2B product development</li>
            </ul>
          </Glass>
        </div>
      </section>

      {/* RESEARCH DECK */}
      <section id="deck" className="max-w-6xl mx-auto px-6 py-12">
        <Glass className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">Complete Research Deck</h3>
            <p className="text-white/70 text-sm mt-1">Full presentation with field observations, insights, and validated findings.</p>
          </div>
          <div className="flex gap-3">
            <a href={LINKS.slides} className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-slate-900 font-semibold">
              <ExternalLink className="w-4 h-4" /> View Research Deck
            </a>
            <a href={LINKS.email} className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-white/40 bg-white/10 hover:bg-white/15 transition">
              <Mail className="w-4 h-4" /> Contact
            </a>
          </div>
        </Glass>
      </section>

      {/* FOOTER */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <p className="text-xs text-white/40 text-center">© {new Date().getFullYear()} Fanya Young · UX Research · Bringing customers into product development</p>
      </section>
    </div>
  );
};

export default LGProject;