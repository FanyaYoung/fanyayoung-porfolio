import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, Mail, Sparkles, Gauge, Images, FlaskConical, Target, BarChart3, Presentation, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

/**
 * LG Case Study — HCI "Customer-in-the-Room" Theme
 * Styled to echo fanyayoung-ai-glow-up.lovable.app (neon glow, glass, bold type)
 * Uses placeholder images for the story beats.
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
  { caption: "Workshop team — shared context", src: "/lovable-uploads/b51ca83a-ba20-47f5-9f68-ad9f62393918.png" },
  { caption: "In-situ research — observing store flows", src: "/lovable-uploads/d2dea265-762a-4ee9-b8a0-c33dfabab111.png" },
  { caption: "Field notes & synthesis in progress (1)", src: "/lovable-uploads/568e8f8a-2fa9-498e-ad88-d7c5f1d70731.png" },
  { caption: "Field notes & synthesis in progress (2)", src: "/lovable-uploads/8932de04-cfce-4125-a046-7724dfc4fc44.png" },
  { caption: "Field notes & synthesis in progress (3)", src: "/lovable-uploads/ee0ffbe7-0ab9-4550-8d0d-7fc70c13e93b.png" },
];

const EMPATHY_IMAGES = [
  { caption: "Persona center — sensory inventory", src: "/lovable-uploads/91433eda-1226-4bb8-bad0-a845cca8c7ec.png" },
  { caption: "Empathy map — before alignment", src: "/lovable-uploads/022a54e2-01db-464f-93b5-3052edb9449b.png" },
  { caption: "Empathy map — after alignment", src: "/lovable-uploads/a7dc820c-dc60-43d3-be31-e5104095685d.png" },
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
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate('/');
            }
          }}
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
          <Pill>Human–Computer Interaction • Field Research • Synthesis</Pill>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
          >
            LG Case Study — "Bring the Customer into the Room"
          </motion.h1>
          <p className="mt-4 max-w-3xl text-white/85 text-lg">
            The goal was simple: bring customers to the forefront of product, engineering, and design. Through a shared
            experience of exploring the <em>physical space</em> of our users, we identified pain points, reframed the problem
            from an HCI perspective, and designed solutions that delight.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LINKS.prototype} className="group inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-slate-900 font-semibold hover:translate-y-[-1px] transition">
              View Prototype <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
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
              <Metric value="24" label="Participants (diary + tasks)" />
              <Metric value="+23%" label="Setup completion (A/B)" />
              <Metric value="-31%" label="Repeat attempts" />
              <Metric value="79" label="SUS score (↑ +18)" />
            </div>
          </Glass>
        </div>
      </section>

      {/* HCI OVERVIEW */}
      <section id="overview" className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2"><Target className="w-5 h-5" /> HCI Lens</h2>
            <p className="text-white/85">
              We treated onboarding as an <strong>ecology of interactions</strong>: people, devices, environment. Pairing a TV and
              phone is not just UI; it's perception, feedback, and shared control. Our north star was to make the system's
              <em> state</em> legible across touchpoints and resilient to error.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-white/90 list-disc pl-5">
              <li>Stateful guidance mirrors TV + phone status</li>
              <li>Inline glossary chips clarify ownership</li>
              <li>Animated confirmations + rollback affordance</li>
              <li>Error recovery with cause + recommended fix</li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <Glass className="p-6">
              <div className="flex items-center gap-2 text-white/90"><Gauge className="w-5 h-5" /> Scope</div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div><div className="text-white/70">Role</div><div className="font-semibold">Lead UX Researcher</div></div>
                <div><div className="text-white/70">Timeline</div><div className="font-semibold">10 weeks (Mar–May 2024)</div></div>
                <div><div className="text-white/70">Team</div><div className="font-semibold">PM(1), Design(2), Eng(3), Data(1)</div></div>
                <div><div className="text-white/70">Methods</div><div className="font-semibold">Diary, Usability, SUS/SEQ, A/B</div></div>
              </div>
            </Glass>
          </div>
        </div>
      </section>

      {/* STORY: FIELD → SYNTHESIS */}
      <section id="story" className="max-w-6xl mx-auto px-6 pb-6">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6"><FlaskConical className="w-5 h-5" /> Shared Experience in the Field</h2>
        <p className="text-white/75 mb-5">
          We brought cross‑functional partners into the field (engineering, design, PM). By observing real environments and
          <em> co‑recording</em> sensory cues (what users <strong>see, hear, do, feel</strong>), alignment emerged quickly and drove better
          design decisions.
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

      {/* EMPATHY MAPS */}
      <section id="empathy" className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center gap-2 mb-4"><Images className="w-5 h-5" /> <h2 className="text-2xl md:text-3xl font-bold">Empathy Mapping</h2></div>
        <p className="text-white/75 mb-6 text-sm">From raw observations to structured insights: SAY / SEE / THINKS / FEELS.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {EMPATHY_IMAGES.map((g, i) => (
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

      {/* SOLUTIONS & IMPACT */}
      <section id="solutions" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6"><BarChart3 className="w-5 h-5" /> Solutions & Impact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            title: "Stateful guidance",
            points: ["Unified progress for TV + phone", "Clear success & rollback", "Ownership chips"]
          },{
            title: "Error‑tolerant pairing",
            points: ["Retry with cause & fix", "Role card at decision points", "QR share for network creds"]
          },{
            title: "Measurement plan",
            points: ["Completion, repeats, ToT", "SUS + SEQ quarterly", "In‑product clarity intercepts"]
          }].map((s) => (
            <Glass key={s.title} className="p-6">
              <div className="flex items-center gap-2 text-white/90 mb-3"><Target className="w-5 h-5" /> <span className="font-semibold">{s.title}</span></div>
              <ul className="list-disc pl-5 space-y-1 text-white/85 text-sm">
                {s.points.map((p) => (<li key={p}>{p}</li>))}
              </ul>
            </Glass>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Metric value="+23%" label="Setup completion (A/B)" />
          <Metric value="-31%" label="Repeat attempts" />
          <Metric value="79" label="SUS score (↑ +18)" />
          <Metric value="52%→11%" label="Stall at 'Pair' step" />
        </div>
      </section>

      {/* RESEARCH SLIDES */}
      <section id="slides" className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-4"><Presentation className="w-5 h-5" /> <h2 className="text-2xl md:text-3xl font-bold">Research Slides</h2></div>
        <Glass className="p-6">
          <p className="text-white/80 text-sm mb-4">Full deck with methods, scripts, coded clips, and KPI dashboards.</p>
          <a href={LINKS.slides} className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-slate-900 font-semibold">
            <ExternalLink className="w-4 h-4" /> Open slides on myportfolio.com
          </a>
        </Glass>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <Glass className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-white/60 text-xs">Next</div>
            <h3 className="text-xl md:text-2xl font-bold">Walkthrough or confidential appendix</h3>
            <p className="text-white/70 text-sm mt-1">Artifacts: task scripts, affinity maps, coded clips, KPI dashboards.</p>
          </div>
          <div className="flex gap-3">
            <a href={LINKS.email} className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-slate-900 font-semibold"><Mail className="w-4 h-4" /> Email Fanya</a>
            <a href={LINKS.pdf} className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-white/40 bg-white/10 hover:bg-white/15 transition"><Download className="w-4 h-4" /> Download PDF</a>
          </div>
        </Glass>
        <p className="text-xs text-white/40 mt-6">© {new Date().getFullYear()} Fanya Young · San Francisco · 415‑650‑9791</p>
      </section>
    </div>
  );
};

export default LGProject;