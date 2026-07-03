import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  jsonLd?: object | object[];
}

const SITE_URL = "https://www.av-sculpturedorure.fr";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const SEO = ({ title, description, path, image, type = "website", jsonLd }: SEOProps) => {
  // Trailing slash: GitHub Pages serves prerendered routes at /path/ and
  // 301-redirects /path → /path/. Keep canonical & og:url on the final URL.
  const canonicalPath = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  const url = `${SITE_URL}${canonicalPath}`;
  const img = image || DEFAULT_IMAGE;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="AVsculpturedorure" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
