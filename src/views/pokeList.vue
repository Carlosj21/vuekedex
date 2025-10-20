<template>
  <Pokeloader v-if="loading" />
  <v-container v-else fluid class="fill-height">
    <v-row>
      <v-col cols="12" md="12" class="d-flex align-center justify-center">

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Pokeloader from '@/components/pokeLoader/pokeLoader.vue';

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 4000);

</script>
