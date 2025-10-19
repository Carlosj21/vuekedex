<script setup lang="ts">
import type { vufyButtonPropsType } from './vufyButtonType.ts';

const props = withDefaults(defineProps<vufyButtonPropsType>(), {
  textContent: '',
  variant: 'flat',
  density: 'default',
  size: 'default',
  rounded: '0',
  color: 'primary',
  prependIcon: '',
  prependColor: '',
  icon: false,
});

</script>

<template>
  <v-btn :icon="props.icon" :color="props.color" :variant="props.variant" :density="props.density" :size="props.size"
    :rounded="props.rounded" :prepend-icon="props.prependIcon" class="text-none">
    <b>
      {{ props.textContent }}
    </b>
  </v-btn>
</template>
