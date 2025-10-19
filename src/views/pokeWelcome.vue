<script setup lang="ts">
import VufyButton from '../components/vufyButton/vufyButton.vue';

</script>

<template>
  <v-container fluid class="fill-height">
    <v-row>
      <v-col cols="12" md="12" class="d-flex align-center justify-center">
        <v-img height="288" width="325" src="images/pikachu.svg"></v-img>
      </v-col>
      <v-col cols="12" md="12" class="d-flex align-center justify-center">
        <h1 class="title">Welcome to Pokédex</h1>
      </v-col>
      <v-col cols="12" md="12" class="d-flex align-center justify-center">
        <h2 class="subtitle">
          The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon
          world.
        </h2>
      </v-col>
      <v-col cols="12" md="12" class="d-flex align-center justify-center">
        <VufyButton color="imperialRed" textContent="Get started" density="default" size="x-large" rounded="xl" />
      </v-col>
    </v-row>
  </v-container>
</template>
