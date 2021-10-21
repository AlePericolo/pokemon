import React from 'react';

import Title from "@/components/ui/title";
import Pokedexcard from "@/components/card/pokedexcard"

import { fetchPokedex } from "@/api/rest";

import { isNil } from 'lodash';

export async function getServerSideProps() {
    const data = await fetchPokedex()

    return {
        props: { data },
    }
}

const Pokedex = ({ data }) => {

    if (isNil(data)) return null;

    return (
        <>
            <Title title="Pokedex" />
            <div className="row">
                {(data.results || []).map((e, index) => {
                    return (
                        <Pokedexcard key={index} name={e.name} />
                    )
                })}
            </div>
        </>
    )
}

export default Pokedex;