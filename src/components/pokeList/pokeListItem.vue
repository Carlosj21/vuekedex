<template>
  <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
    <v-card :title="props.pokemon.name.toUpperCase()" link @click="handleClick">
      <template v-slot:append>
        <div @click.stop>
          <poke-favorite-btn :pokemon="pokemon" />
        </div>
      </template>
    </v-card>
  </v-lazy>
</template>

<script setup lang="ts">
import type { PokeListItemProps } from '@/types/components/pokeListItemPropsType'
import pokeFavoriteBtn from '@/components/pokeFavoriteBtn/pokeFavoriteBtn.vue';

const props = defineProps<PokeListItemProps>()

const emit = defineEmits<{
  (e: 'pokemonClick', pokemon: typeof props.pokemon): void
}>()

function handleClick() {
  // abrir dialog con detalles del pokemon
  emit('pokemonClick', props.pokemon)
}

</script>
