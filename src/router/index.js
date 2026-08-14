import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Expressions from '../pages/Expressions.vue'
import Binding from '../pages/Binding.vue'
import Directives from '../pages/Directives.vue'
import MemoryHooks from '../pages/MemoryHooks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/expressions', name: 'expressions', component: Expressions },
    { path: '/binding', name: 'binding', component: Binding },
    { path: '/directives', name: 'directives', component: Directives },
    { path: '/memory-hooks', name: 'memory-hooks', component: MemoryHooks },
  ],
})

export default router
