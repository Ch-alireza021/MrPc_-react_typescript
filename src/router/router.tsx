import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy } from "react";
import { Loadable } from "../layouts/loadable/Loadable";
import { PATH } from "../config";
// Lazy load components
const User = Loadable(lazy(() => import("../layouts/user/User")));
const Home = Loadable(lazy(() => import("../pages/users/home/Home")));
const AboutUs = Loadable(
  lazy(() => import("../pages/users/home/about_us/AboutUs"))
);

// Define routes
export const routes: RouteObject[] = [
  {
    path: PATH.HOME,
    element: <User />,
    children: [
      { path: PATH.HOME, element: <Home /> },
      { path: PATH.ABOUT_US, element: <AboutUs /> },
    ],
  },
];

// Create the router
export const router = createBrowserRouter(routes);
