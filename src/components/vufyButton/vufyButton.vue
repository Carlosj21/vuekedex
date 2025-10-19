<script setup lang="ts">
import type { vufyButtonPropsType } from './vufyButton.ts';

const props = withDefaults(defineProps<vufyButtonPropsType>(), {
  textContent: 'textContent',
  variant: 'flat',
  density: 'default',
  size: 'default',
  rounded: '0',
});

</script>

<template>
  <v-btn color="primary" :variant="props.variant" :density="props.density" :size="props.size" :rounded="props.rounded">
    {{ props.textContent }}
  </v-btn>
</template>
