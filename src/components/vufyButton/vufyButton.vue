<script setup lang="ts">
import type { vufyButtonPropsType } from './vufyButtonType.ts';

const props = withDefaults(defineProps<vufyButtonPropsType>(), {
  textContent: 'textContent',
  variant: 'flat',
  density: 'default',
  size: 'default',
  rounded: '0',
  color: 'primary',
});

</script>

<template>
  <v-btn :color="color" :variant="props.variant" :density="props.density" :size="props.size" :rounded="props.rounded">
    {{ props.textContent }}
  </v-btn>
</template>
