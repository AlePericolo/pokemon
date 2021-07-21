import React from 'react';
import { isNil } from 'lodash';

import { fetchPokemonByPokedex } from "../../api/rest";

import Pokecard from "../../components/pokecard"

export async function getServerSideProps({ params }) {
    const data = await fetchPokemonByPokedex(params.slug)

    return {
        props: { data },
    }
}

const Pokemons = ({data}) => {

        if (isNil(data)) return null;

        return (
            <div className="row">
                {(data.pokemon_entries || []).map((e, index) => {
                    return (
                        <Pokecard key={index} name={e.pokemon_species.name} />
                    )
                })}
            </div>
        )


}

export default Pokemons;