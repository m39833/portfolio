import { escapeSvelte, mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { createHighlighter } from "shiki";

const theme = "tokyo-night";
const highlighter = await createHighlighter({
    themes: [theme],
    langs: ["javascript", "typescript"]
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: [
        vitePreprocess(),
        mdsvex({
            layout: {
                projects: "./src/lib/components/projects/layout.svelte"
            },
            highlight: {
                highlighter: async (code, lang = "text") => {
                    const html = escapeSvelte(
                        highlighter.codeToHtml(code, {
                            lang,
                            theme,
                            colorReplacements: {
                                "#1a1b26": "#101017" // darker bg
                            }
                        })
                    );
                    return `{@html \`${html}\` }`;
                }
            }
        })
    ],

    kit: {
        // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://svelte.dev/docs/kit/adapters for more information about adapters.
        adapter: adapter({
            runtime: "nodejs20.x"
        })
    },

    extensions: [".svelte", ".svx"]
};

export default config;
