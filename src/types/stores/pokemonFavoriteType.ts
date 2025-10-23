import type { PokemonDetail } from '@/types/api/getPokemonsType'

export interface PokemonFavoriteStateType {
  favorites: PokemonDetail[]
}

export interface PokemonFavoriteActionsType {
  addFavorite(pokemon: PokemonDetail): void
  removeFavorite(pokemonId: number): void
  toggleFavorite(pokemon: PokemonDetail): void
  clearFavorites(): void
  loadFavoritesFromLocalStorage(): void
  saveFavoritesToLocalStorage(): void
}

export interface PokemonFavoriteGettersType {
  isFavorite: (pokemonId: number) => boolean
  favoritesCount: number
  getFavorites: PokemonDetail[]
}

export type PokemonFavoriteStoreType = PokemonFavoriteStateType &
  PokemonFavoriteActionsType &
  PokemonFavoriteGettersType
