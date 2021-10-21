import React from 'react'
import Title from "@/components/ui/title";
import NotFound from '@/components/ui/notFound'

export default function Custom404() {
    return (
        <>
            <Title title="Error" />
            <h1 className="text-center">404 - Page Not Found</h1>
            <NotFound />
        </>
    )
}