import {useEffect, useState} from "react";
import {redirect, useLocation, useNavigate} from "react-router-dom";

import {postService} from "../../services/postService";

const Post = () => {

    const [post, setPost] = useState([]);

    const {state:{postId}} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        postService.getPostById(postId).then(({data}) => setPost(data))
    }, [])

    const {userId, id, title, body} = post;

    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => navigate('/comments')}>Back</button>
        </div>
    );
};


export {Post};