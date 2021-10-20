import React from 'react'
import useDimensions from 'react-cool-dimensions';
import Image from 'next/image'

const NotFound = (props) => {

    const { observe, width } = useDimensions();

    return (
        <div ref={observe}>
            <Image 
                src="/assets/images/missigno.png" 
                alt="Picture of something nice"
    layout="fill"
    objectFit="contain"
                />
        </div>
    )
}

export default NotFound