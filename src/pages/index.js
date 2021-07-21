import React, { useState, useEffect } from 'react';
import Pokedex from '../components/pokedex';

const Home = () => {

    const [nav, setNav] = useState(1)

    const renderSection = () => {
        switch (nav) {
            case 1:
                return <h1 className="text-center">PokeApp {nav}</h1>;
            case 2:
                return null;
            case 3:
                return <Pokedex />
            case 4:
                return null;
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <div className={`nav-link ${nav === 1 ? 'active' : ''}`} onClick={() => setNav(1)}>Home</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${nav === 2 ? 'active' : ''}`} onClick={() => setNav(2)}>Sex</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${nav === 3 ? 'active' : ''}`} onClick={() => setNav(3)}>Pokedex</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${nav === 4 ? 'active' : ''}`} onClick={() => setNav(4)}>Search</div>
                        </li>
                    </ul>
                </div>
                <div className="col-12">
                    {renderSection()}
                </div>
            </div>
        </>
    )

}

export default Home;