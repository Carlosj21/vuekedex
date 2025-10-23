<template>
  <v-container>

    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" md="10" sm="10" xs="12" align-self="center">
        <poke-search-bar :disabled="true" />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" md="6" class="text-center">
        <h1 class="text-h2 font-weight-bold my-6">Uh-oh!</h1>
        <h2 class="text-h5 text-grey mb-4">You look lost on your journey!</h2>
        <v-btn color="primary" size="large" rounded="xl" @click="goHome" class="text-none">
          Go back home
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import pokeSearchBar from '@/components/pokeSearchBar/pokeSearchBar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

</script>
