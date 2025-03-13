import './assets/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createApp } from 'vue';
import App from './App.vue';
import 'boxicons';

AOS.init();

createApp(App).mount('#app');

