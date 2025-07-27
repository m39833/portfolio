<script lang="ts">
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  let {
    initRotateX = 0,
    initRotateY = 0,
    class: className = "",
    containerClass: containerClassName = "",
    children,
    ...props
  }: {
    initRotateX?: number;
    initRotateY?: number;
    containerClass?: string;
    children: Snippet<[boolean]>;
  } & HTMLAttributes<HTMLDivElement> = $props();

  let isMouseEntered = $state(false);
  let rotateX = $state(initRotateX);
  let rotateY = $state(initRotateY);

  let container: HTMLDivElement;

  function handleMouseMove(e: MouseEvent) {
    if (!container) return;
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    rotateX = y + initRotateX;
    rotateY = x + initRotateY;
  }

  function handleMouseEnter() {
    isMouseEntered = true;
  }

  function handleMouseLeave() {
    isMouseEntered = false;
    rotateX = initRotateX;
    rotateY = initRotateY;
  }
</script>

<div
  class={cn("flex items-center justify-center", containerClassName)}
  style="perspective: 1000px;">
  <div
    bind:this={container}
    onmouseenter={handleMouseEnter}
    onmousemove={handleMouseMove}
    onmouseleave={handleMouseLeave}
    class={cn(
      "relative flex transform-gpu items-center justify-center transition-all duration-200 ease-linear [will-change:transform]",
      className
    )}
    style:transform="rotateY({rotateY}deg) rotateX({rotateX}deg)"
    role="presentation"
    id="hero-terminal"
    {...props}>
    <div
      class={cn(
        "h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}>
      {@render children(isMouseEntered)}
    </div>
  </div>
</div>
