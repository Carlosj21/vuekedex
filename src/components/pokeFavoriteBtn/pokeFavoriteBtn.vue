<template>
  <v-btn variant="elevated" icon color="whiteSmoke" size="small" @click="toggleFavorite" :loading="loading">
    <v-img height="30" width="30" :src="isFavorite ? '/images/brightStar.svg' : '/images/dullStar.svg'" />
  </v-btn>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePokemonFavoriteStore } from '@/stores/favorites'
import type { PokemonDetail } from '@/types/api/getPokemonsType'

interface Props {
  pokemon?: PokemonDetail | null
}

const props = defineProps<Props>()
const favoriteStore = usePokemonFavoriteStore()
const loading = ref(false)

const pokemonId = computed(() => {
  return props.pokemon?.id
})

const isFavorite = computed(() => {
  if (!pokemonId.value) return false
  return favoriteStore.isFavorite(pokemonId.value)
})

const toggleFavorite = async () => {
  console.log('Toggle favorite called')
  console.log(props.pokemon)
  console.log(pokemonId.value)
  if (!props.pokemon || !pokemonId.value) return

  loading.value = true

  try {
    favoriteStore.toggleFavorite(props.pokemon)
  } catch (error) {
    console.error('Error al cambiar favorito:', error)
  } finally {
    loading.value = false
  }
}
</script>
