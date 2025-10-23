import { createPinia } from 'pinia'
import { usePokemonStore } from '@/stores/pokemon'
import { usePokemonFavoriteStore } from '@/stores/favorites'

const pinia = createPinia()

usePokemonStore(pinia)
usePokemonFavoriteStore(pinia)

export async function initStores() {
  const pokemon = usePokemonStore(pinia)
  return { pokemon }
}

export default pinia
