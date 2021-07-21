import React from "react";

const Abilities = (props) => {

    return (
        <div className={props.abilities? 'd-block' : 'd-none'}>
            <h4>Abilities:</h4>
            <ul>
            {props.data.abilities.map((element, index) => {
                return <li key={index}> {element.ability.name} </li>
            })}
            </ul>
        </div>
    )
};

export default Abilities;
