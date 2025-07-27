<script lang="ts">
  import "../app.css";

  import { dev } from "$app/environment";
  import { inject as injectAnalytics } from "@vercel/analytics";
  import Navbar from "$lib/components/navbar.svelte";

  let { children } = $props();

  injectAnalytics({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
    rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
    rel="stylesheet" />
</svelte:head>

<Navbar />
{@render children()}
