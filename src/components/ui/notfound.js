import React from 'react'
import Image from 'next/image'

const NotFound = () => {

    return (
        <div className="d-block w-100 text-center">
            <Image 
                src="/assets/images/missigno.png" 
                alt="Missigno"
                width={600} 
                height={600}
            />
        </div>
    )
}

export default NotFound