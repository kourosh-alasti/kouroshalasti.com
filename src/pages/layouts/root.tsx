import { Outlet } from "react-router-dom";

function RootLayout() {
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
