import { getBaseUrl } from "$lib/utils";

const baseUrl = getBaseUrl();

const file = `
User-Agent: *
Disallow:

Sitemap: ${baseUrl}/sitemap.xml
`.trim();

export async function GET() {
    return new Response(file, {
        headers: {
            "Content-Type": "text/plain"
        }
    });
}
