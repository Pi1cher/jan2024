import css from "./Header.module.css"
import {useLocation, useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks/useAppContext";


const Header = () => {

    const navigate= useNavigate();
    const location = useLocation();

    const {chapterName, chapterNameSetter} = useAppContext();
    console.log(chapterName)

    return (
        <div className={css.Header}>
            <button disabled={location.pathname === '/episodes'} onClick={() => {
                navigate('/episodes');
                chapterNameSetter('');
            }
            }>Back</button>
            Rick & Morty
            <p>{chapterName}</p>
        </div>
    );
};

export {Header};