<template>
  <pokeLoader v-if="loading" />
  <v-container v-else>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" md="10" sm="10" xs="12" align-self="center">
        <pokeSearchBar />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" md="10" sm="10" xs="12" align-self="center">
        <pokeList />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-footer app fixed class="text-center d-flex flex-column ga-2 py-4" elevation="10">
      <v-container>
        <v-row justify="center">
          <v-spacer></v-spacer>
          <v-col cols="3">
            <v-btn color="imperialRed" density="default" size="x-large" rounded="xl" block
              prepend-icon="mdi-format-list-bulleted-square" class="text-base">
              All
            </v-btn>
          </v-col>

          <v-col cols="3">
            <v-btn color="silver" density="default" size="x-large" rounded="xl" block prepend-icon="mdi-star"
              class="text-base">
              Favorites
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-footer>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import pokeLoader from '@/components/pokeLoader/pokeLoader.vue';
import pokeSearchBar from '@/components/pokeSearchBar/pokeSearchBar.vue';
import pokeList from '@/components/pokeList/pokeList.vue';

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 3000);

</script>
