export interface PokemonSprites {
  front_default: string | null
  front_shiny: string | null
  front_female: string | null
  front_shiny_female: string | null
  back_default: string | null
  back_shiny: string | null
  back_female: string | null
  back_shiny_female: string | null
  other?: {
    dream_world?: {
      front_default: string | null
      front_female: string | null
    }
    'official-artwork'?: {
      front_default: string | null
      front_shiny: string | null
    }
    'official-artwork-shiny'?: {
      front_default: string | null
      front_shiny: string | null
    }
    showdown?: {
      front_default: string | null
      front_female: string | null
      front_shiny: string | null
      front_shiny_female: string | null
      back_default: string | null
      back_female: string | null
      back_shiny: string | null
      back_shiny_female: string | null
    }
    spin?: {
      front_default: string | null
      front_shiny: string | null
    }
  }
  versions?: {
    [generation: string]: {
      [version: string]: {
        front_default: string | null
        front_shiny: string | null
        front_female: string | null
        front_shiny_female: string | null
        back_default: string | null
        back_shiny: string | null
        back_female: string | null
        back_shiny_female: string | null
      }
    }
  }
}
