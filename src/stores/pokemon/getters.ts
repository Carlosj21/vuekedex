import type { PokemonStoreType } from '@/types/stores/pokemonStoreType'

export const getters = {
  displayedPokemons: (state: PokemonStoreType) => {
    return state.searchTerm ? state.filteredPokemons : state.pokemons
  },

  hasMore: (state: PokemonStoreType) => {
    return state.offset < state.totalCount
  },

  isSearching: (state: PokemonStoreType) => {
    return state.searchTerm.length > 0
  },
}
