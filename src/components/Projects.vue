<script setup lang="ts">
	import { ref } from 'vue';

	const projects = ref([
		{
			title: 'Database Warga',
			description: 'MSIB capstone project (Independent Study) managing citizen data for a village or organization that is still not well managed.',
			tags: ['Laravel', 'PHP', 'Javascript', 'MySQL'],
			image: '/images/projects-thumbnail/db-warga.jpg',
			logo: '/images/projects-logo/db-warga-logo.svg',
			code: null,
			isAvailable: false
		},
		{
			title: 'Fund Together',
			description: 'Template UI use for crowd funding app, like donation or alms',
			tags: ['Tailwind CSS', 'CSS', 'HTML5', 'Javascript'],
			image: '/images/projects-thumbnail/fund-together.jpg',
			logo: '/images/projects-logo/fund-together-logo.svg',
			code: 'https://github.com/zyalwfie/fund-together',
			isAvailable: true
		},
		{
			title: 'Kusaku',
			description: 'Template UI for e-wallet app, can be use to track you money spend and your financial savings',
			tags: ['Tailwind CSS', 'HTML5', 'CSS', 'Javascript'],
			image: '/images/projects-thumbnail/kusaku.jpg',
			logo: '/images/projects-logo/kusaku-logo.svg',
			code: 'https://github.com/zyalwfie/kusaku',
			isAvailable: true
		},
	]);
</script>

<template>
	<section
		id="projects"
		class="pt-32 lg:pt-56 flex flex-col justify-center lg:h-lvh lg:items-stretch px-4 md:px-8 lg:px-16 xl:px-64">
		<div class="flex justify-between items-center mb-8 dark:text-white">
			<h2 class="flex gap-x-4 items-center font-federo">
				<i class="bx bxs-right-arrow"></i>
				<span class="text-4xl font-bold font-federo">Projects</span>
			</h2>
		</div>
		<div
			class="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6">
			<article v-for="(project, index) in projects" :key="index">
				<section class="transition border-2 shadow-[5px_5px_0] dark:text-white dark:shadow-white hover:shadow-[2px_2px_0] hover:translate-y-px">
					<header class="overflow-hidden">
						<img :src=project.image :alt=project.title>
					</header>
					<main class="p-6 flex flex-col gap-4">
						<h3 class="font-federo text-3xl">{{ project.title }}</h3>
						<p class="line-clamp-2">{{ project.description }}</p>
						<div class="flex gap-2 overflow-x-auto">
							<span v-for="(tag, index) in project.tags" :key="index" class="border shadow-[2px_2px_0] min-w-max px-2 py-1">
								{{ tag }}
							</span>
						</div>
					</main>
					<footer class="px-6 pb-6 flex items-center gap-4">
						<button disabled class="button cursor-not-allowed">
							Preview
						</button>
							<a v-if="project.isAvailable" :href="project.code" class="button flex items-center gap-2">
								<i class='bx bxl-github bx-sm'></i>
								<span>Code</span>
							</a>
							<button v-else disabled class="button flex items-center gap-2 cursor-not-allowed">
								<i class='bx bxl-github bx-sm'></i>
								<span>Code</span>
							</button>
					</footer>
				</section>
			</article>
		</div>
	</section>
</template>
