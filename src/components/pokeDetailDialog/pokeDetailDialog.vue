<template>
  <v-dialog v-model="dialogModel" max-width="600">
    <v-card class="mx-auto" max-width="344">
      <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>

      <v-card-title>
        Top western road trips
      </v-card-title>

      <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange-lighten-2" text="Explore"></v-btn>

        <v-spacer></v-spacer>

        <v-btn icon="mdi-chevron-down"></v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { PokeDetailDialogProps, PokeDetailDialogEmits } from '@/types/components/pokeDetailDialogPropsType.ts'

const props = defineProps<PokeDetailDialogProps>()
const emit = defineEmits<PokeDetailDialogEmits>()

const dialogModel = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})
</script>
