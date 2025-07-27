<script lang="ts">
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { buttonVariants } from "$lib/components/ui/button";
  import { Github, Globe, Info, Video } from "lucide-svelte";
  import type { Project, ProjectLinkType } from "$lib/config/projects";

  let {
    project,
    span,
    priority = false
  }: {
    project: Project;
    span: "sm" | "lg";
    priority?: boolean;
  } = $props();

  const { id, name, description, hasInfoPage, media, links, tags = [] } = project;
</script>

<Card
  class={[
    "group flex scale-100 flex-col overflow-clip transition-all hover:scale-[1.025] hover:shadow-lg hover:shadow-gray-400/15",
    span === "sm" ? "col-span-2" : "col-span-3"
  ]}>
  <CardHeader class="h-48 overflow-hidden bg-stone-600 p-0">
    {#if media && media.type === "image"}
      <img
        src={media.src}
        alt={name}
        class="scale-[1.025] object-cover transition-transform
        group-hover:scale-100"
        fetchpriority={priority ? "high" : "auto"} />
    {:else if media && media.type === "video"}
      <video autoplay controls loop muted class="w-full object-cover">
        <source src={media.src} type="video/mp4" />
      </video>
    {/if}
  </CardHeader>
  <CardContent class="flex-1">
    <CardTitle class="mb-1">{name}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardContent>
  <CardFooter>
    <div class="space-y-4">
      <div class="flex flex-wrap gap-2">
        {#each tags as tag}
          <Badge variant="secondary">{tag}</Badge>
        {/each}
      </div>
      <div class="flex flex-wrap gap-2">
        {#each Object.entries(links) as entry}
          {@const [type, href] = entry as [ProjectLinkType, string]}

          {#if type === "website"}
            <a {href} class={buttonVariants({ size: "sm" })}>
              <Globe />
              Website
            </a>
          {/if}
          {#if type === "demo"}
            <a {href} class={buttonVariants({ size: "sm" })}>
              <Video />
              Demo
            </a>
          {/if}
          {#if type === "source"}
            <a {href} class={buttonVariants({ size: "sm" })}>
              <Github />
              Source
            </a>
          {/if}
        {/each}
        {#if hasInfoPage}
          <a href="/projects/{id}" class={buttonVariants({ size: "sm" })}>
            <Info />
            More Info
          </a>
        {/if}
      </div>
    </div>
  </CardFooter>
</Card>
