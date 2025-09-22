<script lang="ts">
  import Meteors from "./meteors.svelte";
  import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

  let {
    name,
    description,
    span,
    class: className
  } = $props<{
    name: string;
    description: string;
    span: "sm" | "lg";
    class?: string;
  }>();
</script>

<Card
  class={[
    "group flex scale-100 flex-col overflow-clip transition-all",
    span === "sm" ? "md:col-span-2" : "md:col-span-3",
    className
  ]}>
  <CardContent class="relative flex flex-1 flex-col items-center justify-center">
    <Meteors n={30} />
    <p class="mb-6 w-full text-center text-sm text-muted-foreground">Currently Working On</p>
    <CardTitle class="mb-1 text-center">{name}</CardTitle>
    <CardDescription class="text-center">{description}</CardDescription>
  </CardContent>
</Card>
