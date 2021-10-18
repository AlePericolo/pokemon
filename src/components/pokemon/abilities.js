import React, { useState, useEffect } from "react";

import { getAbilities } from "@/api/rest";
import { getLabel } from "@/utils/utils";

const Abilities = (props) => {

    const { visible, abilities } = props
    const [abilitiesInfo, setAbilitiesInfo] = useState(null)

    useEffect(() => {
        async function fetch() {
            const app = []
            for(let a of abilities){
                const response = await getAbilities(a.ability.name)
                const {names, effect_entries} = response
                app.push({
                    name: getLabel(names,'name'),
                    description: getLabel(effect_entries,'effect')
                })
            }
            setAbilitiesInfo(app)
        }

        fetch()
    }, [abilities])
    
    return (
        <div className={visible ? 'd-block' : 'd-none'}>
            <div className="card text-white bg-danger w-100">
                <div className="card-header text-center">
                    Abilities:
                </div>
                <div className="card-body bg-light text-dark">
                    <div>
                        {(abilitiesInfo || []).map((a,i)=> {
                            return(
                                <div key={i} className="mt-2">
                                    <b className="text-capitalize mr-2">{a.name}:</b>
                                    {a.description}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Abilities;
