import {Comment} from "./Comment";

const Comments = ({comments}) => {
    
    return (
        <div>
            <b><h3>Last 50 comments:</h3></b>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};