import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getPokemon } from "@/api/rest";

import Pokemon from "@/components/pokemon/pokemon";
import Info from '@/components/button/info'
import Remove from '@/components/button/remove'

const Team = () => {

    const { team } = useSelector(state => state.app.pokemon)
    const [pokemonTeam, setPokemonTeam] = useState([])

    useEffect(() => {
        async function fetch() {
            const app = []
            for (let p of team) {
                const response = await getPokemon(p)
                app.push({
                    data: response,
                    type: response.types[0].type.name
                })
            }
            setPokemonTeam(app)
        }

        fetch()
    }, [team])

    const renderTeam = () => {
        if (pokemonTeam.length === 0) {
            return (
                <div className="w-100 text-center my-5">
                    <blockquote className="blockquote">
                        <p className="mb-0">Don't go into the tall grass it could be dangerous!</p>
                        <span className="blockquote-footer"> <cite title="Source Title">Prof. OAK</cite></span>
                    </blockquote>
                </div>
            )
        }
    }

    return (
        <>
            <h1 className="text-center">Your Team:</h1>
            <div className="row">
                {renderTeam()}
                {pokemonTeam.map(p => {
                    return (
                        <div className="col-12 col-md-6 col-lg-4 my-4" key={p.data.id}>
                            <div className="pokemon">
                                <div className={`card bg-${p.type}`}>
                                    <Pokemon pokemon={p.data} type={p.type} />
                                    <div className="text-center">
                                        <Info name={p.data.name} />
                                        <Remove name={p.data.name} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Team;