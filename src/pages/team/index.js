import React from "react";
import { useSelector } from "react-redux";

import Title from "@/components/ui/title";
import Teamcard from "@/components/card/teamcard";

const Team = () => {

    const { team } = useSelector(state => state.app.pokemon)

    const renderContent = () => {
        if (team.length === 0) {
            return (
                <div className="col text-center my-5">
                    <blockquote className="blockquote">
                        <p className="mb-0">Don't go into the tall grass alone, it could be dangerous!</p>
                        <span className="blockquote-footer"> <cite title="Source Title">Prof. OAK</cite></span>
                    </blockquote>
                </div>
            )
        }
            
        return (team || []).map((e, index) => {
            return <Teamcard key={index} name={e} />
        })
        
    }

    return (
        <>
            <Title title="Team" />
            <h1 className="text-center">Your Team:</h1>
            <div className="row">
                {renderContent()}
            </div>
        </>
    )
}

export default Team;