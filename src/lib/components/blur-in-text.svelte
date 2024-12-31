<script lang="ts">
	import { gsap } from "gsap";
	import { onMount } from "svelte";

	let {
		text,
		tag = "span",
		class: className = ""
	}: { text: string; tag?: string; class?: string } = $props();
	let words = text.split(" ");

	onMount(() => {
		gsap.to(".part", {
			x: 0,
			y: 0,
			filter: "blur(0px)",
			opacity: 1,
			ease: "power2.out",
			duration: 0.45,
			stagger: 0.025
		});
	});
</script>

<svelte:element this={tag} class={[className, "inline-block align-middle"]}>
	{#each words as word, i}
		<span class="relative inline-block">
			{#each word.split("") as char}
				<span class="part inline-block -translate-x-full translate-y-1/3 opacity-0 blur-md">
					{#if char !== " "}
						{char}
					{:else}
						&nbsp;
					{/if}
				</span>
			{/each}
		</span>
		<span>
			{#if i !== words.length - 1}
				&nbsp;
			{/if}
		</span>
	{/each}
</svelte:element>
