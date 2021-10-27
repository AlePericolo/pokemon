import React from 'react';
import useSwr from 'swr';
import { useRouter } from 'next/router'

import Title from "@/components/ui/title";
import Placeholder from "@/components/ui/placeholder";
import Error from "@/components/ui/error";
import Pokemoncard from "@/components/card/pokemoncard";

import { FaRegistered } from 'react-icons/fa';

import { getLabel } from '@/utils/utils';

import { isNil } from 'lodash';

const fetcher = (url) => fetch(url).then((res) => res.json())

const Pokemons = () => {

    const router = useRouter()
    const { slug } = router.query
    const { data, error } = useSwr(`${API_ENDPOINT}/pokedex/${slug}`, fetcher)

    if (isNil(data)) return <Placeholder />
    if (!isNil(error)) return <Error />

    const name = getLabel(data.names, 'name')

    return (
        <>
            <Title title={`Pokedex - ${name}`} />
            <h2 className="text-center">
                {name}
                {data.is_main_series && <span className="text-warning ml-2" title="Main series"><FaRegistered /></span>}
            </h2>
            <p className="text-center">{getLabel(data.descriptions, 'description')}</p>
            <div className="row">
                {(data.pokemon_entries || []).map((e, index) =>
                    <Pokemoncard key={index} name={e.pokemon_species.name} />
                )}
            </div>
        </>
    )
}

export default Pokemons;