import React from 'react';
import { useRouter } from 'next/router'

import Placeholder from "@/components/ui/placeholder";
import NotFound from "@/components/ui/notfound";
import Error from "@/components/ui/error";
import Image from 'next/image'

import { getPokemon } from "@/api/rest";

import { isNil } from 'lodash';

const Pokemoncard = (props) => {

    const router = useRouter()

    const { data, error, load } = getPokemon(props.name)

    const renderTypes = () => {
        return ((data.types || []).map((e, i) => {
            if (data.types.length === i + 1)
                return e.type.name
            return `${e.type.name} - `
        }))
    }

    const renderContent = () => {
        if (load) return <Placeholder />
        if (isNil(data)) return <NotFound />
        if (!isNil(error)) return <Error />

        const { id, name, sprites } = data;
        const type = data.types[0].type.name;

        return (
            <div className="poke-card" onClick={() => router.push({ pathname: `/pokemon/${name}` })}>
            <div className="poke-container">
                <div className={`pokemon bg-${type}`}>
                    <div className="img-container">
                        <Image 
                            src={sprites.other['official-artwork']['front_default']} 
                            alt={name} 
                            width={100}
                            height={100}
                            />
                    </div>
                    <div className="info">
                        <span className="number">
                            {id.toString().padStart(3, '0')}
                        </span>
                        <h3 className="name">{name}</h3>
                        <small className="type">Type: <span>{renderTypes()}</span></small>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div className="col-12 col-md-4 col-lg-2">
            {renderContent()}
        </div>
    )
}

export default Pokemoncard;