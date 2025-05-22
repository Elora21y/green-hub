import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";
import ExploreGardeners from "../pages/ExploreGardeners";
import ShareTips from "../pages/ShareTips";
import BrowserTips from "../pages/BrowserTips";
import PrivateRoute from "./PrivateRoute";
import TipDetails from "../pages/TipDetails";

export const router = createBrowserRouter([
    {
        path : '/' ,
        Component : RootLayout,
        children : [
            {
                index : true ,
                Component : Home,
                loader : () => fetch('http://localhost:2100/gardeners/active')
            },
            {
                path:'/explore-gardeners',
                Component : ExploreGardeners,
                loader : () => fetch('http://localhost:2100/gardeners')
            },
            {
                path : '/browser-tips',
                Component : BrowserTips,
                loader : () => fetch('http://localhost:2100/share-tips')
            },
            {
                path : '/tip-details/:id',
                element : <PrivateRoute><TipDetails/> </PrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:2100/share-tips/${params.id}`)
            },
            {
                path : '/share-garden',
                element : <PrivateRoute><ShareTips/></PrivateRoute>
            },
            {
                path : '/my-tips',
                element : <PrivateRoute><div>my tips</div></PrivateRoute>
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