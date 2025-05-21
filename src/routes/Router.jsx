import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";

export const router = createBrowserRouter([
    {
        path : '/' ,
        Component : RootLayout,
        children : [
            {
                index : true ,
                Component : Home
            },
            {
                path:'/explore-gardeners',
                element : <div>explore</div>
            },
            {
                path : '/browser-tips',
                element : <div>browser</div>
            },
            {
                path : '/share-garden',
                element : <div>Share</div>
            },
            {
                path : '/my-tips',
                element : <div>my tips</div>
            }
        ]
    },
    {
        path : '/auth',
        Component : AuthLayout,
        children : [
            {
                path : '/auth/login',
                Component : Login
            },
            {
                path : '/auth/register',
                Component : Register
            }
        ]
    }
])