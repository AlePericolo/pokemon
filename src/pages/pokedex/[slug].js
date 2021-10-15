import React from 'react';
import { isNil } from 'lodash';

import Pokecard from "@/components/pokecard"
import { FaRegistered } from 'react-icons/fa'

import { fetchPokemonByPokedex } from "@/api/rest";
import { getEnLabel } from '@/utils/utils'

export async function getServerSideProps({ params }) {
    const data = await fetchPokemonByPokedex(params.slug)

    return {
        props: { data },
    }
}

const Pokemons = ({ data }) => {

    if (isNil(data)) return null;

    console.log(data)
    return (
        <>
            <h2 className="text-center">
                {getEnLabel(data.names, 'name')}
                {data.is_main_series && <span className="text-warning ml-2" title="Main series"><FaRegistered /></span>}
            </h2>
            <p className="text-center">{getEnLabel(data.descriptions, 'description')}</p>
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