import { defineStore } from "pinia";
import * as Service from '../services'

const state = () => ({});
const getters = {};
const actions = {
    async getPokemonAll() {
        const response = await Service.getPokemonAll()
        return response.results
    }
};

export const usePokemonStore = defineStore("pokemonStore", {state, getters, actions});