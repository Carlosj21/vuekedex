import type { PokemonType } from '@jaflesch/ts-pokeapi'

export interface pokemonStoreType {
  pokemonList: Array<PokemonType>
  favoritePokemons: Record<number, boolean>
}
