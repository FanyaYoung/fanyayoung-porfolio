import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import headshot from "@/assets/attorney-headshot.png";
import columns from "@/assets/attorney-columns.png";
import desk from "@/assets/attorney-desk.png";

// Warm Editorial Premium — Stone / Navy / Brass
// Refined typography, elegant whitespace, governance & boardroom sophistication.

const palette = {
  ivory: "#F6F2EC",
  stone: "#E8E2D6",
  ink: "#0E1A2B",
  navy: "#1B2A44",
  brass: "#B08A4A",
  charcoal: "#2A2A2A",
  muted: "#6B6357",
};

const ATTORNEY_ORIGIN = "https://attorney.fanyayoung.com";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fanya Young",
  jobTitle: "Innovation Attorney & General Counsel",
  description:
    "California-licensed attorney with 17+ years of practice. General Counsel at VRP Labs, AI Governance Advisor, and Legal Technologist.",
  url: ATTORNEY_ORIGIN,
  email: "mailto:e.fanya.young@gmail.com",
  sameAs: ["https://www.linkedin.com/in/fanyayoung/"],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "UC Law SF" },
    { "@type": "CollegeOrUniversity", name: "Quantic School of Business and Technology" },
  ],
  knowsAbout: [
    "AI Governance",
    "Artificial Intelligence Law",
    "General Counsel",
    "Commercial Contracts",
    "Legal Operations",
    "Risk Management",
    "Litigation",
  ],
  worksFor: { "@type": "Organization", name: "VRP Labs" },
};

const profServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Fanya Young — Innovation Attorney",
  url: ATTORNEY_ORIGIN,
  areaServed: "US",
  serviceType: [
    "AI Governance Counsel",
    "Fractional General Counsel",
    "Commercial Contracts",
    "Legal Operations Advisory",
  ],
  provider: { "@type": "Person", name: "Fanya Young" },
};

