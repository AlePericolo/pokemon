import React from 'react';
import { useRouter } from 'next/router';

import { fetchPokedex } from "../../api/rest";
import { isNil } from 'lodash';

export async function getServerSideProps() {
    const data = await fetchPokedex()

    return {
        props: { data },
    }
}

const Pokedex = ({ data }) => {
    const router = useRouter()
    
    if (isNil(data)) return null;

    return (
        <div className="row">
            {(data.results || []).map((e, index) => {
                return (<div key={index} className="col py-2" onClick={() => router.push(`/pokedex/${e.name}`)}>
                    <button className="btn btn-danger w-75">
                        {e.name}
                    </button>
                </div>)
            })}
        </div>
    )
}

export default Pokedex;