import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/postService";

const PostDetails = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState({});

    useEffect(() => {
        postService.getById(id).then(({data}) => setPost(data))
    }, [])


    return (
        <div>
            <div>userId: {post.userId}</div>
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
            <button onClick={() => navigate(`/users/${post.userId}/posts`, {state: {userId: post.userId}})}>Back</button>
            <Outlet/>
        </div>
    );
};

export {PostDetails};