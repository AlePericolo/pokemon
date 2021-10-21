import React from "react";

import Title from "@/components/ui/title";
import Find from '@/components/form/find'

const Search = () => {

    return (
        <>
            <Title title="Search" />
            <div className="col-10 col-lg-6 offset-1 offset-lg-3">
                <div className="card m-sm-5">
                    <div className="card-body bg-light">
                        <Find />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search