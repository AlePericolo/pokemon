import React from "react";

import { getAbilities } from "@/api/rest";
import { getLabel } from "@/utils/utils";

import { isNil } from 'lodash'

const Abilities = (props) => {

    const { visible, abilities } = props
    const abilitiesInfo = []
    
    for (let a of abilities) {
        const { data } = getAbilities(a.ability.name)
        if (!isNil(data)) {
            abilitiesInfo.push({
                name: getLabel(data.names, 'name'),
                description: getLabel(data.effect_entries, 'effect')
            })
        }
    }

    return (
        <div className={visible ? 'd-block' : 'd-none'}>
            <div className="card text-white bg-danger w-100">
                <div className="card-header text-center">
                    Abilities:
                </div>
                <div className="card-body bg-light text-dark">
                    <div>
                        {(abilitiesInfo || []).map((a, i) => {
                            return (
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
