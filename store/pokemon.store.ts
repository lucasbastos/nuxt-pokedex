import { defineStore } from "pinia";
import * as Service from '../services'

export type Pokemon = {
    id: number,
    name: string;
    url: string;
    types: string[];
    image: string;
}

const state = () => ({
    pokemons: [] as Pokemon[],
});
const getters = {
    getPokemonList(): Pokemon[] {
        return this.pokemons;
    }
};
const actions = {
    async getPokemonAll() {
        const response = await Service.getPokemonAll()
        const index = 0;

        response.results.forEach(async (pokemon) => {
            const types = await Service.getPokemonInfo(pokemon.name)
            const idUrl = pokemon.url.split('/')
            this.pokemons.push({
                id: +idUrl[6],
                name: pokemon.name,
                url: pokemon.url,
                types: types.types.map(type => type.type.name),
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idUrl[6]}.png`
            })
        })
    },
    async getPokemonInfo(name: string) {
        const response = await Service.getPokemonInfo(name)
        return response
    }
};



export const usePokemonStore = defineStore("pokemonStore", {state, getters, actions});