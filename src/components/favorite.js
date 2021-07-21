import React from 'react';
import { useRouter } from 'next/router';
import { FaAward } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { isNil } from 'lodash';

const Favorite = () => {

    const router = useRouter()

    const { favorite } = useSelector(state => state.app)

    return (
        <button className="btn btn-lg btn-light text-danger mx-1"
            onClick={() => router.push(`/pokemon/${favorite}`)}
            disabled={isNil(favorite)}
        >
            <FaAward />
        </button>
    )
}

export default Favorite;