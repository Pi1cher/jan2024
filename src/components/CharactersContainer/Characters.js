import {useAppContext} from "../../hooks/useAppContext";

import css from './Characters.module.css'
import {Character} from "./Character";

const Characters = () => {

    const {charactersLinks} = useAppContext();

    const charactersId = charactersLinks.map(charactersLink => {
        const splitString = charactersLink.split('/')
        return +splitString[splitString.length - 1 ]
    })


    return (
        <div className={css.Characters}>
            {charactersId.map(characterId => <Character key={characterId} characterId={characterId}/>)}
        </div>
    );
};

export {Characters};