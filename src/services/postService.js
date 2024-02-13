import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getPostById: (id) => apiService.get(urls.posts.byId(id))
}

export {
    postService
}