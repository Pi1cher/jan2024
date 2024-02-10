import {useState} from "react";
import {UserContainer} from "./components/UsersContainer/UserContainer";
import css from "./App.module.css"
import {CommentsContainer} from "./components/CommentsContainer/CommentsContainer";

const App = () => {


    return (
        <div className={css.App}>
            <UserContainer/>
            <CommentsContainer/>
        </div>
    );
};


export {App};