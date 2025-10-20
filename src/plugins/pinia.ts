import { createPinia } from 'pinia'
import { pokemonStore } from '@/stores/pokemon'

const pinia = createPinia()

pokemonStore(pinia)

export async function initStores() {
  const pokemon = pokemonStore(pinia)
  return { pokemon }
}

export default pinia
