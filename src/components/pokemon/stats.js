import React, { useState, useEffect } from "react";

import { getStats } from "@/api/rest";
import { getLabel } from "@/utils/utils";

const Stats = (props) => {

    const { visible, stats } = props
    const [statsInfo, setStatsInfo] = useState(null)

    useEffect(() => {
        async function fetch() {
            const app = []
            for(let s of stats){
                const response = await getStats(s.stat.name)
                const {names} = response
                app.push({
                    name: getLabel(names,'name'),
                    base_stat: s.base_stat,
                })
            }
            setStatsInfo(app)
        }

        fetch()
    }, [stats])

    return (
        <div className={visible ? 'd-block' : 'd-none'}>
            <div className="card text-white bg-danger w-100">
                <div className="card-header text-center">
                    Stats:
                </div>
                <div className="card-body bg-light text-dark">
                    <table className="table table-bordered">
                        <tbody>
                            {(statsInfo || []).map((s, i) => {
                                return (
                                    <tr key={i}>
                                        <th> {s.name} </th>
                                        <td className="text-center"> {s.base_stat} </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default Stats;
