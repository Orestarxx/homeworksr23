import React, {useEffect, useState} from 'react';


const RickAndMortyCharacters = () => {
    const {characters,setCharacters} = useState()
    useEffect(() =>{
    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(characters =>console.log())

    },[]);
    console.log(characters);
    return (
        <div>
            {}
        </div>
    );
};

export default RickAndMortyCharacters;