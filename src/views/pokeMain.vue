<template>
  <poke-loader v-if="loading" size="xl" />
  <v-container v-else>
    <!-- Buscador de pokémons -->
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" md="10" sm="10" xs="12" align-self="center">
        <poke-search-bar v-model="pokemonStore.searchTerm" :loading="pokemonStore.loading" @search="handleSearch" />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <!-- Lista de pokémons -->
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" md="10" sm="10" xs="12" align-self="center">
        <poke-list :pokemons="displayedList" :loading="pokemonStore.loading" @pokemon-click="openPokemonDetail" />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <!-- Botón de "Show more pokémons" -->
    <v-row v-if="!pokemonStore.isSearching && viewMode === 'all'">
      <v-spacer></v-spacer>
      <v-col cols="12" md="10" sm="10" xs="12" align-self="center">
        <v-container>
          <div ref="observerTarget">
            <v-btn class="text-none" v-if="pokemonStore.hasMore && !pokemonStore.loading" @click="loadMore"
              color="primary" size="large" block>
              Show more pokémons
            </v-btn>
          </div>
        </v-container>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <!-- Mensaje de búsqueda -->
    <v-row v-if="pokemonStore.isSearching">
      <v-col cols="12" class="text-center">
        <p v-if="!pokemonStore.loading && pokemonStore.filteredPokemons.length === 0" class="text-grey">
          No results for "{{ pokemonStore.searchTerm }}"
        </p>
        <p v-else-if="!pokemonStore.loading" class="text-grey">
          {{ pokemonStore.filteredPokemons.length }} resultado(s) encontrado(s)
        </p>
      </v-col>
    </v-row>

    <!-- Mensaje cuando no hay favoritos -->
    <v-row v-if="viewMode === 'favorites' && favoriteStore.favorites.length === 0">
      <v-col cols="12" class="text-center">
        <v-icon size="64" color="grey">mdi-star-outline</v-icon>
        <p class="text-h6 text-grey mt-4">No favorites yet</p>
      </v-col>
    </v-row>

    <!-- Footer con botones de navegación -->
    <v-footer app fixed class="text-center d-flex flex-column ga-2 py-4" elevation="10">
      <v-container>
        <v-row justify="center">
          <v-spacer></v-spacer>

          <v-col cols="12" sm="6" md="5">
            <v-btn :color="viewMode === 'all' ? 'primary' : 'grey'" size="large" rounded="xl" block class="text-none"
              @click="switchViewMode('all')">
              <template v-slot:prepend>
                <v-icon>mdi-format-list-bulleted-square</v-icon>
              </template>
              <b>All</b>
            </v-btn>
          </v-col>

          <v-col cols="12" sm="6" md="5">
            <v-btn :color="viewMode === 'favorites' ? 'primary' : 'grey'" size="large" rounded="xl" block
              class="text-none" @click="switchViewMode('favorites')">
              <template v-slot:prepend>
                <v-img height="20" width="20" :src="whiteStar" />
              </template>
              <b>Favorites ({{ favoriteStore.favoritesCount }})</b>
            </v-btn>
          </v-col>

          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-footer>
  </v-container>

  <!-- Diálogo de detalle -->
  <poke-detail-dialog v-model="showDialog" :pokemon="selectedPokemon" />
</template>

<script setup lang="ts">
import type { PokemonDetail } from '@/types/api/getPokemonsType'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import pokeLoader from '@/components/pokeLoader/pokeLoader.vue'
import { usePokemonStore } from '@/stores/pokemon'
import { usePokemonFavoriteStore } from '@/stores/favorites'
import pokeSearchBar from '@/components/pokeSearchBar/pokeSearchBar.vue'
import pokeList from '@/components/pokeList/pokeList.vue'
import pokeDetailDialog from '@/components/pokeDetailDialog/pokeDetailDialog.vue'
import whiteStar from '@/assets/images/whiteStar.svg'

const pokemonStore = usePokemonStore()
const favoriteStore = usePokemonFavoriteStore()
const observerTarget = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

// Controlar modo de vista
const viewMode = ref<'all' | 'favorites'>('all')

// Fake "cargando"
const loading = ref(true)
setTimeout(() => {
  loading.value = false
}, 2000)

const showDialog = ref(false)
const selectedPokemon = ref<PokemonDetail | null>(null)

// Lista a mostrar según el modo
const displayedList = computed(() => {
  if (viewMode.value === 'favorites') {
    return favoriteStore.favorites
  }
  return pokemonStore.displayedPokemons
})

onMounted(async () => {
  // Cargar favoritos desde localStorage
  favoriteStore.loadFavoritesFromLocalStorage()

  if (pokemonStore.pokemons.length === 0) {
    await pokemonStore.loadMore()
  }

  setupIntersectionObserver()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

const setupIntersectionObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      if (
        entries[0]?.isIntersecting &&
        pokemonStore.hasMore &&
        !pokemonStore.loading &&
        !pokemonStore.isSearching &&
        viewMode.value === 'all'
      ) {
        loadMore()
      }
    },
    { threshold: 0.5 }
  )

  if (observerTarget.value) {
    observer.observe(observerTarget.value)
  }
}

const loadMore = async () => {
  try {
    await pokemonStore.loadMore()
  } catch (error) {
    console.error('Error al cargar más Pokémon:', error)
  }
}

const handleSearch = async (term: string) => {
  try {
    switchViewMode('all')
    await pokemonStore.searchPokemons(term)
  } catch (error) {
    console.error('Error en búsqueda:', error)
  }
}

const openPokemonDetail = (pokemon: PokemonDetail) => {
  selectedPokemon.value = pokemon
  showDialog.value = true
}

const switchViewMode = (mode: 'all' | 'favorites') => {
  viewMode.value = mode
  // Limpiar búsqueda al cambiar de vista
  pokemonStore.clearSearch()
}
</script>
