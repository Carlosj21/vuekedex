import type { PokemonDetail, PokemonBasicInfo } from '@/types/api/getPokemonsType'

export interface PokemonStateType {
  pokemons: PokemonDetail[]
  filteredPokemons: PokemonDetail[]
  searchTerm: string
  loading: boolean
  offset: number
  limit: number
  totalCount: number
  pokemonNamesCache: PokemonBasicInfo[]
  namesCacheLoaded: boolean
}

export interface PokemonActionsType {
  loadMore(): Promise<void>
  loadPokemonNamesCache(): Promise<void>
  searchPokemons(term: string): Promise<void>
  clearSearch(): void
  resetStore(): void
}

export interface PokemonGettersType {
  displayedPokemons: PokemonDetail[]
  hasMore: boolean
  isSearching: boolean
}

export type PokemonStoreType = PokemonStateType & PokemonActionsType & PokemonGettersType
