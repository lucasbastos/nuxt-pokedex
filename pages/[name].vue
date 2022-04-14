<script setup lang="ts">
import { usePokemonStore } from '../store/pokemon.store'
import statusBar from './status-bar.vue';
const route = useRoute()
const pokemon = route.params.name

const store = usePokemonStore()
const pokemonData = ref(null as any)

onMounted(async () => {
  pokemonData.value = await usePokemonStore().getPokemonInfo(pokemon as string)

})

</script>

<template>
    <div class="flex flex-col justify-center items-center w-full h-full border-4">
        <div class="flex flex-col" v-if="pokemonData">
        <img :src="pokemonData.image" alt="">
        <NuxtLink class="first-letter:uppercase" :to="`/${pokemonData.name}`">{{pokemonData.name}}</NuxtLink>
        <div>
            <span v-for="stats in pokemonData.stats">
            <span>{{stats.stat.name}}</span>
            <statusBar :status="stats.base_stat" class="my-3"/>
            </span>
        </div>
        </div>
    </div>
</template>