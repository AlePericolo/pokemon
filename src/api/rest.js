//API_ENDPOINT = 'https://pokeapi.co/api/v2'

import _ from 'lodash';

export const fetchPokedex = async () => {
	const res = await fetch(`${API_ENDPOINT}/pokedex/`);
	const data = await res.json();
	return data;
}

export const getPokedex = async (param) => {
	const res = await fetch(`${API_ENDPOINT}/pokedex/${param}`)
	const data = await res.json();
	return data;
}

export const fetchPokemonByPokedex = async (param) => {
	const res = await fetch(`${API_ENDPOINT}/pokedex/${param}`);
	const data = await res.json();
	return data;
}

export const getPokemon = async (param) => {
	const res = await fetch(`${API_ENDPOINT}/pokemon/${param}`);
	const data = await res.json();
	return data;
}

export const getPokemonSpecies = async (param) => {
	const res = await fetch(`${API_ENDPOINT}/pokemon-species/${param}`);
	const data = await res.json();
	return data;
}

export const getAbility = async (param) => {
	const res = await fetch(`${API_ENDPOINT}/ability/${param}`);
	const data = await res.json();
	return data;
}