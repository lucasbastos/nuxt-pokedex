<script setup lang="ts">
import { usePokemonStore } from '../store/pokemon.store'

export type Pokemon = {
    id: number;
    name: string;
    url: string;
    types: string[];
    image: string;
}
    const store = usePokemonStore()

const pokemonArray = ref([] as Pokemon[])

const pad = (num: number, size: number) => {
    let numStr = num.toString();
    while (numStr.length < size) numStr = "0" + num;
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numStr}.png`;
}

onMounted(async () => {
  await usePokemonStore().getPokemonAll()
  pokemonArray.value = store.getPokemonList.sort((a, b) => a.id - b.id)

})

</script>

<template>
  <div class="flex flex-row flex-wrap">
    <div class="flex flex-col justify-center items-center w-60 h-72 bg-zinc-300 border-4" v-for="pokemon in pokemonArray" :key="pokemon.id">
      <div class="flex flex-col" @click="">
        <img :src="pokemon.image" alt="">
        <NuxtLink class="first-letter:uppercase" :to="`/${pokemon.name}`">{{pokemon.name}}</NuxtLink>
        <div>
          <span v-for="types in pokemon.types">
            <span class="inline-block bg-color-gray-light rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 first-letter:uppercase" :class="`background-color-${types}`">{{types}}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
//https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png

<style>
.background-color-bug {
    background: -webkit-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
    background: -ms-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
    background: -moz-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
    background: -o-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
    background: linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
    background-color: #729f3f;
    color: #fff
}

.background-color-dark {
    background: -webkit-linear-gradient(180deg, #707070 50%, #707070 50%);
    background: -ms-linear-gradient(180deg, #707070 50%, #707070 50%);
    background: -moz-linear-gradient(180deg, #707070 50%, #707070 50%);
    background: -o-linear-gradient(180deg, #707070 50%, #707070 50%);
    background: linear-gradient(180deg, #707070 50%, #707070 50%);
    background-color: #707070;
    color: #fff
}

.background-color-dragon {
    background: -webkit-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background: -ms-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background: -moz-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background: -o-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background-color: #53a4cf;
    color: #fff
}

.background-color-electric {
    background: -webkit-linear-gradient(180deg, #eed535 50%, #eed535 50%);
    background: -ms-linear-gradient(180deg, #eed535 50%, #eed535 50%);
    background: -moz-linear-gradient(180deg, #eed535 50%, #eed535 50%);
    background: -o-linear-gradient(180deg, #eed535 50%, #eed535 50%);
    background: linear-gradient(180deg, #eed535 50%, #eed535 50%);
    background-color: #eed535;
    color: #212121
}

.background-color-fairy {
    background: -webkit-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
    background: -ms-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
    background: -moz-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
    background: -o-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
    background: linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
    background-color: #fdb9e9;
    color: #212121
}

.background-color-fighting {
    background: -webkit-linear-gradient(180deg, #d56723 50%, #d56723 50%);
    background: -ms-linear-gradient(180deg, #d56723 50%, #d56723 50%);
    background: -moz-linear-gradient(180deg, #d56723 50%, #d56723 50%);
    background: -o-linear-gradient(180deg, #d56723 50%, #d56723 50%);
    background: linear-gradient(180deg, #d56723 50%, #d56723 50%);
    background-color: #d56723;
    color: #fff
}

.background-color-fire {
    background: -webkit-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
    background: -ms-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
    background: -moz-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
    background: -o-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
    background: linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
    background-color: #fd7d24;
    color: #fff
}

.background-color-flying {
    background: -webkit-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background: -ms-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background: -moz-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background: -o-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background-color: #3dc7ef;
    color: #212121
}

.background-color-ghost {
    background: -webkit-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
    background: -ms-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
    background: -moz-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
    background: -o-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
    background: linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
    background-color: #7b62a3;
    color: #fff
}

.background-color-grass {
    background: -webkit-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
    background: -ms-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
    background: -moz-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
    background: -o-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
    background: linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
    background-color: #9bcc50;
    color: #212121
}

.background-color-ground {
    background: -webkit-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background: -ms-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background: -moz-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background: -o-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background-color: #f7de3f;
    color: #212121
}

.background-color-ice {
    background: -webkit-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
    background: -ms-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
    background: -moz-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
    background: -o-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
    background: linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
    background-color: #51c4e7;
    color: #212121
}

.background-color-normal {
    background: -webkit-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
    background: -ms-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
    background: -moz-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
    background: -o-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
    background: linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
    background-color: #a4acaf;
    color: #212121
}

.background-color-poison {
    background: -webkit-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
    background: -ms-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
    background: -moz-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
    background: -o-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
    background: linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
    background-color: #b97fc9;
    color: #fff
}

.background-color-psychic {
    background: -webkit-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
    background: -ms-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
    background: -moz-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
    background: -o-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
    background: linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
    background-color: #f366b9;
    color: #fff
}

.background-color-rock {
    background: -webkit-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
    background: -ms-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
    background: -moz-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
    background: -o-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
    background: linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
    background-color: #a38c21;
    color: #fff
}

.background-color-steel {
    background: -webkit-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
    background: -ms-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
    background: -moz-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
    background: -o-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
    background: linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
    background-color: #9eb7b8;
    color: #212121
}

.background-color-water {
    background: -webkit-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
    background: -ms-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
    background: -moz-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
    background: -o-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
    background: linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
    background-color: #4592c4;
    color: #fff
}

</style>