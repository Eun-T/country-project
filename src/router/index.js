import Home from '@/pages/Home.vue';
import Question from '@/pages/Question.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/question', component: Question },
  ],
});

export default router;
