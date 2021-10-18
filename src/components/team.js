import React from 'react';
import { useRouter } from 'next/router';
import { GiSchoolBag } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { isNil } from 'lodash';

const Favorite = () => {

    const router = useRouter()

    const { favorite } = useSelector(state => state.app.pokemon)

    return (
        <button className="btn btn-lg btn-light text-danger mx-1"
            onClick={() => router.push(`/pokemon/${favorite}`)}
            disabled={isNil(favorite)}
        >
            <GiSchoolBag />
        </button>
    )
}

export default Favorite;