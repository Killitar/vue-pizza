import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';

import App from './App.vue';
import Home from './pages/HomePage.vue';
import Cart from './pages/CartPage.vue';
import NotFound from './pages/NotFoundPage.vue';

import './scss/app.scss';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
});

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
