<script lang="ts" module>
    type GridPatternProps = {
        width?: number;
        height?: number;
        x?: number;
        y?: number;
        squares?: Array<[x: number, y: number]>;
        strokeDasharray?: string;
        class?: string;
        [key: string]: unknown;
    };
</script>

<script lang="ts">
    let {
        width = 40,
        height = 40,
        x = -1,
        y = -1,
        strokeDasharray = "0",
        squares,
        class: className = "",
        ...props
    }: GridPatternProps = $props();

    const id = crypto.randomUUID().toString().slice(0, 8);
</script>

<svg
    aria-hidden="true"
    class={[
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
    ]}
    {...props}>
    <defs>
        <pattern {id} {width} {height} patternUnits="userSpaceOnUse" {x} {y}>
            <path d={`M.5 ${height}V.5H${width}`} fill="none" stroke-dasharray={strokeDasharray} />
        </pattern>
    </defs>
    <rect width="100%" height="100%" stroke-width={0} fill={`url(#${id})`} />
    {#if squares}
        <svg {x} {y} class="overflow-visible">
            {#each squares as [x, y]}
                <rect
                    stroke-width="0"
                    width={width - 1}
                    height={height - 1}
                    x={x * width + 1}
                    y={y * height + 1} />
            {/each}
        </svg>
    {/if}
</svg>
