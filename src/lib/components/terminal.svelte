<script lang="ts" module>
    type Command = {
        name: string;
        output: string | Snippet;
    };

    const PROMPT = "~ m \n❯ ";
    //									output: "React Next.js Svelte SvelteKit Node.js TailwindCSS"

    const DEVICONS: (string | { name: string; path: string })[] = [
        "typescript",
        "javascript",
        "python",
        "rust",
        "react",
        { name: "next.js", path: "nextjs.svg" },
        "svelte",
        { name: "sveltekit", path: "svelte.svg" },
        { name: "node.js", path: "nodejs.svg" },
        "tailwindcss",
        "postgresql",
        "mysql",
        "sqlite",
        "git",
        "docker",
        "figma",
        "vscode",
        "neovim"
    ];
</script>

<script lang="ts">
    import { tick, type Snippet } from "svelte";

    let {
        commands,
        paused = false,
        class: className = ""
    }: { commands: Command[]; paused?: boolean; isHovered?: boolean; class?: string } = $props();

    let content = $state(PROMPT);
    let running = false;

    let container: HTMLDivElement;

    async function typeText(text: string) {
        for (let i = 0; i < text.length; i++) {
            content += text.charAt(i);

            await new Promise((res) => setTimeout(res, 20));
        }
    }

    async function executeCommand(command: Command) {
        await typeText(command.name);
        content += "\n";
        content += command.output;
        content += "\n\n" + PROMPT;

        await tick();
        container.scroll({ top: container.scrollHeight, behavior: "smooth" });
    }

    $effect(() => {
        if (paused || running) return;
        running = true;

        (async () => {
            for (const command of commands) {
                await executeCommand(command);
                await new Promise((res) => setTimeout(res, 175));
            }

            running = false;
        })();
    });
</script>

<div
    bind:this={container}
    class={["overflow-y-auto rounded-lg bg-terminal p-4 font-mono", className]}>
    <!-- <div class="sticky top-0 mb-4 flex items-center bg-inherit pt-4"> -->
    <!-- 	<div class="flex space-x-2"> -->
    <!-- 		<div class="h-3 w-3 rounded-full bg-red-500"></div> -->
    <!-- 		<div class="h-3 w-3 rounded-full bg-yellow-500"></div> -->
    <!-- 		<div class="h-3 w-3 rounded-full bg-green-500"></div> -->
    <!-- 	</div> -->
    <!-- </div> -->
    <div class="space-y-1">
        <code class="whitespace-pre-wrap">
            {#each content.split(/(\bskills\b|\bls\b|\bm\b|❯|~|\s)/) as part}
                {#if part === "skills" || part === "ls"}
                    <span class="text-lime-400">{part}</span>
                {:else if part === "m"}
                    <span class="text-muted-foreground">{part}</span>
                {:else if part === "❯"}
                    <span class="text-purple-300">{part}</span>
                {:else if part === "~" || /--\w+/.test(part)}
                    <span class="text-blue-300">{part}</span>
                {:else if part === "\n"}
                    <br />
                {:else}
                    {@const maybeImage = DEVICONS.find((v) => {
                        return typeof v === "string"
                            ? v === part.toLowerCase()
                            : v.name === part.toLowerCase();
                    })}
                    {@const path = maybeImage
                        ? `/devicons/${typeof maybeImage === "string" ? `${maybeImage}.svg` : maybeImage.path}`
                        : null}

                    {#if path}
                        <span class="whitespace-nowrap">
                            <img
                                src={path}
                                class="mr-1.5 inline-block size-4 select-none"
                                alt="{part} icon"
                                fetchpriority="high" /><span>{part}</span></span>
                    {:else}
                        <span class="text-foreground">{part}</span>
                    {/if}
                {/if}
            {/each}<span class="select-none">█</span>
        </code>
    </div>
</div>
