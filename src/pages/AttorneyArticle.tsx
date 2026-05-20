import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { getArticleBySlug } from "@/data/articles";

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

const AttorneyArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  if (!article) return <Navigate to="/articles" replace />;

  const serif = { fontFamily: "'Cormorant Garamond', 'Times New Roman', serif" };
  const sans = { fontFamily: "'Inter', -apple-system, sans-serif" };

  const isAttorneyDomain =
    typeof window !== "undefined" &&
    window.location.hostname === "attorney.fanyayoung.com";
  const homePath = isAttorneyDomain ? "/" : "/attorney";
  const articlesPath = isAttorneyDomain ? "/articles" : "/attorney/articles";
  const canonical = `${ATTORNEY_ORIGIN}/articles/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: "Fanya Young",
      url: ATTORNEY_ORIGIN,
      jobTitle: "Innovation Attorney & General Counsel",
    },
    datePublished: article.published,
    dateModified: article.published,
    mainEntityOfPage: canonical,
    keywords: article.keywords.join(", "),
    publisher: {
      "@type": "Person",
      name: "Fanya Young",
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: ATTORNEY_ORIGIN },
      { "@type": "ListItem", position: 2, name: "Articles", item: `${ATTORNEY_ORIGIN}/articles` },
      { "@type": "ListItem", position: 3, name: article.title, item: canonical },
    ],
  };

  return (
    <div
      style={{ background: palette.ivory, color: palette.ink, ...sans }}
      className="min-h-screen"
    >
      <Helmet>
        <title>{`${article.title} — Fanya Young`}</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={article.keywords.join(", ")} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:url" content={canonical} />
        <meta property="article:author" content="Fanya Young" />
        <meta property="article:published_time" content={article.published} />
        <meta property="article:section" content={article.topic} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
      </Helmet>

      {/* Header */}
      <header className="border-b" style={{ borderColor: `${palette.ink}1A` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <Link to={homePath} style={serif} className="text-xl tracking-wide">
            Fanya <span style={{ color: palette.brass }}>Young</span>
          </Link>
          <nav
            className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em]"
            style={{ color: palette.muted }}
          >
            <Link to={`${homePath}#about`}>About</Link>
            <Link to={`${homePath}#expertise`}>Expertise</Link>
            <Link to={`${homePath}#leadership`}>Leadership</Link>
            <Link to={articlesPath} style={{ color: palette.ink }}>
              Articles
            </Link>
            <Link to={`${homePath}#contact`}>Contact</Link>
          </nav>
          <Link
            to={`${homePath}#contact`}
            className="hidden md:inline-block text-xs uppercase tracking-[0.2em] border px-5 py-2.5"
            style={{ borderColor: palette.navy, color: palette.navy }}
          >
            Engage
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 lg:px-12 pt-20 lg:pt-28 pb-24">
        <nav
          className="text-xs uppercase tracking-[0.25em] mb-10 flex gap-3"
          style={{ color: palette.muted }}
        >
          <Link to={articlesPath} className="hover:opacity-70">
            ← All Articles
          </Link>
        </nav>

        <div
          className="text-xs uppercase tracking-[0.3em] mb-6"
          style={{ color: palette.brass }}
        >
          {article.topic} · {article.read}
        </div>

        <h1
          style={serif}
          className="text-4xl md:text-6xl font-light leading-[1.1] tracking-tight mb-10"
        >
          {article.title}
        </h1>

        <div
          className="text-sm uppercase tracking-[0.2em] mb-14 pb-8 border-b"
          style={{ color: palette.muted, borderColor: `${palette.ink}1A` }}
        >
          By Fanya Young ·{" "}
          {new Date(article.published).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        <div className="space-y-8 text-lg leading-loose" style={{ color: palette.charcoal }}>
          {article.body.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2
                  style={serif}
                  className="text-3xl md:text-4xl font-light mt-12 mb-6"
                >
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="mb-6">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div
          className="mt-20 pt-10 border-t flex flex-col gap-6"
          style={{ borderColor: `${palette.ink}1A` }}
        >
          <p
            className="text-xs uppercase tracking-[0.25em]"
            style={{ color: palette.muted }}
          >
            Originally published on LinkedIn
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={article.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-white"
              style={{ background: palette.navy }}
            >
              View on LinkedIn
            </a>
            <Link
              to={`${homePath}#contact`}
              className="inline-block px-7 py-3.5 text-xs uppercase tracking-[0.25em] border"
              style={{ borderColor: palette.ink, color: palette.ink }}
            >
              Engage Fanya
            </Link>
          </div>
        </div>
      </article>

      <footer
        className="py-10 border-t"
        style={{ borderColor: `${palette.ink}1A` }}
      >
        <div
          className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between gap-4 text-xs uppercase tracking-[0.2em]"
          style={{ color: palette.muted }}
        >
          <div style={serif} className="normal-case tracking-normal text-base">
            Fanya Young · Attorney at Law
          </div>
          <div>© {new Date().getFullYear()} All rights reserved</div>
        </div>
      </footer>
    </div>
  );
};

export default AttorneyArticle;
