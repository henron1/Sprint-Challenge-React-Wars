import React from 'react';
import Character from './Character.js'

function CharacterList (props){
    return(
        <div>
            <div className='header'>
                 <h1>Here are some Star Wars Characters</h1>
            </div>

             {props.starwarsDataList.map(character => {
                return(
                    <Character 
                    character={character}
                    addNewCharacter={props.addNewCharacter}
                    // key={character.id}
                
                    />
                );
            })} }
        </div>
        
    );
}

export default CharacterList;