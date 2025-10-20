import type { PokemonType } from '@jaflesch/ts-pokeapi'

export interface pokemonStoreType {
  pokemons: PokemonType[]
  filteredPokemons: PokemonType[]
  searchTerm: string
  loading: boolean
  offset: number
  limit: number
  totalCount: number
  pokemonNamesCache: PokemonType[]
  namesCacheLoaded: boolean
}
