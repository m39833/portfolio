<script lang="ts" module>
	type Social = {
		name: string;
		href: string;
		icon: string | typeof Icon;
	};
</script>

<script lang="ts">
	import { type Icon, Mail } from "lucide-svelte";
	import { env } from "$env/dynamic/public";

	const socials: Social[] = [
		{
			name: "GitHub",
			href: "https://github.com/m39833",
			icon: "/icons/github.svg"
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/matthew-ponciano-209b94259",

			icon: "/icons/linkedin.svg"
		},
		{
			name: "Email",
			href: `mailto:${env.PUBLIC_EMAIL}`,
			icon: Mail
		}
	];
</script>

<header class="sticky left-0 top-0 z-40 flex w-full items-center py-2">
	<nav
		class="mx-auto flex items-center justify-between gap-5 rounded-2xl border border-gray-100/20 bg-black/10 px-4 py-1.5 backdrop-blur-xl backdrop-filter">
		<a href="/" class="upppercase text-lg tracking-widest">
			<span class="uppercase">MP</span>
		</a>

		<div aria-hidden="true" class="h-6 w-px bg-white/50"></div>

		<ul class="flex items-center gap-2">
			{#each socials as social}
				<li class="group flex items-center">
					<a
						class="my-auto flex size-10 items-center justify-center rounded-full"
						href={social.href}
						target="_blank">
						{#if typeof social.icon === "string"}
							<img
								src={social.icon}
								alt={social.name}
								class="size-6 shrink-0 opacity-75 transition-transform group-hover:scale-110" />
						{:else}
							<svelte:component
								this={social.icon}
								class="size-6 shrink-0 opacity-75 transition-transform group-hover:scale-110" />
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
