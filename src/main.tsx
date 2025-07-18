import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import { PostHogProvider } from "posthog-js/react";

import "./index.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const options = {
    api_host: import.meta.env.VITE_POSTHOG_HOST!,
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PostHogProvider
            apiKey={import.meta.env.VITE_POSTHOG_KEY!}
            options={options}
        >
            <RouterProvider router={router} />
        </PostHogProvider>
    </React.StrictMode>,
);
