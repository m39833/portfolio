<script lang="ts" module>
    type TColorProp = string | string[];
</script>

<script lang="ts">
    import { cn } from "$lib/utils";
    import type { Snippet } from "svelte";

    let {
        borderRadius = 8,
        borderWidth = 2,
        duration = 16,
        color = "#4ff9ff",
        class: className = "",
        children
    }: {
        borderRadius?: number;
        borderWidth?: number;
        duration?: number;
        color?: TColorProp;
        class?: string;
        children: Snippet;
    } = $props();
</script>

<div
    style="
      --border-radius: {borderRadius}pt;
    "
    class={cn(
        "relative grid min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[var(--border-radius)] p-0.5",
        className
    )}>
    <div
        style="
        --border-width: {borderWidth}pt;
        --border-radius: {borderRadius}px;
        --shine-pulse-duration: {duration}s;
        --mask-linear-gradient: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        --background-radial-gradient: radial-gradient(
					transparent,
					transparent,
					{Array.isArray(color) ? color.join(',') : color}, transparent, transparent
				);
      "
        class="before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[var(--border-radius)] before:p-[var(--border-width)] before:opacity-80 before:will-change-[background-position] before:content-[''] before:![-webkit-mask-composite:xor] before:[background-image:var(--background-radial-gradient)] before:[background-size:300%_300%] before:![mask-composite:exclude] before:[mask:var(--mask-linear-gradient)] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]">
    </div>
    {@render children()}
</div>
