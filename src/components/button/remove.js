import React from 'react';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { removeCatchedPokemon } from '@/store/actions'

import { FaTimes } from 'react-icons/fa'

const Remove = (props) => {

    const router = useRouter()
    const dispatch = useDispatch();

    const { name } = props

    const removePokemon = () => {
        dispatch(removeCatchedPokemon(name))
        router.push({pathname: `/team/`})
    }

    return (
        <button className="btn btn-lg btn-light text-danger mx-2"
            onClick={() => removePokemon()}>
            <FaTimes />
        </button>
    )
}

export default Remove;