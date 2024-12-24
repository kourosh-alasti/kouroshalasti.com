import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/layouts/root";
import HomePage from "../pages/home";
import ResumePage from "../pages/resume";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "/resume", element: <ResumePage /> },
        ],
    },
]);
