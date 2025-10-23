import type { PokemonStateType } from '@/types/stores/pokemonStoreType'

export const getters = {
  displayedPokemons: (state: PokemonStateType) => {
    return state.searchTerm ? state.filteredPokemons : state.pokemons
  },

  hasMore: (state: PokemonStateType) => {
    return state.offset < state.totalCount
  },

  isSearching: (state: PokemonStateType) => {
    return state.searchTerm?.length > 0 || false
  },
}
