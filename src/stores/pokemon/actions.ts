import type { pokemonStoreType } from '@/types/stores/pokemonStoreType'

export const actions = {
  addPokemonToFavorites(this: pokemonStoreType, id: number) {
    this.favoritePokemons[id] = true
  },
  removePokemonFromFavorites(this: pokemonStoreType, id: number) {
    delete this.favoritePokemons[id]
  },
}
