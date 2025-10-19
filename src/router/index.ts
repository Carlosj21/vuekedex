import { createRouter, createWebHistory } from 'vue-router'
import PokeWelcome from '@/views/pokeWelcome.vue'
import PokeList from '@/views/pokeList.vue'

const routes = [
  { path: '/', name: 'PokeWelcome', component: PokeWelcome },
  { path: '/pokeList', name: 'PokeList', component: PokeList },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
