import React from 'react'
import Title from "@/components/ui/title";
import NotFound from '@/components/ui/notfound'

export default function Custom404() {
    return (
        <>
            <Title title="Error" />
            <h1 className="text-center">500 - Server-side error occurred</h1>
            <NotFound />
        </>
    )
}