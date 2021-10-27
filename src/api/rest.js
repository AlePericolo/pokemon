//API_ENDPOINT = 'https://pokeapi.co/api/v2'
import useSwr from 'swr';

const fetcher = async (url) => {
    try {
        const res = await fetch(url)
        return res.json()
    } catch (err) {
        return err
    }
    
}

export const fetchPokedex = () => {
    const { data, error } = useSwr(`${API_ENDPOINT}/pokedex/`, fetcher)

	return {
        data: data,
        error: error,
        load: !error && !data
    }
}

export const getPokedex = (param) => {
    const { data, error } = useSwr(`${API_ENDPOINT}/pokedex/${param}`, fetcher)

	return {
        data: data,
        error: error,
        load: !error && !data
    }
}

export const getPokemon = (param) => {
    const { data, error } = useSwr(`${API_ENDPOINT}/pokemon/${param}`, fetcher)

	return {
        data: data,
        error: error,
        load: !error && !data
    }
}

export const getSpecies = (param) => {
    const { data, error } = useSwr(`${API_ENDPOINT}/pokemon-species/${param}`, fetcher)

	return {
        data: data,
        error: error,
        load: !error && !data
    }
}

export const getAbilities = (param) => {
    const { data, error } = useSwr(`${API_ENDPOINT}/ability/${param}`, fetcher)

	return {
        data: data,
        error: error,
        load: !error && !data
    }
}

export const getStats = (param) => {
    const { data, error } = useSwr(`${API_ENDPOINT}/stat/${param}`, fetcher)

	return {
        data: data,
        error: error,
        load: !error && !data
    }
}
