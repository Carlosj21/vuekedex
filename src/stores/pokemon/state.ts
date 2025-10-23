import type { PokemonStateType } from '@/types/stores/pokemonStoreType'

export const state = (): PokemonStateType => ({
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
