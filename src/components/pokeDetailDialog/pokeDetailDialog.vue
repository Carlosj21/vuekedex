<template>
  <v-container fluid>
    <v-row dense>
      <v-dialog v-model="dialogModel" :max-width="maxWidth">
        <v-card class="mx-auto" :width="maxWidth">
          <v-btn icon variant="plain" @click="closeDialog" class="close-btn" elevation="2" size="small">
            <v-img height="40" width="40" :src="closeBtn" />
          </v-btn>
          <v-img :src="grassbg" class="d-flex justify-center align-center" height="300px" alt="pokemon-sprite-bg" cover>
            <v-img :src="pokemonSprite" alt="pokemon-sprite" position="absolute" height="250px"></v-img>
          </v-img>

          <v-container>
            <v-col cols="12">
              <v-list density="compact">
                <v-list-item>
                  <v-list-item-title>
                    <b>Name:</b> {{ pokemonName }}
                  </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-title>
                    <b>Weight:</b> {{ pokemonWeight }}
                  </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-title>
                    <b>Height:</b> {{ pokemonHeight }}
                  </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-title>
                    <b>Types:</b> {{ pokemonTypes }}
                  </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
              </v-list>
            </v-col>

            <v-card-actions>
              <v-btn variant="flat" color="primary" size="large" rounded="xl" class="text-none"
                @click="copyToClipBoard()" min-width="230">
                <b>Share to my friends</b>
              </v-btn>
              <v-spacer></v-spacer>
              <poke-favorite-btn :pokemon="props.pokemon" />
            </v-card-actions>
          </v-container>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import type { PokeDetailDialogProps, PokeDetailDialogEmits } from '@/types/components/pokeDetailDialogPropsType.ts'
import pokeFavoriteBtn from '@/components/pokeFavoriteBtn/pokeFavoriteBtn.vue';
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import _ from 'lodash';
import grassbg from '@/assets/images/grassbg.svg'
import closeBtn from '@/assets/images/closeBtn.svg'


const props = defineProps<PokeDetailDialogProps>()
const emit = defineEmits<PokeDetailDialogEmits>()

const dialogModel = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})

const closeDialog = () => {
  emit('update:modelValue', false)
}

const pokemonName = computed(() => {
  return _.startCase(props.pokemon?.name || 'N/A')
})

const pokemonSprite = computed(() => {
  return props.pokemon?.sprites?.other?.['official-artwork']?.front_default ||
    props.pokemon?.sprites?.front_default ||
    'images/pokeball.svg'
})

const pokemonWeight = computed(() => {
  if (!props.pokemon?.weight) return 'N/A'
  return (props.pokemon.weight / 10).toFixed(1)
})

const pokemonHeight = computed(() => {
  if (!props.pokemon?.height) return 'N/A'
  return (props.pokemon.height / 10).toFixed(1)
})
const pokemonTypes = computed(() => {
  if (!props.pokemon?.types) return 'N/A'
  return props?.pokemon?.types.map(t => _.startCase(t)).join(' | ')
})

function copyToClipBoard() {
  const name = pokemonName.value
  const types = pokemonTypes.value
  const weight = pokemonWeight.value + ' kg'
  const height = pokemonHeight.value + ' m'
  const id = props?.pokemon?.id

  const infoString = `${name}, ID:${id}, Types:${types}, Weight:${weight}, Height:${height}`
  navigator.clipboard.writeText(infoString);
}

const { mdAndDown } = useDisplay()
const maxWidth = computed(() => {
  return mdAndDown.value ? '100%' : '600'
})

</script>
