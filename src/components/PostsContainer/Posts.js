import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {Post} from "./Post";

const Posts = () => {

    const {state} = useLocation();
    const {userId} = state;

    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        userService.getPostsByUserId(userId).then(({data}) => setPosts(data))
    }, [])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};