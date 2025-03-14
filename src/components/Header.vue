<script setup>
	import { onMounted, onUnmounted, ref } from 'vue';
	import { useDark, useToggle } from '@vueuse/core';

	const isDark = useDark();
	const toggleDark = useToggle(isDark);

	const isOpen = ref(false);
	const hasShadow = ref(false);

	const handleScroll = () => {
		hasShadow.value = window.scrollY > 10;
	};

	onMounted(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll);
	});
</script>

<template>
	<header
		:class="[
			'fixed inset-x-0 top-0 z-10 flex items-center px-4 py-6 md:px-8 lg:px-16 xl:px-64 dark:text-white bg-white dark:bg-black transition-all duration-300',
			hasShadow ? 'shadow-lg' : 'shadow-none',
		]">
		<a
			href="#"
			class="font-federo uppercase text-3xl font-bold">
			ziyad
		</a>
		<Transition>
			<nav
				v-show="isOpen"
				:class="{ 'translate-x-0': isOpen }"
				class="fixed z-20 inset-0 bg-white dark:bg-black flex flex-col justify-between transition px-4 py-6 md:px-8 lg:px-16 xl:px-64 md:hidden">
				<div class="flex justify-between items-center">
					<div class="flex items-center gap-x-4">
						<div
							class="size-16 border-2 shadow-[5px_5px_0] text-2xl font-bold font-federo text-center leading-[64px]">
							ZA
						</div>
						<div class="flex flex-col gap-y-px">
							<h1 class="font-federo text-lg font-bold">
								Ziyad Alwafie
							</h1>
							<p class="text-sm">Fullstack Developer</p>
						</div>
					</div>
					<button
						@click="isOpen = !isOpen"
						class="flex items-center">
						<i class="bx bx-x bx-sm"></i>
					</button>
				</div>
				<div class="my-20 border-t"></div>
				<div class="flex flex-col gap-y-4">
					<a href="#hero" @click="isOpen = !isOpen">Home</a>
					<a href="#services" @click="isOpen = !isOpen">Services</a>
					<a href="#projects" @click="isOpen = !isOpen">Projects</a>
					<a href="#about" @click="isOpen = !isOpen">About</a>
				</div>
				<div class="my-20 border-t"></div>
				<div class="flex justify-between">
					<div class="flex gap-x-4">
						<a href="https://www.instagram.com/wwfyy_/">
							<i class="bx bxl-instagram bx-sm"></i>
						</a>
						<a href="https://github.com/zyalwfie">
							<i class="bx bxl-github bx-sm"></i>
						</a>
						<a href="https://www.linkedin.com/in/ziyad-alwafie-798373258/">
							<i class="bx bxl-linkedin bx-sm"></i>
						</a>
					</div>
					<button
						@click="toggleDark()"
						type="button"
						class="button">
						<span class="dark:hidden flex items-center">
							<i class="bx bx-moon"></i>
						</span>
						<span class="hidden dark:flex items-center">
							<i class="bx bx-sun"></i>
						</span>
					</button>
				</div>
			</nav>
		</Transition>

		<nav class="hidden md:flex flex-1 justify-end items-center gap-x-8">
			<div class="flex gap-x-4">
				<a
					href="#hero"
					class="text-lg transition hover:text-gray-500">
					Home
				</a>
				<a
					href="#services"
					class="text-lg transition hover:text-gray-500">
					Services
				</a>
				<a
					href="#projects"
					class="text-lg transition hover:text-gray-500">
					Projects
				</a>
				<a
					href="#about"
					class="text-lg transition hover:text-gray-500">
					About
				</a>
			</div>
			<button
				@click="toggleDark()"
				type="button"
				class="button">
				<span class="dark:hidden flex items-center">
					<i class="bx bx-moon"></i>
				</span>
				<span class="hidden dark:flex items-center">
					<i class="bx bx-sun"></i>
				</span>
			</button>
		</nav>

		<button
			@click="isOpen = !isOpen"
			class="flex items-center fixed right-4 md:hidden">
			<i class="bx bx-menu-alt-right bx-sm"></i>
		</button>
	</header>
</template>

<style>
	.v-enter-active,
	.v-leave-active {
		transform: translateX(0);
		transition: transform 0.5s ease-in-out;
	}

	.v-enter-from,
	.v-leave-to {
		transform: translateX(-100%);
	}
</style>
