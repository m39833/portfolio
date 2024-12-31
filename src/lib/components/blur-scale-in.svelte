<script lang="ts">
    import { onMount, type Snippet } from "svelte";
    import { gsap } from "gsap";

    let {
        duration = 1,
        tag = "div",
        class: className = "",
        children
    }: {
        duration?: number;
        tag?: string;
        class?: string;
        children: Snippet<[boolean]>;
    } = $props();

    let complete = $state(false);

    let test: HTMLElement;

    onMount(() => {
        gsap.to(test, {
            filter: "blur(0px)",
            opacity: 1,
            scale: 1,
            ease: `elastic.out(0.8, ${duration})`,
            duration,
            onComplete() {
                complete = true;
            }
        });
    });
</script>

<svelte:element
    this={tag}
    bind:this={test}
    class={[className, "scale-0 transform-gpu opacity-0 blur-xl"]}>
    {@render children(complete)}
</svelte:element>
