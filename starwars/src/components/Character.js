import React from 'react';
import "./StarWars.css";

function Character(props) {
    return(
        <div className='characterMain'>
        {props.character.name}
        </div>
    )
}

export default Character;