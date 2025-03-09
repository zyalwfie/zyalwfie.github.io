import './assets/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createApp } from 'vue';
import App from './App.vue';

AOS.init();

createApp(App).mount('#app');
