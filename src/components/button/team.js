import React from 'react';
import { useRouter } from 'next/router';

import { GiSchoolBag } from 'react-icons/gi'

const Team = () => {

    const router = useRouter()

    return (
        <button className="btn btn-lg btn-light text-danger mx-1"
            onClick={() => router.push("/team/")}
        >
            <GiSchoolBag />
        </button>
    )
}

export default Team;