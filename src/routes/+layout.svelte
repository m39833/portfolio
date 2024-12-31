<script lang="ts" module>
    const TITLE = "Matthew Ponciano | Software Engineer";
    const DESCRIPTION =
        "Experienced software engineer specializing in full-stack development, cloud architecture, and scalable solutions. Explore my portfolio showcasing innovative projects in React, Node.js, and Python, demonstrating expertise in modern web technologies and clean code practices.";
</script>

<script lang="ts">
    import "../app.css";

    import { dev } from "$app/environment";
    import { injectAnalytics } from "@vercel/analytics/sveltekit";
    import Navbar from "$lib/components/navbar.svelte";
    import { getBaseUrl } from "$lib/utils";
    import favicon from "$lib/assets/favicon.png";

    let { children } = $props();

    const baseUrl = getBaseUrl();

    injectAnalytics({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
        href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
        rel="stylesheet" />

    <title>{TITLE}</title>
    <meta name="description" content={DESCRIPTION} />

    <meta property="og:title" content={TITLE} />
    <meta property="og:site_name" content={TITLE} />
    <meta property="og:description" content={DESCRIPTION} />
    <meta property="og:url" content={baseUrl} />
    <meta property="og:image" content={favicon} />
    <meta property="og:image:width" content="519" />
    <meta property="og:image:height" content="519" />
    <meta property="og:type" content="website" />

    <meta name="twitter:title" content={TITLE} />
    <meta name="twitter:description" content={DESCRIPTION} />
    <meta name="twitter:url" content={baseUrl} />
    <meta name="twitter:image" content={favicon} />
    <meta name="twitter:image:width" content="519" />
    <meta name="twitter:image:height" content="519" />
    <!-- <meta name="twitter:card" content="" /> -->
    <!-- <meta name="twitter:site" content="" /> -->
    <!-- <meta name="twitter:creator" content="" /> -->
</svelte:head>

<Navbar />
{@render children()}
