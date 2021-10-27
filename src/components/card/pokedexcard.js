import React from 'react';
import { useRouter } from 'next/router'

import Placeholder from "@/components/ui/placeholder";
import NotFound from "@/components/ui/notfound";
import Error from "@/components/ui/error";

import { FaRegistered } from 'react-icons/fa'

import { getPokedex } from '@/api/rest';

import { getLabel } from '@/utils/utils'

import { isNil } from 'lodash';

const Pokedexcard = (props) => {

    const router = useRouter()

    const { data, error, load } = getPokedex(props.name)

    const renderContent = () => {
        if (load) return <Placeholder />
        if (isNil(data)) return <NotFound />
        if (!isNil(error)) return <Error />

        return (
            <div className="pokedex-card" role="button" onClick={() => router.push(`/pokedex/${data.name}`)}>
                <div className="card text-white bg-danger w-100">
                    <div className="card-header text-center">
                        {getLabel(data.names, 'name')}
                        {data.is_main_series && <span className="text-warning float-right" title="Main series"><FaRegistered /></span>}
                    </div>
                    <div className="card-body bg-light">
                        <p>{getLabel(data.descriptions, 'description')}</p>
                    </div>
                    <div className="card-footer">
                        <p><b>Total pokemon: </b>{data.pokemon_entries.length}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="col-12 col-sm-6 col-lg-3">
            {renderContent()}
        </div>
    )
}

export default Pokedexcard;