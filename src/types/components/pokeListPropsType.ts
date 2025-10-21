import type { PokemonType } from '@/types/api/getPokemonByNameOrIdType'

export interface PokeListProps {
  pokemons: PokemonType[]
  loading?: boolean
}
