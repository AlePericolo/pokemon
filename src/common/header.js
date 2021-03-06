import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";

import Image from 'next/image'
import { CgPokemon } from "react-icons/cg";
import Random from '@/components/button/random';
import Team from '@/components/button/team';

const Header = () => {

    const router = useRouter()
    const { name } = useSelector(state => state.app.user)

    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-3 offset-sm-1 m-auto text-center text-sm-left p-sm-2">
                        <CgPokemon />PokèApp: {name}
                    </div>
                    <div className="col-6 col-sm-4 text-center">
                        <Image 
                            className="img-responsive p-sm-3" 
                            src="/assets/images/logo.png"
                            width={100}
                            height={50} 
                            role="button" 
                            onClick={() => router.push('/')} 
                        />
                    </div>
                    <div className="col-6 col-sm-3 m-auto text-right p-sm-2">
                        <Random />
                        <Team />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;