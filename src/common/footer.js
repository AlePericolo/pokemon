import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { handleLanguage } from '@/store/actions'

import Image from 'next/image'

const Footer = () => {

    const { language } = useSelector(state => state.app.config)
    const dispatch = useDispatch();

    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        Gotta Catch'em All
                        <button className={`btn btn-light btn-sm mx-2 pt-2 ${language === 'en' ? 'active' : ''}`} onClick={() => dispatch(handleLanguage('en'))} >
                            <Image
                                src="/assets/images/eng.png"
                                width={20}
                                height={20}
                            />
                        </button>
                        <button className={`btn btn-light btn-sm mx-2 pt-2 ${language === 'it' ? 'active' : ''}`} onClick={() => dispatch(handleLanguage('it'))} >
                            <Image
                                src="/assets/images/ita.png"
                                width={20}
                                height={20}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;