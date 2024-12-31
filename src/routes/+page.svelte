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

    // function getRandomNumber(min: number, max: number) {
    // 	return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    //
    // const squares: [number, number][] = Array.from({ length: 25 }).map(() => [
    // 	getRandomNumber(0, 35),
    // 	getRandomNumber(0, 35)
    // ]);

    const squares: [number, number][] = [
        [7, 6],
        [34, 3],
        [16, 32],
        [27, 7],
        [15, 7],
        [18, 15],
        [15, 2],
        [9, 28],
        [14, 25],
        [33, 31],
        [11, 1],
        [1, 10],
        [13, 34],
        [27, 28],
        [24, 14],
        [21, 20],
        [30, 22],
        [8, 35],
        [21, 32],
        [6, 29],
        [21, 12],
        [30, 35],
        [28, 22],
        [2, 8],
        [28, 20]
    ];
</script>

<section
    class="mx-auto mt-0 flex w-full max-w-[102rem] flex-col gap-6 p-2 sm:p-4 lg:mt-32 lg:flex-row lg:gap-12 lg:px-8 xl:gap-16 xl:px-24 2xl:px-32">
    <div class="absolute inset-0 w-full overflow-clip" aria-hidden="true">
        <GridPattern
            {squares}
            class="inset-0 skew-y-6 scale-110 [mask-image:radial-gradient(ellipse_70%_50%,white,transparent)]" />
        <Spotlight class="-top-24 left-0 md:-top-12 " fill="white" />
    </div>
    <div class="z-10 lg:mt-8 xl:mt-12">
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

        <div class="relative mb-4 space-y-0.5 md:mb-6">
            <h2 class="text-xl font-medium tracking-normal">Hey there 👋, I&apos;m</h2>
            <BlurInText
                tag="h1"
                text="Matthew Ponciano"
                class="text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl 2xl:text-7xl" />
            <h2 class="text-xl font-medium tracking-wide sm:text-2xl">
                and I like building things 🚀
            </h2>
        </div>

        <div class="mb-6 md:mb-10">
            <p
                class="w-full max-w-md text-balance text-sm text-muted-foreground sm:max-w-xl sm:text-wrap sm:text-base lg:text-lg">
                I'm a passionate <strong>software engineer</strong> with 4 years of experience crafting
                elegant, efficient, and user-friendly web applications. My journey thus far includes
                the creation of intuitive frontend experiences and robust backend systems.
            </p>
        </div>

        <div class="flex gap-4 max-md:mb-6">
            <Button size="xl" variant="outline">Projects</Button>
            <!-- <Button size="xl" variant="outline">Resume</Button> -->
            <Button size="xl" variant="rainbow">Contact</Button>
        </div>
    </div>

    <div class="relative flex-1">
        <BlurScaleIn duration={1} class="h-full">
            {#snippet children(animCompleted)}
                <Hover3D
                    id="hero-terminal"
                    initRotateX={12.5}
                    initRotateY={-9}
                    class="size-full max-w-3xl max-lg:!rotate-0 lg:ml-auto lg:max-w-xl">
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
                                    name: "skills ls --languages",
                                    output: "Typescript Javascript Python Rust"
                                },
                                {
                                    name: "skills ls --frameworks",
                                    output: "React Next.js Svelte SvelteKit Node.js TailwindCSS"
                                },
                                {
                                    name: "skills ls --databases",
                                    output: "PostgreSQL MySQL SQLite"
                                },
                                {
                                    name: "skills ls --tools",
                                    output: "Git Docker Figma VSCode NeoVim"
                                }
                            ]}
                            class="min-h-[32rem] w-full bg-opacity-85 ring-2 backdrop-blur-xl backdrop-filter dark:ring-zinc-100/10 sm:h-[32rem] lg:max-xl:h-[28rem]" />
                    </ShineBorder>
                </Hover3D>
            {/snippet}
        </BlurScaleIn>
    </div>
</section>

<!-- <PageWidth>{null}</PageWidth> -->
