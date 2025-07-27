<script lang="ts">
  import type { Snippet } from "svelte";

  let { children, class: className }: { children: Snippet; class?: string } = $props();
</script>

<div class={["mx-auto max-w-5xl", className]}>{@render children()}</div>
