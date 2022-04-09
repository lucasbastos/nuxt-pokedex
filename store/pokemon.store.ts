import { defineStore } from "pinia";
import * as Service from '../services'

export type Pokemon = {
    name: string;
    url: string;
    types: string[];
    image: string;
}

const state = () => ({
    pokemons: [] as Pokemon[],
});
const getters = {};
const actions = {
    async getPokemonAll() {
        const response = await Service.getPokemonAll()
        response.results.forEach(async (pokemon, index) => {
            const types = await Service.getPokemonInfo(pokemon.name)
            this.state.pokemons.push({
                name: pokemon.name,
                url: pokemon.url,
                types: [],
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
            })
        })
    },
};



export const usePokemonStore = defineStore("pokemonStore", {state, getters, actions});