<script setup>
	import About from './components/About.vue';
	import Contact from './components/Contact.vue';
	import Footer from './components/Footer.vue';
	import Header from './components/Header.vue';
	import Hero from './components/Hero.vue';
	import Projects from './components/Projects.vue';
</script>

<template>
	<Header />

	<main>
		<Hero />
		<Projects />
		<About />
		<Contact />
	</main>

	<Footer />
</template>
