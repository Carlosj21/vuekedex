import type { PokemonDetail } from '@/types/api/getPokemonsType'

export interface PokeFavoriteBtnProps {
  pokemon?: PokemonDetail | null
  pokemonId?: number
}
