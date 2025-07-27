<script lang="ts">
  const {
    fill = "white",
    class: className = ""
  }: {
    fill?: string;
    class?: string;
  } = $props();
</script>

<svg
  class={[
    "pointer-events-none absolute z-[1] h-[169%] w-[138%] animate-spotlight opacity-0 lg:w-[84%]",
    className
  ]}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 378 284"
  fill="none">
  <g filter="url(#filter)">
    <ellipse
      cx="192.471"
      cy="27.3501"
      rx="192.471"
      ry="27.3501"
      transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 363.188 229.109)"
      fill={fill || "white"}
      fill-opacity="0.16"></ellipse>
  </g>
  <defs>
    <filter
      id="filter"
      x="0.860352"
      y="0.838989"
      width="378.516"
      height="284.026"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
      <feGaussianBlur stdDeviation="15.1" result="effect1_foregroundBlur_1065_8"></feGaussianBlur>
    </filter>
  </defs>
</svg>
