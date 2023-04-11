import React from 'react';

const RickAndMortyCharacter = ({character}) => {
    let {name,status,species,gender,image} = character;
    return (
        <div>
            <div>{name}</div>
            <div>{status}</div>
            <div>{species}</div>
            <div>{gender}</div>
            <img src={image} alt=""/>
        </div>
    );
};

export default RickAndMortyCharacter;