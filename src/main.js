// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';

import Btn from '@/components/my-component/Button.vue';

// createApp(App).mount('#app')

const app = createApp(App);
app.component('MyBtn', Btn);
app.mount("#app");