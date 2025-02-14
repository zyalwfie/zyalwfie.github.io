<script setup>
	import { ref } from 'vue';

	const isOpen = ref(false);
</script>

<template>
	<header class="flex justify-between items-center px-4 py-2 md:px-8 lg:px-16 xl:px-64 dark:text-white">
		<a
			href=""
			class="font-federo uppercase text-3xl font-bold">
			ziyad
		</a>

		<nav
			v-if="isOpen"
			class="fixed inset-0 flex justify-end backdrop-blur-md">
			<div
				class="h-full w-3/4 bg-white p-8 flex flex-col gap-y-4 shadow">
				<a
					href="#"
					class="font-federo uppercase text-3xl font-bold">
					ziyad
				</a>
				<div class="flex flex-col gap-y-2">
					<a
						href=""
						class="font-medium capitalize">
						services
					</a>
					<a
						href=""
						class="font-medium capitalize">
						projects
					</a>
					<a
						href=""
						class="font-medium capitalize">
						about
					</a>
				</div>
			</div>
		</nav>

		<nav class="hidden md:flex items-center justify-center gap-4 capitalize">
			<a href="" class="text-lg transition hover:text-gray-500">services</a>
			<a href="" class="text-lg transition hover:text-gray-500">projects</a>
			<a href="" class="text-lg transition hover:text-gray-500">about</a>
		</nav>

		<button
			@click="isOpen = !isOpen"
			class="flex items-center fixed right-4 z-20 md:hidden">
			<i
				v-if="!isOpen"
				class="bx bx-menu-alt-right bx-sm"></i>
			<i
				v-if="isOpen"
				class="bx bx-x bx-sm"></i>
		</button>
	</header>
</template>
