import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import ErrorPage from "../pages/error/ErrorPage";
import Layout from "../layout/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
]);
