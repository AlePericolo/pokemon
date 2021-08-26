import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Nav = () => {
    const router = useRouter()

    const [nav, setNav] = useState(1)

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <div className={`nav-link ${nav === 1 ? 'active' : ''}`} role="button" onClick={() => {setNav(1); router.push('/')} }>Home</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${nav === 2 ? 'active' : ''}`} role="button" onClick={() => {setNav(2); router.push('/pokedex')}}>Pokedex</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${nav === 3 ? 'active' : ''}`} role="button" onClick={() => {setNav(3); router.push('/search')}}>Search</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;