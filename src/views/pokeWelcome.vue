<template>
  <v-container fluid class="fill-height">
    <v-row>
      <v-col cols="12" md="12" class="d-flex align-center justify-center">
        <v-img height="288" width="325" :src="pikachu"></v-img>
      </v-col>
      <v-col cols="12" md="12" class="d-flex align-center justify-center">
        <h1 class="title">Welcome to Pokédex</h1>
      </v-col>
      <v-col cols="12" md="12" class="d-flex align-center justify-center">
        <h2 class="subtitle text-center">
          The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon
          world.
        </h2>
      </v-col>
      <v-col cols="12" md="12" class="d-flex align-center justify-center">
        <v-btn @click="navigateToPokeMain()" color="primary" density="default" size="large" rounded="xl"
          class="text-none">
          <b>Get started</b>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import router from '@/router/index.ts';
import pikachu from '@/assets/images/pikachu.svg'

function navigateToPokeMain() {
  router.push({ name: 'PokeMain' });
}
</script>
