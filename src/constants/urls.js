const baseURL = "https://jsonplaceholder.typicode.com";

const todos = '/todos'
const comments = '/comments'
const albums = '/albums'
const posts = '/posts'

const urls = {
    todos: todos,
    comments: comments,
    albums: albums,
    posts: {
        byId: (id) => `${posts}/${id}`
    }
}

export {
    baseURL,
    urls
}