import { createRouter, createWebHistory } from 'vue-router';
import Layout from './components/Layout.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: Layout,
      props: { cmp: 'page1' },
    },
    {
      path: '/page2',
      name: 'page2',
      component: Layout,
      props: { cmp: 'page2' },
    },
    {
      path: '/',
      name: 'home',
      component: Layout,
      props: { cmp: 'hello-world' },
    },
  ],
});

export default router;
