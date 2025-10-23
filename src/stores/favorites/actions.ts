import type {
  PokemonFavoriteStoreType,
  PokemonFavoriteStateType,
} from '@/types/stores/pokemonFavoriteType'
import type { PokemonDetail } from '@/types/api/getPokemonsType'

export const actions = {
  addFavorite(this: PokemonFavoriteStoreType, pokemon: PokemonDetail) {
    console.log('addFavorite llamado con:', pokemon.name)
    if (!this.favorites.some((p) => p.id === pokemon.id)) {
      this.favorites.push(pokemon)
      this.saveFavoritesToLocalStorage()
      console.log('Favorito agregado. Total:', this.favorites.length)
    }
  },

  removeFavorite(this: PokemonFavoriteStoreType, pokemonId: number) {
    console.log('removeFavorite llamado con ID:', pokemonId)
    this.favorites = this.favorites.filter((p) => p.id !== pokemonId)
    this.saveFavoritesToLocalStorage()
    console.log('Favorito removido. Total:', this.favorites.length)
  },

  toggleFavorite(this: PokemonFavoriteStoreType, pokemon: PokemonDetail) {
    console.log('toggleFavorite llamado con:', pokemon.name)
    const isFav = this.favorites.some((p) => p.id === pokemon.id)
    console.log('Es favorito actualmente:', isFav)

    if (isFav) {
      this.removeFavorite(pokemon.id)
    } else {
      this.addFavorite(pokemon)
    }
  },

  clearFavorites(this: PokemonFavoriteStoreType) {
    this.favorites = []
    localStorage.removeItem('pokemon-favorites')
  },

  loadFavoritesFromLocalStorage(this: PokemonFavoriteStateType) {
    try {
      const stored = localStorage.getItem('pokemon-favorites')
      if (stored) {
        this.favorites = JSON.parse(stored)
        console.log('Favoritos cargados desde localStorage:', this.favorites.length)
      }
    } catch (error) {
      console.error('Error al cargar favoritos:', error)
      this.favorites = []
    }
  },

  saveFavoritesToLocalStorage(this: PokemonFavoriteStateType) {
    try {
      localStorage.setItem('pokemon-favorites', JSON.stringify(this.favorites))
      console.log('Favoritos guardados en localStorage')
    } catch (error) {
      console.error('Error al guardar favoritos:', error)
    }
  },
}
