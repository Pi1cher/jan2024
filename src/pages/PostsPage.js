import {useEffect} from "react";
import {userService} from "../services/userService";
import {Posts} from "../components/PostsContainer/Posts";

const PostsPage = () => {

    return (
        <div>
            <hr/>
            <Posts/>
        </div>
    );
};

export {PostsPage};