const Post = ({post, getPostDetails}) => {
    const {id, title} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => getPostDetails(post)}>Details</button>
        </div>
    );
};

export {Post};