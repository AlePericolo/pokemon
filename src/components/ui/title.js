import React from 'react';
import Head from 'next/head'

export default function Title(props) {
    return (
        <Head>
            <title>{props.title.charAt(0).toUpperCase() + props.title.slice(1) || 'Pokemon'}</title>
            <link rel="icon" href="/assets/icon/pokeball.ico" />
        </Head>
    )
}