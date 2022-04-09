<script setup lang="ts">
import { usePokemonStore } from '../store/pokemon.store'

const pokemonArray = ref([] as any[])

onMounted(async () => {
  pokemonArray.value = await usePokemonStore().getPokemonAll()

})

</script>

<template>
  <div>
    <div v-for="pokemon, index in pokemonArray" :key="pokemon.name">
    <p>{{pokemon.name}}</p>
    <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`" alt="">
    </div>
  </div>
</template>