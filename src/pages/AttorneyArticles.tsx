import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { articles } from "@/data/articles";

// Warm Editorial Premium — matches /attorney
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

const AttorneyArticles = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  const serif = { fontFamily: "'Cormorant Garamond', 'Times New Roman', serif" };
  const sans = { fontFamily: "'Inter', -apple-system, sans-serif" };
  const isAttorneyDomain = typeof window !== "undefined" && window.location.hostname === "attorney.fanyayoung.com";
  const homePath = isAttorneyDomain ? "/" : "/attorney";
  const articleBase = isAttorneyDomain ? "/articles" : "/attorney/articles";
  const canonical = "https://attorney.fanyayoung.com/articles";

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://attorney.fanyayoung.com/articles/${a.slug}`,
      name: a.title,
    })),
  };


  return (
    <div style={{ background: palette.ivory, color: palette.ink, ...sans }} className="min-h-screen">
      <Helmet>
        <title>Articles on AI Law, Governance & Legal Innovation — Fanya Young</title>
        <meta name="description" content="Essays by Fanya Young on AI governance, AI regulation, legal innovation, and the operational design choices shaping modern in-house and advisory practice." />
        <meta name="keywords" content="AI law, AI governance, AI attorney articles, legal innovation, legal operations, Fanya Young" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Articles on AI Law & Governance — Fanya Young" />
        <meta property="og:description" content="Essays on AI governance, regulation, and legal innovation." />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>
      {/* Top Bar */}
      <header className="border-b" style={{ borderColor: `${palette.ink}1A` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <Link to={homePath} style={serif} className="text-xl tracking-wide">
            Fanya <span style={{ color: palette.brass }}>Young</span>
          </Link>
          <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em]" style={{ color: palette.muted }}>
            <Link to={`${homePath}#about`}>About</Link>
            <Link to={`${homePath}#expertise`}>Expertise</Link>
            <Link to={`${homePath}#leadership`}>Leadership</Link>
            <Link to={isAttorneyDomain ? "/articles" : "/attorney/articles"} style={{ color: palette.ink }}>Articles</Link>
            <Link to={`${homePath}#contact`}>Contact</Link>
          </nav>
          <Link to={`${homePath}#contact`} className="hidden md:inline-block text-xs uppercase tracking-[0.2em] border px-5 py-2.5"
             style={{ borderColor: palette.navy, color: palette.navy }}>
            Engage
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-16">
        <div className="text-xs uppercase tracking-[0.3em] mb-8" style={{ color: palette.brass }}>
          Writing & Commentary
        </div>
        <h1 style={serif} className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight">
          Essays on <em style={{ color: palette.navy }}>AI</em>,<br />
          governance, and the<br />
          future of <em style={{ color: palette.navy }}>legal practice.</em>
        </h1>
        <p className="mt-10 text-lg leading-relaxed max-w-2xl" style={{ color: palette.muted }}>
          Selected writing on AI regulation, legal innovation, and the operational
          design choices shaping modern in-house and advisory practice.
        </p>
      </section>

      {/* ARTICLES */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 pb-32">
        <div className="border-t" style={{ borderColor: `${palette.ink}1A` }}>
          {articles.map((a) => (
            <Link
              key={a.slug}
              to={`${articleBase}/${a.slug}`}
              className="group grid lg:grid-cols-12 gap-8 py-14 border-b transition-colors hover:bg-stone-100/40"
              style={{ borderColor: `${palette.ink}1A` }}
            >
              <div className="lg:col-span-3">
                <div className="text-xs uppercase tracking-[0.25em] mb-2" style={{ color: palette.brass }}>
                  {a.topic}
                </div>
                <div className="text-xs uppercase tracking-[0.2em]" style={{ color: palette.muted }}>
                  {a.read}
                </div>
              </div>
              <div className="lg:col-span-9">
                <h2 style={serif} className="text-3xl md:text-4xl font-light leading-snug mb-5 transition-colors">
                  {a.title}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: palette.charcoal }}>
                  {a.excerpt}
                </p>
                <div className="text-xs uppercase tracking-[0.25em] inline-flex items-center gap-3"
                     style={{ color: palette.navy }}>
                  Read Article
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.linkedin.com/in/fanyayoung/recent-activity/articles/"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-4 text-xs uppercase tracking-[0.25em] text-white hover:opacity-90 transition-opacity"
            style={{ background: palette.navy }}
          >
            View All Articles on LinkedIn
          </a>
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

export default AttorneyArticles;
