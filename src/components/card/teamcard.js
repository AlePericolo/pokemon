import React from 'react';

import Placeholder from "@/components/ui/placeholder";
import NotFound from "@/components/ui/notfound";
import Error from "@/components/ui/error";
import Pokemon from "@/components/pokemon/pokemon";
import Info from '@/components/button/info'
import Remove from '@/components/button/remove'

import { getPokemon } from "@/api/rest";

import { isNil } from 'lodash';

const Teamcard = (props) => {

    const { data, error, load } = getPokemon(props.name)

    if (load) return <Placeholder />
    if (isNil(data)) return <NotFound />
    if (!isNil(error)) return <Error />

    const type = data.types[0].type.name;

    return (
        <div className="col-12 col-md-6 col-lg-4 my-4">
            <div className="pokemon">
                <div className={`card bg-${type}`}>
                    <Pokemon pokemon={data} type={type} />
                    <div className="text-center">
                        <Info name={data.name} />
                        <Remove name={data.name} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Teamcard;