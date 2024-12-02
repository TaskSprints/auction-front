import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  MainPage,
  LoginPage,
  RegisterPage,
  DetailsPage,
  CategoryPage,
} from "@/pages/index";
import { AuctionRegistration } from "@/features/auction/ui/AuctionRegistration/AuctionRegistration";

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
