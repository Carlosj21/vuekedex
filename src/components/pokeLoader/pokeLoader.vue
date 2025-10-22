<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <img class="spinning-image" src="/images/pokeball.svg" alt="pokeball" :height="imgSize" :width="imgSize">
  </v-container>
</template>
<script setup lang="ts">
import type { pokeLoaderPropsType } from '@/types/components/pokeLoaderPropsType.ts';
import { ref, computed } from 'vue';

const props = defineProps<pokeLoaderPropsType>();

const size = ref(props.size);

const imgSize = computed(() => size.value === 'xl' ? 106 : 53);
</script>
