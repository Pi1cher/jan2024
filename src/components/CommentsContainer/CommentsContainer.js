import {useEffect, useState} from "react";
import {commentService} from "../../services/commentService";
import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";

const CommentsContainer = () => {
    
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => {
            setComments(data.filter(value => value.id >= (data.length - 50).toString()))
        })
    },[])

    return (
        <div style={{width: '45%'}}>
            <h2>Comments</h2>
            <CommentForm setComments={setComments}/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};