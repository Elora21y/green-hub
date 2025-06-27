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
import MyTips from "../pages/MyTips";
import UpdateTips from "../pages/UpdateTips";
import Loading from "../components/Loading";
import Error from "../pages/Error";
import AboutUs from "../pages/AboutUs";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../dashboard/DashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://green-hub-server.vercel.app/gardeners/active"),
      },
      {
        path: "/explore-gardeners",
        Component: ExploreGardeners,
        loader: () => fetch("https://green-hub-server.vercel.app/gardeners"),
      },
      {
        path: "/browser-tips",
        Component: BrowserTips,
        loader: () =>
          fetch("https://green-hub-server.vercel.app/share-tips/public"),
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/tip-details/:id",
        element: (
          <PrivateRoute>
            <TipDetails />{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://green-hub-server.vercel.app/share-tips/public/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      } ,
      {
        path: "browser-tips",
        Component: BrowserTips,
        loader: () =>
          fetch("https://green-hub-server.vercel.app/share-tips/public"),
      },
      
      {
        path: "share-garden",
        element: (
          <PrivateRoute>
            <ShareTips />
          </PrivateRoute>
        ),
      },
      {
        path: "my-tips",
        element: (
          <PrivateRoute>
            <MyTips />
          </PrivateRoute>
        ),
      },
      {
        path: "my-tips/update-tips/:id",
        element: (
          <PrivateRoute>
            <UpdateTips />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://green-hub-server.vercel.app/share-tips/${params.id}`),
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);
