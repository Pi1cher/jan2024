import {createBrowserRouter, Navigate, NavLink} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetails} from "./components/UsersContainer/UserDetails";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {userService} from "./services/userService";
import {PostsPage} from "./pages/PostsPage";
import {PostDatailsPage} from "./pages/PostDatailsPage";
import {CommentsPage} from "./pages/CommentsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UsersPage/>
            },
            {
                path: 'users/:id', element: <UserDetailsPage/>, loader: ({params: {id}}) => userService.getById(id), children: [{
                    path:'posts', element:<PostsPage/>, loader: ({params: {id}}) => userService.getById(id)
                }]
            },
            {
                path:'posts/:id', element: <PostDatailsPage/>, children:[{
                    path:'', element: <CommentsPage/>
                }]
            }
        ]
    }
])

export {
    router
}