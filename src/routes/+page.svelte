<script lang="ts" module>
  import favicon from "$lib/assets/favicon.png";
  import { getBaseUrl } from "$lib/utils";

  const TITLE = "Matthew Ponciano • Software Engineer";
  const DESCRIPTION =
    "Experienced software engineer specializing in full-stack development, cloud architecture, and scalable solutions. Explore my portfolio showcasing innovative projects in React, Node.js, and Python, demonstrating expertise in modern web technologies and clean code practices.";
  const baseUrl = getBaseUrl();
</script>

<script lang="ts">
  import AnimatedGradientPill from "$lib/components/animated-gradient-pill.svelte";
  import { ChevronRight } from "lucide-svelte";
  import BlurInText from "$lib/components/blur-in-text.svelte";
  import { Button } from "$lib/components/ui/button";
  import Terminal from "$lib/components/terminal.svelte";
  import ShineBorder from "$lib/components/shine-border.svelte";
  import Spotlight from "$lib/components/spotlight.svelte";
  import BlurScaleIn from "$lib/components/blur-scale-in.svelte";
  import GridPattern from "$lib/components/grid-pattern.svelte";
  import { Hover3D } from "$lib/components/hover-3d";
  import PageWidth from "$lib/components/page-width.svelte";
  import ProjectCard from "$lib/components/project-card.svelte";
  import { PROJECTS } from "$lib/config/projects";
  import { SQUARES } from "$lib/config/grid";
</script>

<svelte:head>
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

<section
  class="mx-auto mt-0 flex w-full max-w-[102rem] flex-col gap-6 p-2 sm:p-4 lg:mt-24 lg:flex-row lg:gap-12 lg:px-8 xl:gap-16 xl:px-24 2xl:px-32">
  <div class="absolute inset-0 -z-10 w-full overflow-clip" aria-hidden="true">
    <GridPattern
      squares={SQUARES}
      class="inset-0 skew-y-6 scale-110 opacity-80 [mask-image:radial-gradient(ellipse_70%_50%,white,transparent)]" />
    <Spotlight class="-top-24 left-0 md:-top-12 " fill="white" />
  </div>
  <div class="z-10 lg:mt-8 xl:mt-12">
    <div class="flex justify-center sm:justify-normal">
      <AnimatedGradientPill class="z-10 mb-4 md:mb-6">
        <span class="relative mr-2 flex h-3 w-3">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
          ></span>
          <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </span>
        <span
          class="mr-1 inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
          Available for Projects
        </span>
        <ChevronRight class="h-4 w-4" />
      </AnimatedGradientPill>
    </div>

    <div class="relative mb-4 flex flex-col items-center space-y-0.5 sm:items-start md:mb-6">
      <h2 class="text-xl font-medium tracking-normal">Hey there 👋, I&apos;m</h2>
      <BlurInText
        tag="h1"
        text="Matthew Ponciano"
        class="text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl 2xl:text-7xl" />
      <h2 class="text-xl font-medium tracking-wide sm:text-2xl">and I like building things 🚀</h2>
    </div>

    <div class="mb-6 md:mb-10">
      <p
        class="w-full text-balance text-center text-sm text-muted-foreground sm:max-w-xl sm:text-wrap sm:text-left sm:text-base lg:text-lg">
        I'm a passionate <strong>software engineer</strong> with 4 years of experience crafting elegant,
        efficient, and user-friendly web applications. My journey thus far includes the creation of intuitive
        frontend experiences and robust backend systems.
      </p>
    </div>

    <div class="flex justify-center gap-4 max-md:mb-6 sm:justify-start">
      <Button size="xl" variant="outline">Projects</Button>
      <!-- <Button size="xl" variant="outline">Resume</Button> -->
      <Button size="xl" variant="rainbow">Contact</Button>
    </div>
  </div>

  <div class="relative flex-1">
    <BlurScaleIn duration={0.75} class="h-full">
      {#snippet children(animCompleted)}
        <Hover3D
          id="hero-terminal"
          initRotateX={12.5}
          initRotateY={-9}
          class="size-full max-w-4xl max-lg:!rotate-0 lg:ml-auto lg:max-w-xl">
          <div
            class="absolute inset-0 isolate size-full scale-95 transform bg-gradient-to-r from-[#ffaa40] via-[#ce75aa] to-[#9c40ff] opacity-55 blur-2xl"
            style="background-size: 200% 200%;"
            aria-hidden="true">
          </div>
          <ShineBorder class="w-full " color={["#ffaa40", "#ce75aa", "#9c40ff"]}>
            <Terminal
              paused={!animCompleted}
              commands={[
                {
                  command: "skills ls --languages",
                  result: "Typescript Javascript Python Rust"
                },
                {
                  command: "skills ls --frameworks --libraries",
                  result: "React Next.js Svelte SvelteKit Node.js TailwindCSS"
                },
                {
                  command: "skills ls --databases",
                  result: "PostgreSQL MySQL SQLite"
                },
                {
                  command: "skills ls --tools",
                  result: "Git Docker Figma VSCode Linux"
                }
              ]}
              class="min-h-[32rem] w-full bg-opacity-90 ring-2 backdrop-blur-xl backdrop-filter dark:ring-zinc-100/10 sm:h-[32rem] lg:max-xl:h-[28rem]" />
          </ShineBorder>
        </Hover3D>
      {/snippet}
    </BlurScaleIn>
  </div>
</section>

<div class="pointer-events-none h-24" aria-hidden="true"></div>

<PageWidth class="flex flex-col items-center px-4">
  <div class="mb-6 flex flex-col items-center space-y-2">
    <AnimatedGradientPill class="px-6">
      <span
        class="mr-1 inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
        Projects
      </span>
    </AnimatedGradientPill>
    <h2 class="mb-2 text-center text-4xl font-bold">Check out my latest work</h2>
  </div>
  <div class="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-5">
    <ProjectCard project={PROJECTS[0]} span="lg" priority />
    <ProjectCard project={PROJECTS[1]} span="sm" priority />
  </div>
</PageWidth>

<div class="pointer-events-none h-24" aria-hidden="true"></div>

<PageWidth>
  <div class="my-6 flex justify-center">
    <h2 class="font-mono tracking-wide text-muted-foreground">🚧 Work in Progress 🚧</h2>
  </div>
</PageWidth>

<div class="pointer-events-none h-24" aria-hidden="true"></div>

<div
  class="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex h-full max-h-14 origin-bottom"
  aria-hidden="true">
  <div
    class="fixed inset-x-0 bottom-0 h-20 w-full bg-background/90 to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]">
  </div>
</div>
