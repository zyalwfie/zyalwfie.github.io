<script setup>
	import { ref } from 'vue';
	import { useDark, useToggle } from '@vueuse/core';

	const isDark = useDark();
	const toggleDark = useToggle(isDark);

	const isOpen = ref(false);
</script>

<template>
	<header
		class="flex items-center px-4 py-6 md:px-8 lg:px-16 xl:px-64 dark:text-white">
		<a
			href="#"
			class="font-federo uppercase text-3xl font-bold">
			ziyad
		</a>

		<nav
			v-if="isOpen"
			class="fixed inset-0 flex justify-end backdrop-blur-md">
			<div
				class="h-full w-3/4 bg-white dark:bg-gray-500 p-8 flex flex-col gap-y-4 shadow">
				<a
					href="#"
					class="font-federo uppercase text-3xl font-bold">
					ziyad
				</a>
				<div class="flex flex-col gap-y-2">
					<a
						href=""
						class="font-medium capitalize dark:text-white">
						services
					</a>
					<a
						href=""
						class="font-medium capitalize dark:text-white">
						projects
					</a>
					<a
						href=""
						class="font-medium capitalize dark:text-white">
						about
					</a>
				</div>
			</div>
		</nav>

		<nav
			class="hidden md:flex flex-1 justify-end items-center gap-x-8 capitalize">
			<div class="flex gap-x-4">
				<a
					href="#"
					class="text-lg transition hover:text-gray-500">
					services
				</a>
				<a
					href="#"
					class="text-lg transition hover:text-gray-500">
					projects
				</a>
				<a
					href="#"
					class="text-lg transition hover:text-gray-500">
					about
				</a>
			</div>
			<button
				@click="toggleDark()"
				type="button"
				class="button">
				switch theme
			</button>
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
