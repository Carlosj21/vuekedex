import type { PokemonFavoriteStateType } from '@/types/stores/pokemonFavoriteType'

export const getters = {
  isFavorite: (state: PokemonFavoriteStateType) => {
    return (pokemonId: number) => {
      return state.favorites.some((p) => p.id === pokemonId)
    }
  },

  favoritesCount: (state: PokemonFavoriteStateType) => {
    return state.favorites.length
  },

  getFavorites: (state: PokemonFavoriteStateType) => {
    return state.favorites
  },
}
