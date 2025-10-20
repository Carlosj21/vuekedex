import type { pokemonStoreType } from '@/types/stores/pokemonStoreType'

export const state = (): pokemonStoreType => ({
  pokemons: [],
  filteredPokemons: [],
  searchTerm: '',
  loading: false,
  offset: 0,
  limit: 50,
  totalCount: 0,
  pokemonNamesCache: [],
  namesCacheLoaded: false,
})
