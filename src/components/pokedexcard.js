import React, { useState, useEffect } from 'react';
import { isNil } from 'lodash';
import { useRouter } from 'next/router'

import { FaRegistered } from 'react-icons/fa'

import { getPokedex } from '@/api/rest';
import { getEnLabel } from '@/utils/utils'

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

    if (isNil(data)) return null;

    return (
        <div className="col-12 col-sm-4 col-lg-2 pokedex-card" role="button" onClick={() => router.push(`/pokedex/${data.name}`)}>
            <div className="card text-white bg-danger w-100">
                <div className="card-header text-center">
                    {getEnLabel(data.names, 'name')}
                    {data.is_main_series && <span className="text-warning float-right" title="Main series"><FaRegistered /></span>}
                </div>
                <div className="card-body bg-light text-dark">
                    <p className="card-text">{getEnLabel(data.descriptions, 'description')}</p>
                    <p className="card-text"><b>Total pokemon: </b>{data.pokemon_entries.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Pokedexcard;