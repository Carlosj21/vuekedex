import type getPokemonByNameOrIdType from '@/types/api/getPokemonByNameOrIdType'
import type { LoadPokemonsParams } from '@/types/api/getPokemonsType'
import { errorHandler } from '@/utils/errorHandler'
import axiosHelper from '@/api/helpers/axiosHelper'

const getPokemons = async ({ limit, offset }: LoadPokemonsParams) => {
  try {
    const limitString = limit ? `limit=${limit}` : ''
    const offsetString = offset ? `offset=${offset}` : ''
    const optionString = [limitString, offsetString].filter((str) => str.length).join('&')

    await axiosHelper({
      method: 'get',
      url: `${import.meta.env.VITE_POKEAPI_URL}/pokemon/${optionString.length ? '?' + optionString : ''}`,
    })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        throw error
      })
  } catch (error: unknown) {
    errorHandler(error)
  }
}

const getPokemonByNameOrId = async ({ name, id }: getPokemonByNameOrIdType) => {
  try {
    if (!!name && !!id) {
      throw new Error('Provide either name or id, not both.')
    }
    await axiosHelper({
      method: 'get',
      url: `${import.meta.env.VITE_POKEAPI_URL}/pokemon/${name || id}`,
    })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        throw error
      })
  } catch (error: unknown) {
    errorHandler(error)
  }
}

export default { getPokemons, getPokemonByNameOrId }
