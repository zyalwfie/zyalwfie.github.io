<script setup>
	import { ref } from 'vue';

	const services = ref([
        {
            id: 1,
            title: 'Modern UI/UX Design',
            description: 'Represents creativity and design aesthetics.',
            icon: 'bx bxs-palette bx-lg'
        },
        {
            id: 2,
            title: 'Interactive & Engaging UI',
            description: 'Symbolizes animations, transitions, and interactivity.',
            icon: 'bx bxs-magic-wand bx-lg'
        },
        {
            id: 3,
            title: 'Responsive Web Development',
            description: 'Illustrates multi-device compatibility.',
            icon: 'bx bxs-devices bx-lg'
        },
        {
            id: 4,
            title: 'Tech Stack',
            description: 'I build dynamic UIs with Vue.js and robust backends with Laravel.',
            icon: 'bx bxs-layer bx-lg'
        },
    ]);
</script>

<template>
	<section
		id="services"
		class="scroll-mt-32 lg:scroll-mt-0 mt-32 lg:mt-0 lg:min-h-screen flex flex-col items-start justify-center gap-y-4 px-4 md:px-8 lg:px-16 xl:px-64 dark:text-white">
		<div class="flex justify-start mb-8 dark:text-white">
			<h2 class="flex gap-x-4 items-center font-federo">
				<i class="bx bxs-right-arrow"></i>
				<span class="text-4xl font-bold font-federo">Services</span>
			</h2>
		</div>

		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-6">
			<article v-for="service in services" :key="service.id"
				class="flex flex-col gap-y-6 items-start border-2 shadow-[5px_5px] p-4 transition hover:shadow-[2px_2px] hover:translate-y-px">
				<div class="flex items-center justify-center">
					<i :class="service.icon"></i>
				</div>
				<div class="flex flex-col gap-y-2">
					<h1 class="text-2xl font-bold">{{ service.title }}</h1>
					<p class="text-sm">{{ service.description }}</p>
				</div>
			</article>
		</div>
	</section>
</template>
