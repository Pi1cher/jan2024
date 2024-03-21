import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MainPage} from "./pages";


const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'cars'}/>
            },
            {
                path: 'cars', element:<MainPage/>
            }
        ]
    }
])

export {
    router
}