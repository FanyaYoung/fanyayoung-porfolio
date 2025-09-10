import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, Mail, Sparkles, Gauge, Target, BarChart3, Users, TrendingUp, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

/**
 * MGM Case Study — Social Impact & Sustainability Research
 * Field research to promote diversity, inclusion, and sustainability efforts
 */

const LINKS = {
  pdf: "#",
  prototype: "#",
  email: "mailto:fanyayoung@gmail.com",
  presentation: "#",
};

const GRADIENTS = {
  hero: "from-amber-500 via-orange-500 to-red-600",
  pill: "from-amber-500 to-red-600",
  glow: "shadow-[0_0_60px_rgba(251,146,60,0.35)]",
};

const RESEARCH_IMAGES = [
  { caption: "Research planning and brainstorming", src: "/lovable-uploads/mgm-research-planning.jpg" },
  { caption: "Project roadmap development", src: "/lovable-uploads/mgm-roadmap-1.jpg" },
  { caption: "Strategic planning framework", src: "/lovable-uploads/mgm-roadmap-2.jpg" },
];

const PROPOSAL_IMAGES = [
  { caption: "Research proposal presentation", src: "/lovable-uploads/mgm-proposal-1.jpg" },
  { caption: "Project methodology overview", src: "/lovable-uploads/mgm-proposal-2.jpg" },
];

