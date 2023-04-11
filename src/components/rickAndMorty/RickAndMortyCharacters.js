import React from 'react';
import {characters} from "../../data/rickAndMortyCharacters.data";
import RickAndMortyCharacter from "./RickAndMortyCharacter";



const RickAndMortyCharacters = () => {

    return (
        <div>
            {characters.map(character =><RickAndMortyCharacter character={character} key={character.id}/>)}
        </div>
    );
};

export default RickAndMortyCharacters;