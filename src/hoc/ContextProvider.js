import {createContext, useState} from "react";

const Context = createContext(null)

const ContextProvider = ({children}) => {

    const [charactersLinks, setCharactersLinks] = useState([]);
    const [chapterName, setChapterName] = useState('');

    const charactersSetter = (characters) =>{
        setCharactersLinks(characters)
    }
    const chapterNameSetter = (chapterName) =>{
        setChapterName(chapterName)
    }

    return (
        <Context.Provider value={{charactersLinks, charactersSetter, chapterName, chapterNameSetter}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};