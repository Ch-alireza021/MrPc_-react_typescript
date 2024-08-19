import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy } from "react";
import { Loadable } from "../layouts/loadable/Loadable";
import { PATH } from "../config";
// Lazy load components
const User = Loadable(lazy(() => import("../layouts/user/User")));
const Home = Loadable(lazy(() => import("../pages/users/home/Home")));
const AboutUs = Loadable(lazy(() => import("../pages/about_us/AboutUs")));
const CommonQuestions = Loadable(
  lazy(() => import("../pages/common-questions/Common_questions"))
);
const Terms = Loadable(lazy(() => import("../pages/terms/Terms")));
const Login = Loadable(lazy(() => import("../pages/login/Login")));
const SignUp = Loadable(lazy(() => import("../pages/sign-up/SignUp")));

// Define routes
export const routes: RouteObject[] = [
  {
    path: PATH.HOME,
    element: <User />,
    children: [
      { path: PATH.HOME, element: <Home /> },
      { path: PATH.ABOUT_US, element: <AboutUs /> },
      { path: PATH.COMMON_QUESTION, element: <CommonQuestions /> },
      { path: PATH.TERMS, element: <Terms /> },
      { path: PATH.LOGIN, element: <Login /> },
      { path: PATH.SIGN_UP, element: <SignUp /> },
    ],
  },
];

// Create the router
export const router = createBrowserRouter(routes);
