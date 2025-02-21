import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style/index.css'
import axios from "axios";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(axios)
app.use(pinia);
app.use(ElementPlus);

app.mount('#app');
