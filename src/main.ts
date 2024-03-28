import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import HelloWorld from './components/HelloWorld.vue';
import Page1 from './components/Page1.vue';
import Page2 from './components/Page2.vue';

const app = createApp(App);
app.use(router);
app.component('HelloWorld', HelloWorld);
app.component('Page1', Page1);
app.component('Page2', Page2);
app.mount('#app');
