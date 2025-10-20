import type { PokemonType } from '@jaflesch/ts-pokeapi'

export const state = () => ({
  pokemonList: [] as Array<PokemonType>,
  favoritePokemons: {} as Record<number, boolean>,
})
