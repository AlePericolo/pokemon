import React, { useState, useEffect } from 'react';

import { getPokemonSpecies } from "@/api/rest";

import Image from 'next/image'
import Loader from '@/components/ui/loader'
import { FaCircle } from 'react-icons/fa'

import { getLabel } from '@/utils/utils'

import { isNil } from 'lodash'

const Pokemon = (props) => {

    const { pokemon, type } = props
    const [description, setDescription] = useState(null)

    useEffect(() => {
        async function fetch() {
            const response = await getPokemonSpecies(pokemon.species.name)
            const { flavor_text_entries } = response
            setDescription(getLabel(flavor_text_entries, 'flavor_text'))
        }

        fetch()
        setDescription(null)
    }, [pokemon])

    const renderDescription = () => {
        if (isNil(description)) return <Loader />

        return description
    }

    return (
        <div className="row">
            <div className="col-7">
                <span className="name">{pokemon.name}</span>
            </div>
            <div className={`col-5 text-right ${type}`}>
                <span className="mr-3">{type}</span>
                <FaCircle size={25} />
            </div>
            <div className="col-12">
                <div className="image-container">
                    <Image 
                        src={pokemon.sprites.other['official-artwork']['front_default']} 
                        alt={pokemon.name} 
                        width={250} 
                        height={250} 
                    />
                </div>
            </div>
            <div className="col-12 description">
                {renderDescription()}
            </div>
            <div className="col-12 border-top border-dark text-center py-5">
                <span className="mx-3"><span className="font-weight-bold">Height:</span> {pokemon.height} </span>
                <span className="mx-3"><span className="font-weight-bold">Weight:</span> {pokemon.weight} </span>
            </div>
        </div>
    )
}

export default Pokemon;