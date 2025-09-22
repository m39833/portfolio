<script lang="ts">
  import { cn } from "$lib/utils";
  import { onMount } from "svelte";

  let { n } = $props<{ n: number }>();

  type MeteorStyle = {
    top: number;
    left: string;
    animationDelay: string;
    animationDuration: string;
  };

  let meteorStyles: MeteorStyle[] = $state([]);

  function changeMeteors(num: number) {
    meteorStyles = [];
    const styles = [...new Array(num)].map(() => ({
      top: -20,
      left: Math.floor(Math.random() * 700) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 7.5 + 2.5) + "s"
    }));

    meteorStyles = styles;
  }

  onMount(() => {
    changeMeteors(n);
  });
</script>

{#each meteorStyles as style, idx}
  <span
    id="meteor-{idx + 1}"
    class={cn(
      "pointer-events-none absolute left-1/2 top-1/2 size-[2.4px] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
    )}
    style="top: {style.top}px; left: {style.left}; animation-delay: {style.animationDelay}; animation-duration: {style.animationDuration};">
    <!-- Meteor Tail  -->
    <div
      class="pointer-events-none absolute left-[-50px] top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-600/30 to-slate-500">
    </div>
  </span>
{/each}