const Attorney = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  const serif = { fontFamily: "'Cormorant Garamond', 'Times New Roman', serif" };
  const sans = { fontFamily: "'Inter', -apple-system, sans-serif" };

  return (
    <div style={{ background: palette.ivory, color: palette.ink, ...sans }} className="min-h-screen">
      <Helmet>
        <title>Fanya Young — Innovation Attorney, AI Governance Counsel & General Counsel</title>
        <meta name="description" content="California-licensed Innovation Attorney with 17+ years of practice. General Counsel at VRP Labs, AI Governance Advisor, and Legal Technologist serving founders, boards, and executives." />
        <meta name="keywords" content="innovation attorney, AI attorney, AI governance counsel, fractional general counsel, legal operations, California attorney, AI compliance, Fanya Young" />
        <link rel="canonical" href={`${ATTORNEY_ORIGIN}/`} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Fanya Young — Innovation Attorney & AI Governance Counsel" />
        <meta property="og:description" content="General Counsel · AI Governance · Commercial Contracts · Legal Operations. 17+ years of practice." />
        <meta property="og:url" content={`${ATTORNEY_ORIGIN}/`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fanya Young — Innovation Attorney & AI Governance Counsel" />
        <meta name="twitter:description" content="General Counsel · AI Governance · Commercial Contracts · Legal Operations." />
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(profServiceJsonLd)}</script>
      </Helmet>
      {/* Top Bar */}
      <header className="border-b" style={{ borderColor: `${palette.ink}1A` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div style={serif} className="text-xl tracking-wide">
            Fanya <span style={{ color: palette.brass }}>Young</span>
          </div>
          <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em]" style={{ color: palette.muted }}>
            <a href="#about" className="hover:text-[color:var(--ink)]" style={{ ['--ink' as any]: palette.ink }}>About</a>
            <a href="#expertise">Expertise</a>
            <a href="#leadership">Leadership</a>
            <a href={typeof window !== "undefined" && window.location.hostname === "attorney.fanyayoung.com" ? "/articles" : "/attorney/articles"}>Articles</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-block text-xs uppercase tracking-[0.2em] border px-5 py-2.5 transition-colors"
             style={{ borderColor: palette.navy, color: palette.navy }}>
            Engage
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 lg:pt-28 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] mb-8" style={{ color: palette.brass }}>
              General Counsel · Innovation Attorney · AI Governance
            </div>
            <h1 style={serif} className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-light tracking-tight">
              Modern counsel<br />
              for an era of<br />
              <em style={{ color: palette.navy }}>accelerated change.</em>
            </h1>
            <p className="mt-10 text-lg leading-relaxed max-w-xl" style={{ color: palette.muted }}>
              California-licensed attorney with 17 years of legal practice and 11 years
              partnering with product, operations, and technology teams. Fanya Young
              pairs trial-tested judgment with fluency in AI, governance, and
              operational design—helping executives navigate complexity with clarity.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a href="#expertise" className="px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition-opacity hover:opacity-90"
                 style={{ background: palette.navy }}>
                View Practice Areas
              </a>
              <a href="#contact" className="px-8 py-4 text-xs uppercase tracking-[0.25em] border transition-colors"
                 style={{ borderColor: palette.ink, color: palette.ink }}>
                Request Consultation
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32" style={{ background: palette.brass, opacity: 0.15 }} />
              <img src={headshot} alt="Fanya Young, Innovation Attorney" className="relative w-full object-cover aspect-[4/5]" />
              <div className="absolute -bottom-6 -right-6 w-40 h-1" style={{ background: palette.brass }} />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="border-y py-6" style={{ borderColor: `${palette.ink}1A`, background: palette.stone }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap gap-x-12 gap-y-3 text-xs uppercase tracking-[0.3em]" style={{ color: palette.muted }}>
          <span>AI Governance</span><span>·</span>
          <span>General Counsel</span><span>·</span>
          <span>Commercial Contracts</span><span>·</span>
          <span>Risk Management</span><span>·</span>
          <span>Legal Operations</span><span>·</span>
          <span>Litigation</span>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <img src={columns} alt="Architectural columns" className="w-full object-cover aspect-[4/5] grayscale" />
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <div className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: palette.brass }}>About</div>
            <h2 style={serif} className="text-4xl md:text-5xl font-light leading-tight mb-10">
              A practice rooted in <em style={{ color: palette.navy }}>rigor</em>,
              shaped by <em style={{ color: palette.navy }}>innovation</em>.
            </h2>
            <div className="space-y-6 text-base leading-loose" style={{ color: palette.charcoal }}>
              <p>
                Fanya Young is a California-licensed attorney with 17 years of legal
                practice and 11 years partnering with product, operations, and
                technology teams. She currently serves as General Counsel for VRP Labs
                (Valley Research Park), a shared life-science lab platform, where she
                advises executive leadership on legal, operational, and business-risk
                matters across a multi-tenant environment.
              </p>
              <p>
                A former trial attorney with approximately 150 jury cases to verdict,
                Fanya brings litigation rigor, executive advising, and AI-enabled
                workflow design to every engagement. She drafts and negotiates
                commercial agreements, builds playbooks and precedent libraries, and
                leads adoption of generative AI and legal technology—translating
                complex requirements into usable guidance and decision-ready
                recommendations.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 pt-10 border-t" style={{ borderColor: `${palette.ink}1A` }}>
              {[
                { n: "17", l: "Years of Practice" },
                { n: "~150", l: "Jury Trials" },
                { n: "J.D. · eMBA", l: "UC Law SF · Quantic" },
              ].map((s) => (
                <div key={s.l}>
                  <div style={serif} className="text-4xl md:text-5xl font-light" >{s.n}</div>
                  <div className="text-xs uppercase tracking-[0.2em] mt-2" style={{ color: palette.muted }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="py-28" style={{ background: palette.ink, color: palette.ivory }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: palette.brass }}>Expertise</div>
              <h2 style={serif} className="text-4xl md:text-5xl font-light leading-tight">
                Navigating today's <em>complex</em> legal landscape.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
              <p className="text-base leading-loose" style={{ color: `${palette.ivory}CC` }}>
                Three integrated practice areas, each designed for organizations operating
                at the frontier of technology, governance, and growth.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px" style={{ background: `${palette.ivory}1A` }}>
            {[
              {
                n: "01",
                t: "General Counsel & Commercial Contracts",
                d: "Currently General Counsel at VRP Labs. Drafts and negotiates licenses, MSAs, SOWs, NDAs, vendor and service agreements, and operational policies for complex multi-tenant and technology-driven environments.",
              },
              {
                n: "02",
                t: "Innovation, AI & Legal Operations",
                d: "Designs scalable legal-service workflows, precedent libraries, playbooks, and intake processes. Leads adoption of generative AI and legal technology with measurable improvements in cycle time, consistency, and defensibility.",
              },
              {
                n: "03",
                t: "Litigation & Risk Advisory",
                d: "Former trial attorney with ~150 jury cases to verdict. Brings litigation rigor to dispute readiness, risk assessment, governance frameworks, and executive-level decision support.",
              },
            ].map((e) => (
              <div key={e.n} className="p-10 lg:p-12" style={{ background: palette.ink }}>
                <div style={serif} className="text-5xl font-light mb-8" >{e.n}</div>
                <h3 style={serif} className="text-2xl mb-5">{e.t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: `${palette.ivory}AA` }}>{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TIMELINE */}
      <section id="leadership" className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: palette.brass }}>Leadership</div>
            <h2 style={serif} className="text-4xl md:text-5xl font-light leading-tight mb-14">
              Milestones in <em style={{ color: palette.navy }}>leadership</em>, governance, and innovation.
            </h2>

            <div className="space-y-10">
              {[
                { y: "2026 – Present", t: "General Counsel · VRP Labs", d: "Advise executive leadership on legal, operational, and business-risk issues for a shared life-science lab platform serving multiple tenant companies in Mountain View, CA." },
                { y: "2026 – Present", t: "Board Member · Embarcadero Rowing Club", d: "Support fiduciary oversight, governance, and stakeholder communication for a member-serving nonprofit organization in San Francisco." },
                { y: "2025 – Present", t: "Board Director · Hot House", d: "Provide governance oversight on strategy, KPIs, multi-year planning, and organizational risk posture for a San Francisco nonprofit arts organization." },
                { y: "2019 – Present", t: "Founder & General Counsel", d: "Principal legal and operational advisor for founder-led technology products including Make Me Up.App, 4Us-App, and BulkSmartFoods—aligning product, privacy, licensing, and governance." },
                { y: "2011 – 2017", t: "City Director · Women Who Code SF", d: "Secured $1.2M in sponsorships, negotiated partnership terms, and led chapter strategy and operations across multi-city programming." },
                { y: "2007 – 2014", t: "Litigation Attorney · State of California", d: "Tried approximately 150 jury cases to verdict across criminal and civil dockets—developing the written advocacy, judgment under pressure, and stakeholder diplomacy that anchor today's practice." },
              ].map((m, i) => (
                <div key={i} className="grid grid-cols-12 gap-6 pb-10 border-b" style={{ borderColor: `${palette.ink}15` }}>
                  <div className="col-span-12 md:col-span-4">
                    <div className="text-xs uppercase tracking-[0.25em]" style={{ color: palette.brass }}>{m.y}</div>
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <h3 style={serif} className="text-2xl mb-3">{m.t}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: palette.muted }}>{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-12">
            <img src={desk} alt="Executive workspace overlooking the city" className="w-full object-cover aspect-[4/5]" />
            <p className="mt-6 text-xs uppercase tracking-[0.2em]" style={{ color: palette.muted }}>
              Counsel grounded in perspective.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28" style={{ background: palette.stone }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <div className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: palette.brass }}>Engage</div>
          <h2 style={serif} className="text-4xl md:text-6xl font-light leading-tight mb-10">
            For confidential inquiries, <br />
            <em style={{ color: palette.navy }}>board appointments</em>, and advisory engagements.
          </h2>
          <a href="mailto:e.fanya.young@gmail.com"
             style={serif}
             className="inline-block text-2xl md:text-3xl border-b pb-2 transition-colors hover:opacity-70"
             >
            e.fanya.young@gmail.com
          </a>
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-xs uppercase tracking-[0.2em]" style={{ color: palette.muted }}>
            <div>
              <div className="mb-2" style={{ color: palette.ink }}>Practice</div>
              Innovation Attorney
            </div>
            <div>
              <div className="mb-2" style={{ color: palette.ink }}>Connect</div>
              <a href="https://www.linkedin.com/in/fanyayoung/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div>
              <div className="mb-2" style={{ color: palette.ink }}>Response</div>
              Within 48 hours
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t" style={{ borderColor: `${palette.ink}1A` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between gap-4 text-xs uppercase tracking-[0.2em]" style={{ color: palette.muted }}>
          <div style={serif} className="normal-case tracking-normal text-base">Fanya Young · Attorney at Law</div>
          <div>© {new Date().getFullYear()} All rights reserved</div>
        </div>
      </footer>
    </div>
  );
};

export default Attorney;
