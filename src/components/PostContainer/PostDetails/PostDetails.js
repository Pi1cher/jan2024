const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails;
    return (
        <div>
            <h3>PostDetails</h3>
            <div><b>userId</b>: {userId}</div>
            <div><b>id</b>: {id}</div>
            <div><b>title</b>: {title}</div>
            <div><b>body</b>: {body}</div>
        </div>
    );
};
    
export {PostDetails};