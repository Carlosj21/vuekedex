import type { PokemonStoreType } from '@/types/stores/pokemonStoreType'
import { pokemonApi } from '@/api/pokemonApi'

export const actions = {
  async loadMore(this: PokemonStoreType) {
    if (this.loading) return

    this.loading = true

    try {
      const response = await pokemonApi.getPokemons({
        limit: this.limit,
        offset: this.offset,
      })

      this.totalCount = response.count

      // Cargar detalles de los Pokémon
      const urls = response.results.map((p) => p.url)
      const newPokemons = await pokemonApi.loadPokemonDetails(urls)

      this.pokemons.push(...newPokemons)
      this.offset += this.limit
    } catch (error) {
      console.error('Error al cargar Pokémon:', error)
      throw error
    } finally {
      this.loading = false
    }
  },

  async loadPokemonNamesCache(this: PokemonStoreType) {
    if (this.namesCacheLoaded) return

    try {
      const response = await pokemonApi.getPokemonNamesCache()
      this.pokemonNamesCache = response.results
      this.namesCacheLoaded = true
    } catch (error) {
      console.error('Error al cargar cache de nombres:', error)
    }
  },

  async searchPokemons(this: PokemonStoreType, term: string) {
    this.searchTerm = term

    if (!term || term.trim().length < 2) {
      this.filteredPokemons = []
      return
    }

    this.loading = true

    try {
      const normalizedTerm = term.toLowerCase().trim()

      // Estrategia 1: Búsqueda exacta
      try {
        const exactMatch = await pokemonApi.getPokemonByName({ name: normalizedTerm })
        this.filteredPokemons = [exactMatch]
        return
      } catch {
        // Aqui contianuariamos con búsqueda parcial pero pokeapi no es compatible con busquedas parciales
      }

      // Estrategia 2: Búsqueda parcial
      await this.loadPokemonNamesCache()

      const matches = this.pokemonNamesCache
        .filter((pokemon) => pokemon.name.includes(normalizedTerm))
        .slice(0, 30)

      if (matches.length === 0) {
        this.filteredPokemons = []
        return
      }

      const urls = matches.map((p) => p.url)
      const details = await pokemonApi.loadPokemonDetails(urls)

      this.filteredPokemons = details.sort((a, b) => a.id - b.id)
    } catch (error) {
      console.error('Error en búsqueda:', error)
      this.filteredPokemons = []
    } finally {
      this.loading = false
    }
  },

  clearSearch(this: PokemonStoreType) {
    this.searchTerm = ''
    this.filteredPokemons = []
  },

  resetStore(this: PokemonStoreType) {
    this.pokemons = []
    this.filteredPokemons = []
    this.searchTerm = ''
    this.loading = false
    this.offset = 0
    this.totalCount = 0
  },
}
