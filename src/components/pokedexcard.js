import React, { useState, useEffect } from 'react';
import { isNil, find } from 'lodash';
import { useRouter } from 'next/router'

import { FaMobileAlt } from 'react-icons/fa'

import { getPokedex } from "../api/rest";

const Pokedexcard = (props) => {

    const router = useRouter()

    const [data, setData] = useState(null)

    useEffect(() => {
        fetchData(props.name);
    }, [props.name]);

    const fetchData = async (name) => {
        const data = await getPokedex(name);
        setData(data);
    }

    const renderDescription = (descriptions) => {
        const app = find(descriptions, function (o) {
            if (o.language.name === "en") return o
        })
        return app.description
    }

    if (isNil(data)) return null;

    return (
        <div className="col-12 col-sm-4 col-lg-2 pokedex-card" onClick={() => router.push(`/pokedex/${data.name}`)}>
            <div className="card text-white bg-danger w-100">
                <div className="card-header text-center">
                    {data.name}
                    <button className="btn btn-sm btn-light float-right" onClick={() => router.push(`/pokedex/${e.name}`)}>
                        <FaMobileAlt />
                    </button>
                </div>
                <div className="card-body bg-light text-dark">
                    <p className="card-text">{renderDescription(data.descriptions)}</p>
                    <p className="card-text"><b>Total pokemon: </b>{data.pokemon_entries.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Pokedexcard;