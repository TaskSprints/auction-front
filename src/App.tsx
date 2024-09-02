import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DetailsPage from "./pages/DetailsPage";
import React from "react";
import "antd/dist/reset.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/details",
    element: <DetailsPage />,
  },
]);

export default function App(): React.ReactElement {
  return <RouterProvider router={router} />;
}
