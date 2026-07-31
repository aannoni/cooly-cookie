import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Expressions from '../pages/Expressions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/expressions', name: 'expressions', component: Expressions },
  ],
})

export default router
