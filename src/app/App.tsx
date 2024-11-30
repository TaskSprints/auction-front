import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DetailsPage from "../pages/DetailsPage";
import CategoryPage from "../pages/CategoryPage";
import AuctionRegistration from "@/features/auction/ui/AuctionRegistration/AuctionRegistration";

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
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/auctionRegister",
    element: <AuctionRegistration />,
  },
]);

export default function App(): React.ReactElement {
  return <RouterProvider router={router} />;
}
