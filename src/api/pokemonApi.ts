import type { PokemonRequestType, PokemonType } from '@/types/api/getPokemonByNameOrIdType'
import type {
  PokemonListResponse,
  PokemonDetail,
  LoadPokemonsParams,
} from '@/types/api/getPokemonsType'
import { errorHandler } from '@/utils/errorHandler'
import axiosHelper from '@/api/helpers/axiosHelper'
import constants from '@/constants/config.ts'

export const pokemonApi = {
  async getPokemons(params: LoadPokemonsParams): Promise<PokemonListResponse> {
    try {
      const { limit, offset } = params
      const limitString = limit ? `limit=${limit}` : ''
      const offsetString = offset ? `offset=${offset}` : ''
      const optionString = [limitString, offsetString].filter((str) => str.length).join('&')

      return await axiosHelper({
        method: 'get',
        url: `${constants.pokeapiUrl}/pokemon/${optionString.length ? '?' + optionString : ''}`,
      })
        .then(({ data }) => {
          return data
        })
        .catch((error) => {
          throw error
        })
    } catch (error: unknown) {
      errorHandler(error)
      throw error
    }
  },

  // Obtener detalles de un Pokémon por URL
  async getPokemonByUrl(url: string): Promise<PokemonDetail> {
    try {
      return await axiosHelper({
        method: 'get',
        url,
      })
        .then(({ data }) => {
          return {
            id: data.id,
            name: data.name,
            types: data.types.map((t: PokemonType) => t.type.name),
            sprites: data.sprites,
            weight: data.weight,
            height: data.height,
          }
        })
        .catch((error) => {
          throw error
        })
    } catch (error: unknown) {
      errorHandler(error)
      throw error
    }
  },

  // Obtener Pokémon por nombre exacto
  async getPokemonByName({ name, id }: PokemonRequestType): Promise<PokemonDetail> {
    try {
      if (!name && !id) {
        throw new Error('Provide either name or id, not both.')
      }

      return await axiosHelper({
        method: 'get',
        url: `${constants.pokeapiUrl}/pokemon/${name || id}`,
      })
        .then(({ data }) => {
          console.log(data)
          return {
            id: data.id,
            name: data.name,
            types: data.types.map((t: PokemonType) => t.type.name),
            sprites: data.sprites,
            weight: data.weight,
            height: data.height,
          }
        })
        .catch((error) => {
          throw error
        })
    } catch (error: unknown) {
      errorHandler(error)
      throw error
    }
  },

  // Cargar detalles de múltiples Pokémon en paralelo
  async loadPokemonDetails(urls: string[]): Promise<PokemonDetail[]> {
    try {
      const promises = urls.map((url) => this.getPokemonByUrl(url))
      const results = await Promise.allSettled(promises)

      return results
        .filter(
          (result): result is PromiseFulfilledResult<PokemonDetail> =>
            result.status === 'fulfilled',
        )
        .map((result) => result.value)
    } catch (error: unknown) {
      errorHandler(error)
      throw error
    }
  },

  // Obtener cache de nombres para búsqueda
  async getPokemonNamesCache(limit = 2000): Promise<PokemonListResponse> {
    try {
      return await axiosHelper({
        method: 'get',
        url: `${constants.pokeapiUrl}/pokemon?limit=${limit}&offset=0`,
      })
        .then(({ data }) => {
          console.log(data)
          return data
        })
        .catch((error) => {
          throw error
        })
    } catch (error: unknown) {
      errorHandler(error)
      throw error
    }
  },
}
