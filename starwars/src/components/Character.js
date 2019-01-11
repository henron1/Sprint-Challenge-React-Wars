import React from 'react';
import Character from './Character.js'

function CharacterList (props){
    return(
        <div>
            <div className='header'>
                 <h1>Here are some Star Wars Characters</h1>
            </div>
            {props.character}
             
        </div>
        
    );
}

export default CharacterList;