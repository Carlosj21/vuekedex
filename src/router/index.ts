import { createRouter, createWebHistory } from 'vue-router'
import PokeWelcome from '@/views/pokeWelcome.vue'
import PokeMain from '@/views/pokeMain.vue'

const routes = [
  { path: '/', name: 'PokeWelcome', component: PokeWelcome },
  { path: '/pokeMain', name: 'PokeMain', component: PokeMain },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
