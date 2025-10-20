import type { pokemonStoreType } from '@/types/stores/pokemonStoreType'

export const getters = {
  favoritesCount: (state: pokemonStoreType) => Object.keys(state.favoritePokemons).length,
}
