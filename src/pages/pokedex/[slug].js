import React from 'react';
import { isNil } from 'lodash';

import { fetchPokemonByPokedex } from "@/api/rest";

import Pokecard from "@/components/pokecard"
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
            <h2 className="text-center">{getEnLabel(data.names, 'name')}</h2>
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