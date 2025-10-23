import type { PokemonSprites } from './pokemonSpritesType.ts'
export interface PokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: PokemonBasicInfo[]
}

export interface PokemonBasicInfo {
  name: string
  url: string
}

export interface PokemonDetail {
  id: number
  name: string
  types: string[]
  sprites?: PokemonSprites
  weight?: number
  height?: number
}

export interface LoadPokemonsParams {
  limit: number
  offset: number
}

export interface PokemonFavoriteState {
  favorites: PokemonDetail[]
}

export interface PokemonFavoriteStoreType extends PokemonFavoriteState {
  isFavorite(pokemonId: number): boolean
  addFavorite(pokemon: PokemonDetail): void
  removeFavorite(pokemonId: number): void
  toggleFavorite(pokemon: PokemonDetail): void
  clearFavorites(): void
}
