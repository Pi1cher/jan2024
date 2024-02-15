import {useNavigate} from "react-router-dom";
import {urls} from "../../constants/urls";

const Post = ({post}) => {

    const {id, title} = post;

    const navigate = useNavigate();

    return (
        <div>
            <div>{title}</div>
            <button onClick={() => navigate(urls.posts.byId(id))}>Post details</button>
            <hr/>
        </div>
    );
};

export {Post};