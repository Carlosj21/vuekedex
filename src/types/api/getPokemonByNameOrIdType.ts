export interface PokemonRequestType {
  name?: string
  id?: number
}

export interface PokemonType {
  slot: number
  type: {
    name: string
    url: string
  }
}

export interface PokemonSprites {
  front_default: string
  front_shiny: string
  back_default: string
  back_shiny: string
  other?: {
    'official-artwork'?: {
      front_default: string
    }
  }
}

export interface PokemonStat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export interface PokemonAbility {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

export interface PokemonApiResponse {
  id: number
  name: string
  base_experience: number
  height: number
  weight: number
  types: PokemonType[]
  sprites: PokemonSprites
  stats: PokemonStat[]
  abilities: PokemonAbility[]
}
