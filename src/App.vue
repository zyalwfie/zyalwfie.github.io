<script setup>
import Header from './components/Header.vue'
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <Header />
  
  <main class="h-screen flex flex-col gap-y-4 justify-center items-center">
    <h1 class="text-2xl font-bold capitalize dark:text-white">welcome to my portfolio 👋</h1>
    <button @click="toggleDark()" type="button" class="dark:text-white dark:bg-gray-500 px-4 py-2 rounded bg-gray-950 text-white capitalize transition-colors cursor-pointer">switch theme</button>
  </main>
</template>