import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {useParams} from "react-router-dom";
import {Comment} from "./Comment";

const Comments = () => {

    const {id} = useParams();


    const [ comments, setComments ] = useState([]);


    useEffect(() => {
        postService.getCommentsByPostId(id).then(({data}) =>setComments(data))
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};