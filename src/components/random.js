import React from 'react';
import { useRouter } from 'next/router';
import { FaRandom } from 'react-icons/fa'

const Random = () => {

    const router = useRouter()

    const randomPokemonid = () => {
        const id = Math.floor((Math.random() * 898) + 1);
        router.push({
            pathname: `/pokemon/${id}`
        })
    }

    return (
        <button className="btn btn-lg btn-light text-danger mx-1"
            onClick={() => randomPokemonid()}>
            <FaRandom />
        </button>
    )
}

export default Random;