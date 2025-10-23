<template>
  <v-app>
    <v-main class="main-app">
      <router-view />
    </v-main>
  </v-app>
</template>
<style scoped></style>
<script setup lang="ts">
import { onMounted } from 'vue'
import { usePokemonFavoriteStore } from '@/stores/favorites'

const favoriteStore = usePokemonFavoriteStore()

onMounted(() => {
  console.log('Inicializando favoritos...')
  favoriteStore.loadFavoritesFromLocalStorage()
  console.log('Favoritos cargados:', favoriteStore.favorites)
})
</script>
