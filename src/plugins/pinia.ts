import { createPinia } from 'pinia'
import { PokemonStore } from '@/stores/pokemon'

const pinia = createPinia()

PokemonStore(pinia)

export async function initStores() {
  const pokemon = PokemonStore(pinia)
  return { pokemon }
}

export default pinia
