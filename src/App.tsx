import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import React from "react";
import "antd/dist/reset.css";
import CategoryPage from "./pages/CategoryPage";
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
    path: "/category",
    element: <CategoryPage />,
  },
]);

export default function App(): React.ReactElement {
  return <RouterProvider router={router} />;
}
