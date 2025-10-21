import type { PokemonDetail, PokemonBasicInfo } from '@/types/api/getPokemonsType'

export interface PokemonStoreType {
  // State
  pokemons: PokemonDetail[]
  filteredPokemons: PokemonDetail[]
  favoritePokemons: Record<number, boolean>
  searchTerm: string
  loading: boolean
  offset: number
  limit: number
  totalCount: number
  pokemonNamesCache: PokemonBasicInfo[]
  namesCacheLoaded: boolean
  // actions
  loadMore(): Promise<void>
  loadPokemonNamesCache(): Promise<void>
  searchPokemons(term: string): Promise<void>
  clearSearch(): void
  resetStore(): void
}
