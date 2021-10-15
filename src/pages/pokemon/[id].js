import React, {useState} from 'react';

import { getPokemon } from "@/api/rest";

import { useDispatch } from 'react-redux';
import { setFavoritePokemon } from "@/store/actions" 

import Abilities from "@/components/abilities"
import Stats from "@/components/stats"
import Paginator from "@/components/paginator"

export async function getServerSideProps(context) {

    const data = await getPokemon(context.params.id)

    return { props: { data } };
}

const Pokemon = ({ data }) => {

    const dispatch = useDispatch();

    const [abilities, setAbilities] = useState(false)
    const [stats, setStats] = useState(false)

    const type = data.types[0].type.name;
    
    return (
        <div className="container-fluid pokemon">
            <div className="row my-2">
                <div className="col-4">info</div>
                <div className="col-4">
                    <div className={`card ${type}`}>
                        <div className="row">
                            <div className="col-12">
                                <div className="image-container">
                                    <img src={data.sprites.other['official-artwork']['front_default']} alt={data.name} width="400"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-8">
                                <h2 className="font-weight-bold">
                                    <span className="text-capitalize">{data.name}</span>&nbsp;
                                    (#{data.order.toString().padStart(3, '0')})
                                </h2>
                                <p>
                                    <span className="font-weight-bold">Height:</span> {data.height} - 
                                    <span className="font-weight-bold">Weight:</span> {data.weight}
                                </p>
                                <button className="btn btn-light mx-1" onClick={() => {setAbilities(true); setStats(false);}}>Show abilities</button>
                                <button className="btn btn-light mx-1" onClick={() => {setAbilities(false); setStats(true);}}>Show stats</button>
                                <button className="btn btn-light mx-1" onClick={() => {dispatch(setFavoritePokemon(data.id)); }}>Set as favorite</button>
                                <div className="my-2">
                                    <Stats stats={stats} data={data}/>
                                    <Abilities abilities={abilities} data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">info</div>
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