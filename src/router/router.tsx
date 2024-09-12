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
const Admin = Loadable(lazy(() => import("../pages/admin/Admin")));
const AdminDashboard = Loadable(
  lazy(() => import("../pages/admin/admin_dashboard/AdminDashboard"))
);
const UserViwe = Loadable(lazy(() => import("../pages/admin/users/UserView")));
const AdminOrdersPage = Loadable(
  lazy(() => import("../pages/admin/admin_orders/AdminOrdersPage"))
);
const AdminProducts = Loadable(
  lazy(() => import("../pages/admin/admin_products/AdminProducts"))
);
const ACategory = Loadable(
  lazy(() => import("../pages/admin/admin_cat&subcat/ACategories"))
);
const ASubcategories = Loadable(
  lazy(() => import("../pages/admin/admin_cat&subcat/ASubcategories"))
);

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
  {
    path: PATH.ADMIN,
    element: <Admin />,
    children: [
      {
        path: PATH.DASHBOARD,
        element: <AdminDashboard />,
      },
      {
        path: PATH.USERVIWE,
        element: <UserViwe />,
      },
      {
        path: PATH.ADMINORDERS,
        element: <AdminOrdersPage />,
      },
      {
        path: PATH.ADMINPRODUCTS,
        element: <AdminProducts />,
      },
      {
        path: PATH.ACATEGORY,
        element: <ACategory />,
      },
      {
        path: PATH.ASUBCATEGORY,
        element: <ASubcategories />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
