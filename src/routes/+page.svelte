<script lang="ts">
	import { resolve } from '$app/paths';

	const links = [
		{ label: 'GitHub', href: 'https://github.com' },
		{ label: 'Email', href: 'mailto:hello@example.com' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com' }
	];

	const projects = [
		{
			name: 'Realtime Dashboard',
			description:
				'A collaborative analytics dashboard with live data streaming and shareable views.',
			tags: ['SvelteKit', 'WebSockets', 'D1']
		},
		{
			name: 'Edge API',
			description:
				'A low-latency API deployed on the edge, serving millions of requests worldwide.',
			tags: ['Cloudflare', 'TypeScript', 'Hono']
		},
		{
			name: 'Design System',
			description:
				'An accessible, themeable component library powering multiple internal products.',
			tags: ['Tailwind', 'a11y', 'Storybook']
		}
	];
</script>

<div class="mx-auto flex min-h-dvh max-w-3xl flex-col px-6 py-16 sm:py-24">
	<header class="flex items-center justify-between">
		<a href={resolve('/')} class="text-lg font-semibold tracking-tight">home.site</a>
		<nav class="flex gap-6 text-sm text-slate-400">
			<a class="transition hover:text-white" href="#projects">Projects</a>
			<a class="transition hover:text-white" href="#about">About</a>
			<a class="transition hover:text-white" href="#contact">Contact</a>
		</nav>
	</header>

	<main class="flex-1">
		<section class="mt-20 sm:mt-28">
			<p
				class="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-300"
			>
				<span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
				Available for new projects
			</p>
			<h1
				class="bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
			>
				Hi, I&rsquo;m building fast<br />things for the web.
			</h1>
			<p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
				I&rsquo;m a software engineer focused on delightful, high-performance web experiences. This
				site is built with SvelteKit and Tailwind CSS, and runs on Cloudflare Pages at the edge.
			</p>
			<div class="mt-8 flex flex-wrap gap-3">
				<a
					href="#projects"
					class="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
				>
					View work
				</a>
				<a
					href="#contact"
					class="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/50"
				>
					Get in touch
				</a>
			</div>
		</section>

		<section id="projects" class="mt-24 scroll-mt-16">
			<h2 class="text-sm font-semibold tracking-widest text-slate-500 uppercase">Selected work</h2>
			<div class="mt-6 grid gap-4 sm:grid-cols-2">
				{#each projects as project (project.name)}
					<article
						class="group rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-slate-600 hover:bg-slate-900"
					>
						<h3 class="font-semibold text-white transition group-hover:text-emerald-300">
							{project.name}
						</h3>
						<p class="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>
						<ul class="mt-4 flex flex-wrap gap-2">
							{#each project.tags as tag (tag)}
								<li class="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">{tag}</li>
							{/each}
						</ul>
					</article>
				{/each}
			</div>
		</section>

		<section id="about" class="mt-24 scroll-mt-16">
			<h2 class="text-sm font-semibold tracking-widest text-slate-500 uppercase">About</h2>
			<div class="prose mt-6 max-w-none prose-invert prose-p:text-slate-400">
				<p>
					I care about the details: crisp typography, snappy interactions, and pages that load
					instantly. Over the years I&rsquo;ve shipped products across the stack, from pixel-perfect
					interfaces to resilient backend services.
				</p>
				<p>
					When I&rsquo;m not coding, you&rsquo;ll find me reading, running, or exploring new coffee
					spots.
				</p>
			</div>
		</section>

		<section id="contact" class="mt-24 scroll-mt-16">
			<h2 class="text-sm font-semibold tracking-widest text-slate-500 uppercase">Contact</h2>
			<p class="mt-6 text-slate-400">Let&rsquo;s build something together.</p>
			<div class="mt-6 flex flex-wrap gap-3">
				{#each links as link (link.label)}
					<!-- eslint-disable svelte/no-navigation-without-resolve -- external links -->
					<a
						href={link.href}
						rel="noreferrer"
						target="_blank"
						class="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/50"
					>
						{link.label}
					</a>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->
				{/each}
			</div>
		</section>
	</main>

	<footer class="mt-24 border-t border-slate-800 pt-8 text-sm text-slate-500">
		<p>
			&copy; {new Date().getFullYear()} home.site &middot; Built with SvelteKit &amp; Tailwind, deployed
			on Cloudflare Pages.
		</p>
	</footer>
</div>
