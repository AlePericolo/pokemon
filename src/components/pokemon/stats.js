import React from "react";

import { getStats } from "@/api/rest";
import { getLabel } from "@/utils/utils";

import { isNil } from 'lodash'

const Stats = (props) => {

    const { visible, stats } = props
    const statsInfo = []

    for (let s of stats) {
        const { data } = getStats(s.stat.name)
        if (!isNil(data)) {
            statsInfo.push({
                name: getLabel(data.names, 'name'),
                base_stat: s.base_stat
            })
        }
    }

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
