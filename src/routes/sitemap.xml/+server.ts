import { getBaseUrl } from "$lib/utils";

type SitemapFile = {
	url: string;
	lastModified?: string | Date;
	changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
	priority?: number;
	// alternates?: {
	// 	languages?: Languages<string>;
	// };
};

const baseUrl = getBaseUrl();

const pages: SitemapFile[] = [
	{ url: baseUrl, priority: 1, changeFrequency: "weekly" }
	// { url: baseUrl, priority: 1, changeFrequency: "weekly" }
];

const sitemap = `
<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages.map((page) => {
		return `
  <url>
    <loc>${page.url}</loc>
    ${page.lastModified ? `<lastmod>${page.lastModified}</lastmod>` : ""}
    ${page.changeFrequency ? `<changefreq>${page.changeFrequency}</changefreq>` : ""}
    ${page.priority ? `<priority>${page.priority}</priority>` : ""}
  </url>
`.replace(/\n\s*\n/gm, "");
  })}
</urlset>
`.trim();

export async function GET() {
	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml"
		}
	});
}
