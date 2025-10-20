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
  sprites?: {
    front_default: string
  }
}

export interface LoadPokemonsParams {
  limit: number
  offset: number
}
