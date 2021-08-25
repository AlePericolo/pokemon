import React from 'react';
import { useRouter } from 'next/router';
import { CgPokemon } from "react-icons/cg";
import Random from '../components/random';
import Favorite from '../components/favorite';

const Header = () => {

    const router = useRouter()

    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-3 offset-sm-1 m-auto text-center text-sm-left p-sm-2">
                        <CgPokemon />PokèApp
                    </div>
                    <div className="col-6 col-sm-4 text-center">
                        <img className="img-responsive p-sm-3" src="/assets/images/logo.png" role="button" onClick={() => router.push('/')} />
                    </div>
                    <div className="col-6 col-sm-3 m-auto text-right p-sm-2">
                        <Random />
                        <Favorite />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;