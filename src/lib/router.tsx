import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import { RootLayout } from "../pages/layouts/root-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "", element: <HomePage /> }],
  },
]);
