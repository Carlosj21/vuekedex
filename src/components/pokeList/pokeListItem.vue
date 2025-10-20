<template>
  <v-list-item>
    <v-list-item-title>POKEMON NAME</v-list-item-title>
    <template v-slot:append>
      <pokeFavoriteBtn @hover="handleHover" @toggle-value="handleToggleValue" :value="dummyBool" />
    </template>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import pokeFavoriteBtn from '@/components/pokeFavoriteBtn/pokeFavoriteBtn.vue';

const dummyBool = ref(true);

function handleToggleValue(val: boolean) {
  dummyBool.value = val;
}

function handleHover() {
  console.log('hover')
}

watch(
  dummyBool,
  (newVal, oldVal) => {
    console.log('Change detected:', newVal, oldVal);
  },
  { deep: true }
);

</script>
