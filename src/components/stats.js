import React from "react";

const Stats = (props) => {

    return (
        <div className={props.stats? 'd-block' : 'd-none'}>
        <h4>Stats:</h4>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>name</th>
                    <th>qty</th>
                    <th>effort</th>
                </tr>
            </thead>
            <tbody>
                
                    {props.data.stats.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td> {element.stat.name} </td>
                                <td> {element.base_stat} </td>
                                <td> {element.effort} </td>
                            </tr>
                        )
                    })}
                
            </tbody>
        </table>
        </div>
    )
};

export default Stats;
