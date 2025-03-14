<script setup lang="ts">
	import { ref } from 'vue';

	const projects = ref([
		{
			title: 'First Project',
			index: '01',
			image: 'https://placehold.co/400',
		},
		{
			title: 'Second Project',
			index: '02',
			image: 'https://placehold.co/400',
		},
		{
			title: 'Third Project',
			index: '03',
			image: 'https://placehold.co/400',
		},
		{
			title: 'Fourth Project',
			index: '04',
			image: 'https://placehold.co/400',
		},
	]);
</script>

<template>
	<section
		id="projects"
		class="pt-32 lg:pt-56 flex flex-col justify-center lg:h-lvh lg:items-stretch px-4 md:px-8 lg:px-16 xl:px-64 overflow-hidden">
		<div class="flex justify-between items-center mb-8 dark:text-white">
			<h2 class="flex gap-x-4 items-center font-federo">
				<i class="bx bxs-right-arrow"></i>
				<span class="text-4xl font-bold font-federo">Projects</span>
			</h2>
			<a
				href="#"
				class="shadow-[5px_5px_0] px-4 py-1 transition hover:shadow-[2px_2px_0] hover:translate-y-px border-2"
				>See More</a
			>
		</div>
		<div
			class="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-6">
			<article
				v-for="project in projects"
				:key="project.index"
				class="relative shadow-[5px_5px_0] border-2 transition-all duration-500 ease-in-out group overflow-hidden dark:text-white">
				<div
					class="absolute h-full w-full lg:scale-y-0 origin-top group-hover:scale-y-100 transition duration-500 ease-in-out">
					<img
						:src="project.image"
						alt="Thumbnail"
						class="object-cover" />
				</div>
				<div class="py-8">
					<img
						:src="project.image"
						alt="Thumbnail"
						class="rounded-full size-26 mx-auto mb-8" />
					<div class="flex items-center justify-center">
						<i class="bx bx-radio-circle-marked"></i>
					</div>
					<div
						class="translate-y-60 md:translate-y-48 lg:translate-y-0 lg:group-hover:translate-y-14 transition-all duration-500 ease-in-out">
						<h3
							class="my-2 text-center font-bold font-federo text-xl tracking-wide">
							{{ project.title }}
						</h3>
						<p class="text-center text-base">{{ project.index }}</p>
					</div>
				</div>
				<div
					class="h-62 md:h-52 lg:max-h-0 lg:group-hover:max-h-[34px] transition-all ease-in-out duration-500">
					<span class="opacity-0">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cupiditate a dolores nesciunt esse harum quidem incidunt
						placeat eius perspiciatis nam.
					</span>
				</div>
			</article>
		</div>
	</section>
</template>
