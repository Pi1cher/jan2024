import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => apiService.get(urls.posts.base),
    getById: (id) => apiService.get(urls.posts.byId(id)),
    getCommentsByPostId: (postId) => apiService.get(urls.posts.commentsByPostId(postId))
}

export {
    postService
}