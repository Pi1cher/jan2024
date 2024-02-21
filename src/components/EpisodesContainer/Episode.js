import css from "./Episode.module.css"
import {Link} from "react-router-dom";
import {useAppContext} from "../../hooks/useAppContext";

const Episode = ({chapter}) => {

    let {charactersSetter, chapterNameSetter} = useAppContext();

    const {id, name, episode, characters} = chapter;


    return (
        <Link to={'/characters'} className={css.Episode} onClick={() => {
            charactersSetter(characters);
            chapterNameSetter(name)
        }}>
            <div>
                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>chapter: {episode}</p>
            </div>
        </Link>
    );
};

export {Episode};