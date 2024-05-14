import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import { RootLayout } from "../pages/layouts/root-layout";
import ProjectsPage from "../pages/projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "", element: <HomePage /> }],
  },
  { path: "/projects", element: <ProjectsPage /> },
]);
