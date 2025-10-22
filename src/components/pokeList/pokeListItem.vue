<template>
  <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
    <v-container>
      <v-card class="mx-auto" :title="props.pokemon.name.toUpperCase()" link @click="handleClick">
        <template v-slot:append>
          <poke-favorite-btn @toggle-value="handleFavoriteValue" :value="pokemon.id" />
        </template>
      </v-card>
    </v-container>
  </v-lazy>
</template>

<script setup lang="ts">
import type { PokeListItemProps } from '@/types/components/pokeListItemPropsType'
import pokeFavoriteBtn from '@/components/pokeFavoriteBtn/pokeFavoriteBtn.vue';

const props = defineProps<PokeListItemProps>()

const emit = defineEmits<{
  (e: 'pokemonClick', pokemon: typeof props.pokemon): void
}>()

function handleFavoriteValue() {
  // llamamos action para guardar o eliminar de favoritos
}

function handleClick() {
  // abrir dialog con detalles del pokemon
  emit('pokemonClick', props.pokemon)
}

</script>
