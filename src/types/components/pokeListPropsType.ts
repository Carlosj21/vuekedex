import type { PokemonDetail } from '@/types/api/getPokemonsType'

export interface PokeListProps {
  pokemons: PokemonDetail[]
  loading?: boolean
  viewMode?: string
}
