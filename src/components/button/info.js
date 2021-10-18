import React from 'react';
import { useRouter } from 'next/router';
import { FaInfo } from 'react-icons/fa'

const Info = (props) => {

    const router = useRouter()
    const { name } = props

    const detailPokemon = () => {
        router.push({
            pathname: `/pokemon/${name}`
        })
    }

    return (
        <button className="btn btn-lg btn-light text-danger mx-2"
            onClick={() => detailPokemon()}>
            <FaInfo />
        </button>
    )
}

export default Info;