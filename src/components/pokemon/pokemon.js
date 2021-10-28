import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import { getSpecies } from "@/api/rest";

import Image from 'next/image'
import Loader from '@/components/ui/loader'
import { FaCircle } from 'react-icons/fa'

import { getLabel } from '@/utils/utils'

import { isNil } from 'lodash'

const Pokemon = (props) => {

    const { language } = useSelector(state => state.app.config)
    const { pokemon, type } = props

    const { data } = getSpecies(pokemon.species.name)

    const [description, setDescription] = useState(null)

    useEffect(() => {
        if(isNil(data)) return

        const { flavor_text_entries } = data
        setDescription(getLabel(flavor_text_entries, 'flavor_text'))
        
    }, [data, language])

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
                        height={300} 
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