import { useEffect } from "react";
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

const Attorney = () => {
  useEffect(() => {
    document.title = "Fanya Young — Innovation Attorney & Board Director";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Fanya Young — Innovation Attorney, In-House Counsel, and Risk & Governance Advisor. Modern legal counsel for forward-thinking organizations.");
    // Load editorial fonts
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
              Innovation Attorney · Board Director
            </div>
            <h1 style={serif} className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-light tracking-tight">
              Modern counsel<br />
              for an era of<br />
              <em style={{ color: palette.navy }}>accelerated change.</em>
            </h1>
            <p className="mt-10 text-lg leading-relaxed max-w-xl" style={{ color: palette.muted }}>
              Fanya Young advises executives and boards at the intersection of law,
              technology, and governance—pairing trial-tested judgment with
              fluency in emerging AI and operational design.
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
          <span>In-House Counsel</span><span>·</span>
          <span>Board Advisory</span><span>·</span>
          <span>Risk Management</span><span>·</span>
          <span>Legal Operations</span><span>·</span>
          <span>Innovation Strategy</span>
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
                Fanya Young is an Innovation Attorney and Legal Technologist whose work bridges
                the long-standing traditions of legal practice with the demands of a digital,
                AI-accelerated economy. She holds a J.D. and an eMBA, and spent her early career
                in litigation—an experience that informs the precision and persuasive clarity she
                brings to every engagement.
              </p>
              <p>
                Today, her counsel reaches beyond the courtroom. She advises executives on AI
                adoption and governance, designs operational frameworks for in-house teams, and
                serves on boards where her unique combination of legal acumen and technological
                fluency creates lasting strategic value.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 pt-10 border-t" style={{ borderColor: `${palette.ink}1A` }}>
              {[
                { n: "J.D.", l: "Juris Doctor" },
                { n: "eMBA", l: "Quantic" },
                { n: "4+", l: "Years Litigation" },
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
                t: "Innovation Attorney",
                d: "Empowering clients to embrace emerging technologies while ensuring legal compliance. Proactive counsel on AI adoption, governance frameworks, and risk mitigation for forward-thinking organizations.",
              },
              {
                n: "02",
                t: "In-House Counsel Solutions",
                d: "Redefining the in-house function as a strategic partner—streamlining processes, enhancing legal operations, and embedding legal insight into business and product decisions.",
              },
              {
                n: "03",
                t: "Risk & Governance Advisory",
                d: "Comprehensive risk management and governance frameworks that elevate accountability and ethical standards, rooted in deep legal principle and a culture of transparency.",
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
              Milestones in <em style={{ color: palette.navy }}>board service</em> and innovation.
            </h2>

            <div className="space-y-10">
              {[
                { y: "First Appointment", t: "Nonprofit Board Director", d: "Joined the board of a mission-driven nonprofit, driving change through governance reform and stakeholder alignment." },
                { y: "Strategic Initiative", t: "Governance Framework", d: "Led the development of a governance framework enhancing oversight, accountability, and ethical standards across operations." },
                { y: "Innovative Project", t: "AI for Legal Operations", d: "Implemented generative AI tools that improved legal operations efficiency and unlocked new analytical capabilities." },
                { y: "Board Chair", t: "Sustainable Growth", d: "Elected Chair, focusing the board's agenda on sustainable growth, operational excellence, and long-term impact." },
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
