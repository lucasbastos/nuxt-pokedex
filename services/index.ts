import axios, { AxiosInstance } from "axios";


export const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}

})

export async function getPokemonAll() {
    const response = await instance.get('pokemon?limit=100&offset=0')
    return response.data
}

export async function getPokemonInfo(name: string) {
    const response = await instance.get(`pokemon/${name}`)
    return response.data
}