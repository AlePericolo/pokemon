import React, { useState, useEffect } from 'react';
import Pokedex from '../components/pokedex';

const Home = () => {

    const [nav, setNav] = useState(1)

    const renderSection = () => {
        switch (nav) {
            case 1:
                return <h1 className="text-center">PokeApp {nav}</h1>;
            case 2:
                return <Pokedex />;
            case 3:
                return null;
            case 4:
                return null;
        }
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <div className={`nav-link ${nav === 1 ? 'active' : ''}`} role="button" onClick={() => setNav(1)}>Home</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${nav === 2 ? 'active' : ''}`} role="button" onClick={() => setNav(2)}>Pokedex</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${nav === 3 ? 'active' : ''}`} role="button" onClick={() => setNav(3)}>Search</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${nav === 4 ? 'active' : ''}`} role="button" onClick={() => setNav(4)}>Sex</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {renderSection()}
                </div>
            </div>
        </>
    )

}

export default Home;