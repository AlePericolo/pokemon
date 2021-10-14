import React from 'react';
import { isNil } from 'lodash';

import { fetchPokedex } from "@/api/rest";

import Pokedexcard from "@/components/pokedexcard"

export async function getServerSideProps() {
    const data = await fetchPokedex()

    return {
        props: { data },
    }
}

const Pokedex = ({ data }) => {

    if (isNil(data)) return null;

    return (
        <div className="row">
            {(data.results || []).map((e, index) => {
                return (
                    <Pokedexcard key={index} name={e.name} />
                )
            })}
        </div>
    )
}

export default Pokedex;