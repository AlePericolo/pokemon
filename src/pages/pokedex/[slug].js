import React from 'react';
import { isNil } from 'lodash';

import Title from "@/components/ui/title";
import Pokecard from "@/components/card/pokecard"
import { FaRegistered } from 'react-icons/fa'

import { fetchPokemonByPokedex } from "@/api/rest";
import { getLabel } from '@/utils/utils'

export async function getServerSideProps({ params }) {
    const data = await fetchPokemonByPokedex(params.slug)

    return {
        props: { data },
    }
}

const Pokemons = ({ data }) => {

    if (isNil(data)) return null;
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
                {(data.pokemon_entries || []).map((e, index) => {
                    return (
                        <Pokecard key={index} name={e.pokemon_species.name} />
                    )
                })}
            </div>
        </>
    )


}

export default Pokemons;