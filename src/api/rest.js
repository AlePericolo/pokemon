//API_ENDPOINT = 'https://pokeapi.co/api/v2'

export const fetchPokedex = async () => {
	const res = await fetch(`${API_ENDPOINT}/pokedex/`);
	const data = await res.json();
	return data;
}

export const fetchPokemonByPokedex = async (name) => {
	const res = await fetch(`${API_ENDPOINT}/pokedex/${name}`);
	const data = await res.json();
	return data;
}

export const getPokemon = async (param) => {
	const res = await fetch(`${API_ENDPOINT}/pokemon/${param}`);
	const data = await res.json();
	return data;
}
