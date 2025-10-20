<template>
  <v-btn @click="toggleValue()" variant="elevated" icon color="whiteSmoke">
    <v-img height="30" width="30" :src="props.value ? 'images/brightStar.svg' : 'images/dullStar.svg'" />
  </v-btn>
</template>
<script setup lang="ts">
import type { pokeFavoriteBtnPropsType } from '@/types/components/pokeFavoriteBtnPropsType';
import { ref } from 'vue';

const props = defineProps<pokeFavoriteBtnPropsType>();

const favoriteValue = ref(props.value);

const emit = defineEmits(['update:modelValue', 'toggleValue']);

function toggleValue() {
  favoriteValue.value = !favoriteValue.value;
  emit('toggleValue', favoriteValue.value);
}

</script>
