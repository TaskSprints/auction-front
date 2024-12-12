import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "app/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  LoginPage,
  RegisterPage,
  CategoryPage,
  BiddingPage,
  AuctionRegistrationPage,
} from "@/pages";
import { reportWebVitals } from "@/shared/lib/util/reportWebVitals";
import { App } from "app/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    // TODO: 백엔드 API 연동 후, Id를 통해 데이터를 가져오도록 수정해야 한다.
    path: "/category",
    element: <CategoryPage />,
  },
  {
    // TODO: 백엔드 API 연동 후, Id를 통해 데이터를 가져오도록 수정해야 한다.
    path: "/bidding",
    element: <BiddingPage />,
  },
  {
    path: "/auctionRegister",
    element: <AuctionRegistrationPage />,
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);

reportWebVitals();
