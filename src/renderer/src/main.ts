import { createApp } from 'vue';
import App from './App.vue';
import "./main.css";
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia';

const pinia = createPinia()

createApp(App)
.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
.use(pinia)
.mount('#app')
