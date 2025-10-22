<template>
  <v-container>
    <v-text-field :model-value="modelValue" @update:model-value="handleInput" label="Search Pokémon"
      placeholder="Pokémon Name (like: pikachu)" prepend-inner-icon="mdi-magnify" clearable :loading="loading"
      variant="solo" density="comfortable" />
  </v-container>
</template>
<script setup lang="ts">
import type { PokeSearchBarProps, PokeSearchBarEmits } from '@/types/components/pokeSearchBarPropsType'

defineProps<PokeSearchBarProps>()
const emit = defineEmits<PokeSearchBarEmits>()

let searchTimeout: ReturnType<typeof setTimeout> | null = null

const handleInput = (value: string) => {
  emit('update:modelValue', value)

  if (searchTimeout) {
    clearTimeout(searchTimeout)
  }

  searchTimeout = setTimeout(() => {
    emit('search', value)
  }, 400)
}
</script>
