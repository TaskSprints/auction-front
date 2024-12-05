import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  MainPage,
  LoginPage,
  RegisterPage,
  CategoryPage,
  BiddingPage,
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
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/bidding",
    element: <BiddingPage />,
  },
  {
    path: "/auctionRegister",
    element: <AuctionRegistration />,
  },
]);

export default function App(): React.ReactElement {
  return <RouterProvider router={router} />;
}
