import {useEffect, useState} from "react";

import css from './Character.module.css'
import {characterService} from "../../services/characterService";

const Character = ({characterId}) => {

    const [character, setCharacter] = useState({});


    useEffect(() => {
        characterService.getById(characterId).then(({data}) => setCharacter(data))
    }, [])

    return (
        <div className={css.Character}>
            <div>Id: {character.id}</div>
            <div>Name: {character.name}</div>
            <img src={character.image} alt={character.name}/>
        </div>
    );
};

export {Character};