import React, { useState, useEffect } from 'react';

import { getPokemon, getPokemonSpecies } from "@/api/rest";

import { FaCircle } from 'react-icons/fa'

import Abilities from '@/components/abilities'
import Stats from '@/components/stats'
import Catch from '@/components/catch'
import Paginator from '@/components/paginator'
import Loader from '@/components/loader'

import { getLabel } from '@/utils/utils'

import { isNil } from 'lodash'

export async function getServerSideProps(context) {

    const data = await getPokemon(context.params.id)

    return { props: { data } };
}

const Pokemon = ({ data }) => {

    const [showAbilities, setShowAbilities] = useState(false)
    const [showStats, setShowStats] = useState(false)
    const [description, setDescription] = useState(null)
    const type = data.types[0].type.name;

    useEffect(() => {
        async function fetch() {
            const response = await getPokemonSpecies(data.species.name)
            const { flavor_text_entries } = response
            setDescription(getLabel(flavor_text_entries, 'flavor_text'))
        }

        fetch()
        setShowAbilities(false)
        setShowStats(false)
        setDescription(null)
    }, [data])

    const renderDescription = () => {
        if (isNil(description)) return <Loader />

        return description
    }

    return (
        <div className="container-fluid">
            <div className="row my-2">
                <div className="col-12 col-md-3 col-lg-4 my-5 my-md-0 order-2 order-md-1">
                    <Abilities visible={showAbilities} abilities={data.abilities} />
                </div>
                <div className="col-12 col-md-6 col-lg-4 order-1 order-md-2 pokemon">
                    <div className={`card bg-${type}`}>
                        <div className="row">
                            <div className="col-7">
                                <span className="name">{data.name}</span>
                            </div>
                            <div className={`col-5 text-right ${type}`}>
                                <span className="mr-3">{type}</span>
                                <FaCircle size={25} />
                            </div>
                            <div className="col-12">
                                <div className="image-container">
                                    <img src={data.sprites.other['official-artwork']['front_default']} alt={data.name} width="400" />
                                </div>
                            </div>
                            <div className="col-12 description">
                                {renderDescription()}
                            </div>
                            <div className="col-12 border-top border-dark text-center py-5">
                                <span className="mx-3"><span className="font-weight-bold">Height:</span> {data.height} </span>
                                <span className="mx-3"><span className="font-weight-bold">Weight:</span> {data.weight} </span>
                            </div>
                            <div className="col-12 pt-4">
                                <button className="btn btn-light float-left" onClick={() => { setShowAbilities(!showAbilities); }}>abilities</button>
                                <button className="btn btn-light float-right" onClick={() => { setShowStats(!showStats); }}>stats</button>
                            </div>
                            <div className="col-12 catch">
                                <Catch name={data.name} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-lg-4 my-5 my-md-0 order-3">
                    <Stats visible={showStats} stats={data.stats} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Paginator />
                </div>
            </div>
        </div>
    )

}

export default Pokemon;