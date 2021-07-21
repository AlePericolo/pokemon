import React from 'react';
import { useRouter } from 'next/router';
import { CgPokemon } from "react-icons/cg";
import Random from '../components/random';
import Favorite from '../components/favorite';

const Header = () => {

    const router = useRouter()

    return (
        <div className="header">
            <div className="container-fluid bg-danger">
                <div className="row">
                    <div className="col-12 col-md-3 offset-md-1 text-light m-auto text-center text-md-left p-2">
                        <CgPokemon />PokèApp
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <img className="img-responsive p-3" src="/assets/images/logo.png" width="300" role="button" onClick={() => router.push('/')} />
                    </div>
                    <div className="col-12 col-md-3 m-auto text-center text-md-right p-2">
                        <Random />
                        <Favorite />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;