<template>
  <poke-list-item :pokemon="pokemon" v-for="pokemon in props.pokemons" :key="pokemon.id"
    @pokemon-click="handlePokemonClick" />
  <v-row v-if="props.loading">
    <poke-loader size="sm" />
  </v-row>
</template>

<script setup lang="ts">
import type { PokeListProps } from '@/types/components/pokeListPropsType'
import pokeListItem from './pokeListItem.vue'
import pokeLoader from '@/components/pokeLoader/pokeLoader.vue'
import type { PokemonDetail } from '@/types/api/getPokemonsType'

const props = defineProps<PokeListProps>()

const emit = defineEmits<{
  (e: 'pokemonClick', pokemon: PokemonDetail): void
}>()

const handlePokemonClick = (pokemon: PokemonDetail) => {
  emit('pokemonClick', pokemon)
}
</script>
