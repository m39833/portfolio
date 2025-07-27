<script lang="ts" module>
  import { PROJECTS } from "$lib/config/projects";
  import { SQUARES } from "$lib/config/grid";

  function getProjectById(id: string) {
    return PROJECTS.find((project) => project.id === id);
  }
</script>

<script lang="ts">
  import type { Snippet } from "svelte";
  import { error } from "@sveltejs/kit";
  import GridPattern from "../grid-pattern.svelte";
  import { Badge } from "../ui/badge";
  import { getBaseUrl } from "$lib/utils";

  let {
    children,
    id
  }: {
    children: Snippet;
    id: string;
  } = $props();

  const project = getProjectById(id);
  if (!project) {
    throw error(404);
  }

  const metaTitle = `${project.name} • Matthew Ponciano`;
  const metaDescription = project.description;

  const baseUrl = getBaseUrl();
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
  <meta property="article:author" content="Matthew Ponciano" />
  {#each project.tags as tag}
    <meta property="article:tag" content={tag} />
  {/each}

  <meta property="og:title" content={metaTitle} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:url" content="{baseUrl}/projects/{id}" />
  {#if project.media.type === "image"}
    <meta property="og:image" content="{baseUrl}{project.media.src}" />
  {/if}
  <meta property="og:type" content="article" />

  <meta name="twitter:title" content={metaTitle} />
  <meta name="twitter:description" content={metaDescription} />
  <meta name="twitter:url" content={baseUrl} />
  {#if project.media.type === "image"}
    <meta property="twitter:image" content="{baseUrl}{project.media.src}" />
  {/if}
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-12 lg:px-6">
  <div class="fixed inset-0 -z-10 w-full overflow-clip" aria-hidden="true">
    <GridPattern
      squares={SQUARES}
      class="inset-0 scale-110 opacity-55
      [mask-image:radial-gradient(ellipse_70%_50%,white,transparent)]" />
  </div>

  <article
    class="prose max-w-none dark:prose-invert md:prose-lg prose-h1:mb-0 prose-h2:font-extrabold
    [&_pre]:bg-[#0d0d13]">
    <img
      src={project.media.src}
      alt={project.name}
      class="!mt-0 block max-h-[32rem] w-full rounded-xl object-cover"
      fetchpriority="high" />
    <div class="space-y-4">
      <h1 class="text-center">{project.name}</h1>
      <div class="mx-auto mb-4 flex max-w-xl flex-wrap justify-center gap-2">
        {#each project.tags as tag}
          <Badge class="text-base font-semibold" variant="secondary">
            {tag}
          </Badge>
        {/each}
      </div>
    </div>

    {@render children()}
  </article>

  <div class="pointer-events-none h-24" aria-hidden="true"></div>

  <div
    class="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex h-full max-h-14 origin-bottom"
    aria-hidden="true">
    <div
      class="fixed inset-x-0 bottom-0 h-20 w-full bg-background/90 to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]">
    </div>
  </div>
</div>