const FINDINGS_IMAGES = [
  { caption: "Field research in Las Vegas", src: "/lovable-uploads/mgm-field-research.jpg" },
  { caption: "Research findings and insights", src: "/lovable-uploads/mgm-findings.jpg" },
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

const MGMProject = () => {
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
          <Pill>Field Research • Social Impact • Sustainability</Pill>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
          >
            MGM Social Impact & Sustainability Research
          </motion.h1>
          <p className="mt-4 max-w-3xl text-white/85 text-lg">
            Leading a comprehensive field study to identify opportunities for promoting diversity, inclusion, and sustainability 
            efforts across MGM's resort portfolio. Researching initiatives across dining, accommodations, pools, spas, and entertainment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LINKS.prototype} className="group inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-slate-900 font-semibold hover:translate-y-[-1px] transition">
              View Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a href={LINKS.pdf} className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-white/40 bg-white/10 hover:bg-white/15 transition">
              <Download className="w-4 h-4" /> Case Study PDF
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
              <Metric value="5" label="Strategic areas researched" />
              <Metric value="12+" label="MGM properties visited" />
              <Metric value="50+" label="Staff interviews conducted" />
              <Metric value="100%" label="Stakeholder buy-in achieved" />
            </div>
          </Glass>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section id="overview" className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2"><Target className="w-5 h-5" /> Research Objectives</h2>
            <p className="text-white/85">
              MGM Resorts owns 60% of the "Vegas Strip" and wanted to support <strong>Social Impact & Sustainability</strong> efforts 
              by managing resources and promoting diversity and inclusion. I led a comprehensive field study to identify opportunities 
              for promoting MGM's SI&S initiatives within their app and website across different hotel tiers.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-white/90 list-disc pl-5">
              <li>Dining sustainability initiatives</li>
              <li>Accommodation diversity programs</li>
              <li>Pool and spa eco-friendly practices</li>
              <li>Entertainment inclusion opportunities</li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <Glass className="p-6">
              <div className="flex items-center gap-2 text-white/90"><Gauge className="w-5 h-5" /> Project Details</div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div><div className="text-white/70">Role</div><div className="font-semibold">Lead UX Researcher</div></div>
                <div><div className="text-white/70">Timeline</div><div className="font-semibold">6 months (2022)</div></div>
                <div><div className="text-white/70">Team</div><div className="font-semibold">PM(1), Researcher(1), SI&S Team</div></div>
                <div><div className="text-white/70">Methods</div><div className="font-semibold">Field Studies, Interviews</div></div>
              </div>
            </Glass>
          </div>
        </div>
      </section>

      {/* RESEARCH PLANNING */}
      <section id="planning" className="max-w-6xl mx-auto px-6 pb-6">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6"><Users className="w-5 h-5" /> Research Planning & Roadmaps</h2>
        <p className="text-white/75 mb-6">
          I brainstormed and developed a comprehensive field study methodology to interview managers, staff, and stakeholders 
          across different tiers of MGM hotels to ensure SI&S initiatives could be evaluated for feasibility across all properties.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {RESEARCH_IMAGES.map((image, index) => (
            <motion.figure key={index} whileHover={{ scale: 1.02 }} className="group overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur">
              <div className="relative overflow-hidden">
                <img src={image.src} alt={image.caption} className="w-full h-56 object-cover transition duration-500 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <figcaption className="p-3 text-sm text-white/85">{image.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* RESEARCH PROPOSAL */}
      <section id="proposal" className="max-w-6xl mx-auto px-6 pb-6">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6"><Target className="w-5 h-5" /> Research Proposal</h2>
        <p className="text-white/75 mb-6">
          Together with the SI&S Program Manager, I created a comprehensive proposal that was presented to the VP of Trips. 
          The project received full approval and executive support.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {PROPOSAL_IMAGES.map((image, index) => (
            <motion.figure key={index} whileHover={{ scale: 1.02 }} className="group overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur">
              <div className="relative overflow-hidden">
                <img src={image.src} alt={image.caption} className="w-full h-64 object-cover transition duration-500 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <figcaption className="p-3 text-sm text-white/85">{image.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* FIELD RESEARCH & FINDINGS */}
      <section id="findings" className="max-w-6xl mx-auto px-6 pb-6">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6"><BarChart3 className="w-5 h-5" /> Field Research & Findings</h2>
        <p className="text-white/75 mb-6">
          In Las Vegas, we coordinated with the SI&S team at HQ and toured all scheduled properties. I synthesized all findings 
          and presented a comprehensive report to stakeholders, identifying key SI&S opportunities across the resort portfolio.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {FINDINGS_IMAGES.map((image, index) => (
            <motion.figure key={index} whileHover={{ scale: 1.02 }} className="group overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur">
              <div className="relative overflow-hidden">
                <img src={image.src} alt={image.caption} className="w-full h-64 object-cover transition duration-500 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <figcaption className="p-3 text-sm text-white/85">{image.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* RESEARCH METHODOLOGY */}
      <section id="methodology" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6"><Gauge className="w-5 h-5" /> Research Methodology</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Glass className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Strategic Areas Researched</h3>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="flex justify-between items-center">
                <span>Dining Experiences</span>
                <span className="text-amber-400 font-semibold">Sustainability Focus</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Accommodations</span>
                <span className="text-amber-400 font-semibold">Diversity Programs</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Pool & Spa Services</span>
                <span className="text-amber-400 font-semibold">Eco-Friendly Practices</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Entertainment</span>
                <span className="text-amber-400 font-semibold">Inclusion Opportunities</span>
              </div>
            </div>
          </Glass>
          
          <Glass className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Research Approach</h3>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="flex justify-between items-center">
                <span>Field Observations</span>
                <span className="text-amber-400 font-semibold">In-Situ Research</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Stakeholder Interviews</span>
                <span className="text-amber-400 font-semibold">Staff & Management</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Property Visits</span>
                <span className="text-amber-400 font-semibold">Multiple Hotel Tiers</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Synthesis & Analysis</span>
                <span className="text-amber-400 font-semibold">Thematic Analysis</span>
              </div>
            </div>
          </Glass>
        </div>
      </section>

      {/* IMPACT & RESULTS */}
      <section id="results" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6"><BarChart3 className="w-5 h-5" /> Impact & Results</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Metric value="100%" label="Executive approval" />
          <Metric value="12+" label="Properties assessed" />
          <Metric value="50+" label="Interviews conducted" />
          <Metric value="5" label="Strategic areas covered" />
        </div>
        
        <Glass className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Key Outcomes & Framework</h3>
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

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <Glass className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-white/60 text-xs">Next Steps</div>
            <h3 className="text-xl md:text-2xl font-bold">Explore Research Deep Dive</h3>
            <p className="text-white/70 text-sm mt-1">Detailed methodology, interview transcripts, and comprehensive findings report.</p>
          </div>
          <div className="flex gap-3">
            <a href={LINKS.email} className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-slate-900 font-semibold"><Mail className="w-4 h-4" /> Contact Fanya</a>
            <a href={LINKS.pdf} className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-white/40 bg-white/10 hover:bg-white/15 transition"><Download className="w-4 h-4" /> Download PDF</a>
          </div>
        </Glass>
        <p className="text-xs text-white/40 mt-6">© {new Date().getFullYear()} Fanya Young · Lead UX Researcher · MGM Resorts International</p>
      </section>
    </div>
  );
};

export default MGMProject;