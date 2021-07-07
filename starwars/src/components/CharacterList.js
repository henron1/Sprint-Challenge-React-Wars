import React from 'react';
import "./StarWars.css";

const Character = (props) => {
    return(
        <div className='characterMain'>
        {props.starwarsChars.map( character => {
            // console.log(props);
                return(
                    <div classname="file">
                        <div className="name"><p className="jedi-name">My name is: </p> {character.name}</div>
                        <div className="eye-color"><p className="eyes">My eye-color is: </p> {character.eye_color}</div>
                        <div className="birth-year"><p clasName="birthday">I was born in </p> {character.birth_year}</div>
                    </div> 
                   
                    
                     
                
                    
                );
            })}
        </div>
    )
}

export default Character;