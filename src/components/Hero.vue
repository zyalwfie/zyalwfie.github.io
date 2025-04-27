<script setup>
	import { ref } from 'vue';
	import Viewer from 'viewerjs';
	import 'viewerjs/dist/viewer.css';

	const viewerContainer = ref(null);
	let viewerInstance = null;

	const openViewer = () => {
		if (!viewerInstance) {
			viewerInstance = new Viewer(viewerContainer.value, {
				backdrop: true,
				toolbar: true,
				movable: true,
				zoomable: true,
				scalable: true,
				fullscreen: true,
				transition: true,
			});
		}
		viewerInstance.show();
	};
</script>

<template>
	<section
		id="hero"
		class="scroll-mt-22 flex md:h-lvh flex-col gap-y-12 lg:flex-row items-start lg:justify-between lg:items-center px-4 md:px-8 pt-26 md:pt-32 lg:pt-20 lg:px-16 xl:px-64">
		<!-- Modal -->
		<div
			ref="viewerContainer"
			style="display: none">
			<img
				src="/images/cv/wafy-cv.jpg"
				alt="CV Detail" />
		</div>

		<!-- Hero Section -->
		<div
			class="flex flex-col gap-y-4"
			data-aos="fade-right"
			data-aos-duration="800">
			<h1 class="font-federo text-4xl font-bold dark:text-white">
				Hi, I'm Ziyad Alwafie<br />creative developer
			</h1>
			<p class="dark:text-white">
				I bridge the gap between design and development,<br
					class="hidden lg:block" />
				building beautiful and functional experiences.
			</p>
			<div class="flex items-center gap-8 dark:text-white">
				<button
					@click="openViewer"
					class="button">
					CV Detail
				</button>
				<a
					target="_blank"
					href="https://api.whatsapp.com/send?phone=6282147321636"
					class="flex gap-x-2 group">
					<p class="underline underline-offset-2">Call me</p>
					<span
						class="flex text-lg items-center group-hover:-translate-y-1.5 group-hover:translate-x-px transition">
						<i class="bx bxs-right-top-arrow-circle"></i>
					</span>
				</a>
			</div>
		</div>

		<div
			data-aos-duration="800"
			data-aos="fade-left"
			class="flex justify-center lg:rounded-full overflow-hidden p-2 outline-4 dark:outline-white w-full lg:w-auto">
			<img
				src="/images/me.png"
				alt="Ziyad Alwafie"
				class="object-cover lg:rounded-full lg:size-[450px]" />
		</div>
	</section>
</template>
