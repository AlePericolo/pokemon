import React, { useState, useEffect } from 'react';
import { isNil } from 'lodash';
import { useRouter } from 'next/router'

import { getPokemon } from "@/api/rest";

const Pokecard = (props) => {

    const router = useRouter()

    const [data, setData] = useState(null)

    useEffect(() => {
        fetchData(props.name);
    }, [props.name]);

    const fetchData = async (name) => {
        const data = await getPokemon(name);
        setData(data);
    }

    const renderTypes = () => {
        return ((types || []).map((e, i) => {
            if (types.length === i + 1)
                return e.type.name
            return `${e.type.name} - `
        }))
    }

    if (isNil(data)) return null;

    const { id, name, sprites, types } = data;
    const type = data.types[0].type.name;

    return (
        <div className="col-12 col-md-4 col-lg-2 poke-card" onClick={() => router.push({ pathname: `/pokemon/${id}` })}>
            <div className="poke-container">
                <div className={`pokemon bg-${type}`}>
                    <div className="img-container">
                        <img src={sprites.other['official-artwork']['front_default']} alt={name} />
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

export default Pokecard;