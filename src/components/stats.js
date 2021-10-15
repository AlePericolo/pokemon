import React from "react";

const Stats = (props) => {

    const { visible, stats } = props

    return (
        <div className={visible ? 'd-block' : 'd-none'}>
            <div className="card text-white bg-danger w-100">
                <div className="card-header text-center">
                    Stats:
                </div>
                <div className="card-body bg-light text-dark">
                    <table className="table table-bordered">
                        <tbody>
                            {stats.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <th> {element.stat.name} </th>
                                        <td> {element.base_stat} </td>
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
