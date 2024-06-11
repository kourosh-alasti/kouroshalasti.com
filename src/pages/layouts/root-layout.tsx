import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="mx-auto flex h-full min-h-full w-full max-w-screen-xl flex-col justify-center">
      <Outlet />
      <footer className="bottom-0 flex w-full items-center justify-center gap-1 overflow-hidden text-center text-[90%]">
        <div className="">&copy; 2024 Kourosh Alasti</div>
      </footer>
    </div>
  );
};
