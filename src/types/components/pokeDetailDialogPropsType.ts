import type { PokemonDetail } from '@/types/api/getPokemonsType'

export interface PokeDetailDialogProps {
  modelValue: boolean
  pokemon: PokemonDetail | null
}

export interface PokeDetailDialogEmits {
  (e: 'update:modelValue', value: boolean): void
}
