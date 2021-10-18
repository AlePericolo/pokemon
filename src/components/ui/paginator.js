import React from "react";
import { useRouter } from 'next/router'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Paginator = (props) => {

    const router = useRouter()
    const {id} = props

    return (
        <div className="row">
            <div className="col text-center">
                <button className="btn btn-lg btn-danger m-2" disabled={id === 1} onClick={() => router.push({ pathname: `/pokemon/${id - 1}` })}><FaArrowLeft /></button>
                <button className="btn btn-lg btn-danger m-2" disabled={id === 898} onClick={() => router.push({ pathname: `/pokemon/${id + 1}` })}><FaArrowRight /></button>
            </div>
        </div>
    );
};


export default Paginator;
