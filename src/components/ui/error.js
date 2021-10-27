import React from 'react';
import Image from 'next/image'

export const Error = () => {
    return (
        <div className="d-block w-100 text-center">
            <Image
                className="img-responsive p-3"
                src="/assets/images/pokecenter.png"
                alt='pokecenter'
                width={600}
                height={400}
            />
            <h3>Ops, something went wrong...</h3>
        </div>
    )
}

export default Error;