import React from 'react';
import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux';
import { catchPokemon } from '@/store/actions'

import { CgPokemon } from 'react-icons/cg';

const Catch = (props) => {

    const { name } = props

    const dispatch = useDispatch();
    const { team } = useSelector(state => state.app.pokemon)

    const handleCatch = () => {
        return team.length < 6 && team.indexOf(name) === -1 ? false : true
    }

    const handleTitle = () => {
        if (team.length > 5) return 'Yor Team is already complete!'
        if (team.indexOf(name) > -1) return `${name.toUpperCase()} is already in your team!`
        return `Catch ${name.toUpperCase()}!`
    }

    return (
        <button className="btn btn-light text-danger"
            disabled={handleCatch()}
            title={handleTitle()}
            onClick={() => { dispatch(catchPokemon(name)); }}>
            <CgPokemon size="25" />
        </button>
    )

}

export default Catch;