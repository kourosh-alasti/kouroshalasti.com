import { configure } from "onedollarstats";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
    useEffect(() => {
        configure({
            trackLocalhostAs: "kouroshalasti.com",
            collectorUrl: "https://collector.onedollarstats.com/events",
            autocollect: true,
            hashRouting: false,
        });
    });

    return (
        <div className="mx-auto flex h-full min-h-full w-full max-w-(--breakpoint-2xl) flex-col items-center justify-center">
            <Outlet />
            <footer className="gap-1 overflow-hidden">
                &copy; 2026 Kourosh Alasti
            </footer>
        </div>
    );
}

export default RootLayout;
