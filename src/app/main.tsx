import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "app/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage, RegisterPage, CategoryPage, BiddingPage } from "@/pages";
import { AuctionRegistration } from "features/auction/ui/AuctionRegistration/AuctionRegistration";
import { reportWebVitals } from "shared/lib/reportWebVitals";
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
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);

reportWebVitals();
