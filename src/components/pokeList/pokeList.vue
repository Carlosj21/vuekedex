<template>
  <v-row class="poke-list pa-2">
    <v-col v-for="pokemon in props.pokemons" :key="pokemon.id" cols="12">
      <poke-list-item :pokemon="pokemon" @pokemon-click="handlePokemonClick" />
    </v-col>

    <!-- Loader centrado -->
    <v-col v-if="props.loading" cols="12" class="d-flex justify-center">
      <poke-loader size="sm" />
    </v-col>

    <!-- Mensaje cuando lista está vacía -->
    <v-col v-if="props.pokemons.length === 0 && !props.loading" cols="12" class="text-center">
      <p class="text-grey">No pokémons available please reload</p>
    </v-col>
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
