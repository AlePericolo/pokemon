import React, { useState } from 'react';

import { getPokemon } from "@/api/rest";

import Pokemon from "@/components/pokemon/pokemon";
import Abilities from '@/components/pokemon/abilities'
import Stats from '@/components/pokemon/stats'
import Catch from '@/components/button/catch'
import Paginator from '@/components/ui/paginator'

import { FaEye, FaEyeSlash } from 'react-icons/fa'

export async function getServerSideProps(context) {

    const data = await getPokemon(context.params.id)

    return { props: { data } };
}

const PokemonDetail = ({ data }) => {

    const [showAbilities, setShowAbilities] = useState(false)
    const [showStats, setShowStats] = useState(false)
    const type = data.types[0].type.name;

    return (
        <div className="container-fluid">
            <div className="row my-2">
                <div className="col-12 col-md-3 col-lg-4 my-5 my-md-0 order-2 order-md-1">
                    <Abilities visible={showAbilities} abilities={data.abilities} />
                </div>
                <div className="col-12 col-md-6 col-lg-4 order-1 order-md-2">
                    <div className="pokemon">
                        <div className={`card bg-${type}`}>
                            <Pokemon pokemon={data} type={type} />
                            <div className="col-12 pt-4">
                                <button className="btn btn-light float-left"
                                    onClick={() => { setShowAbilities(!showAbilities); }}>
                                    {showAbilities ? <FaEyeSlash /> : <FaEye />}
                                    &nbsp;abilities
                                </button>
                                <button className="btn btn-light float-right"
                                    onClick={() => { setShowStats(!showStats); }}>
                                    {showStats ? <FaEyeSlash /> : <FaEye />}
                                    &nbsp;stats
                                </button>
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
                    <Paginator id={data.id} />
                </div>
            </div>
        </div>
    )

}

export default PokemonDetail;