<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	let {
		isMouseEntered = false,
		translateX = 0,
		translateY = 0,
		translateZ = 0,
		rotateX = 0,
		rotateY = 0,
		rotateZ = 0,
		className,
		children
	}: {
		isMouseEntered?: boolean;
		translateX?: number | string;
		translateY?: number | string;
		translateZ?: number | string;
		rotateX?: number | string;
		rotateY?: number | string;
		rotateZ?: number | string;
		className?: string;
		children: Snippet;
	} = $props();

	let ref: HTMLDivElement;

	$effect(() => {
		if (isMouseEntered) {
			handleAnimations();
		}
	});

	const handleAnimations = () => {
		if (!ref) return;
		if (isMouseEntered) {
			ref.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
		} else {
			ref.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
		}
	};
</script>

<div bind:this={ref} class={cn("w-fit transition duration-200 ease-linear", className)}>
	{@render children()}
</div>
