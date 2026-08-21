import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Expressions from '../pages/Expressions.vue'
import Binding from '../pages/Binding.vue'
import ListRendering from '../pages/ListRendering.vue'
import ObjectListRendering from '../pages/list-rendering/ObjectListRendering.vue'
import BuildCustomComponentWhileRendering from '../pages/list-rendering/BuildCustomComponentWhileRendering.vue'
import Directives from '../pages/Directives.vue'
import MemoryHooks from '../pages/MemoryHooks.vue'
import Training from '../pages/Training.vue'
import Functions from '../pages/Functions.vue'
import FunctionsAndArrays from '../pages/functions/FunctionsAndArrays.vue'
import Events from '../pages/Events.vue'
import EventsAndRef from '../pages/events/EventsAndRef.vue'
import VIf from '../pages/directives/VIf.vue'
import VElseIf from '../pages/directives/VElseIf.vue'
import VShow from '../pages/directives/VShow.vue'
import VModel from '../pages/directives/VModel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/expressions', name: 'expressions', component: Expressions },
    { path: '/binding', name: 'binding', component: Binding },
    { path: '/list-rendering', name: 'list-rendering', component: ListRendering },
    { path: '/list-rendering/object-list-rendering', name: 'object-list-rendering', component: ObjectListRendering },
    { path: '/list-rendering/build-custom-component-while-rendering', name: 'build-custom-component-while-rendering', component: BuildCustomComponentWhileRendering },
    { path: '/directives', name: 'directives', component: Directives },
    { path: '/directives/v-if', name: 'v-if', component: VIf },
    { path: '/directives/v-else-if', name: 'v-else-if', component: VElseIf },
    { path: '/directives/v-show', name: 'v-show', component: VShow },
    { path: '/directives/v-model', name: 'v-model', component: VModel },
    { path: '/memory-hooks', name: 'memory-hooks', component: MemoryHooks },
    { path: '/training', name: 'training', component: Training },
    { path: '/functions', name: 'functions', component: Functions },
    { path: '/functions/functions-and-arrays', name: 'functions-and-arrays', component: FunctionsAndArrays },
    { path: '/events', name: 'events', component: Events },
    { path: '/events/events-and-ref', name: 'events-and-ref', component: EventsAndRef },
  ],
})

export default router
