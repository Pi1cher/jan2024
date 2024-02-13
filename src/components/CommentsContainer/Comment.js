import {useNavigate} from "react-router-dom";


const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment;

    const navigate = useNavigate();

    return (
        <div>
            <hr/>
            <div>PostId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={() => navigate('/post', {state: {postId}})}>Show Post</button>
            <hr/>

        </div>
    );
};

export {Comment};