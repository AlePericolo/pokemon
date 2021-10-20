import React from 'react'
import NotFound from '@/components/ui/notFound'

export default function Custom404() {
    return (
        <>
            <h1 className="text-center">500 - Server-side error occurred</h1>
            <NotFound />
        </>
    )
}