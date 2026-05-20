import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string; // < 60 chars
  description: string; // 50–160 chars
  path: string; // e.g. "/projects/lg" — used for canonical + og:url
  type?: "website" | "article" | "profile";
  image?: string; // absolute URL
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const PRIMARY_ORIGIN = "https://fanyayoung-porfolio.lovable.app";
const DEFAULT_OG_IMAGE = `${PRIMARY_ORIGIN}/landing-page-preview.png`;

export const SEO = ({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_OG_IMAGE,
  jsonLd,
}: SEOProps) => {
  const url = `${PRIMARY_ORIGIN}${path}`;
  const jsonLdArr = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLdArr.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};
