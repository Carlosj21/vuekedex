import { createRouter, createWebHistory } from 'vue-router'
import PokeWelcome from '../views/pokeWelcome.vue'
import PokeList from '../views/pokeList.vue'

const routes = [
  { path: '/', component: PokeWelcome },
  { path: '/list', component: PokeList },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
