const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'
const posts = '/posts'

const urls = {
    users: {
        base: users,
        byId: (id) => `${users}/${id}`,
        postsByUserId: (userId) => `${users}/${userId}/posts`
    },
    posts: {
        base: posts,
        byId: (id) => `${posts}/${id}`,
        commentsByPostId: (postId) => `${posts}/${postId}/comments`
    }
}

export {
    baseURL,
    urls
}
