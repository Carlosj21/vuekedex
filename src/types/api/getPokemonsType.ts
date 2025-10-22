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
  weight?: number // Peso en hectogramos (dividir por 10 para kg)
  height?: number // Altura en decímetros (dividir por 10 para metros)
}

export interface LoadPokemonsParams {
  limit: number
  offset: number
}
