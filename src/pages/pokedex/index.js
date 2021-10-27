import React from 'react';

import Title from "@/components/ui/title";
import Placeholder from "@/components/ui/placeholder";
import NotFound from "@/components/ui/notfound";
import Error from "@/components/ui/error";
import Pokedexcard from "@/components/card/pokedexcard";

import {fetchPokedex} from "@/api/rest";

import { isNil } from 'lodash';

const Pokedex = () => {

    const { data, error, load } = fetchPokedex()

    if(load) return <Placeholder />
    if (isNil(data)) return <NotFound />
    if (!isNil(error)) return <Error />

    return (
        <>
            <Title title="Pokedex" />
            <div className="row">
                {(data.results || []).map((e, index) => 
                    <Pokedexcard key={index} name={e.name} />
                )}
            </div>
        </>
    )
}

export default Pokedex;