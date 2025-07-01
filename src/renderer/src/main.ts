import { createApp } from 'vue';
import App from './App.vue';
import "./main.css";
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

createApp(App)
.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
.mount('#app')
