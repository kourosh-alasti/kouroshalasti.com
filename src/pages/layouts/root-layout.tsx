import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="mx-auto flex h-full min-h-full w-full max-w-screen-xl flex-col justify-center">
      <Outlet />
      <footer className="bottom-0 mx-5 flex flex-col justify-between overflow-hidden text-[90%] md:flex-row">
        <div className="flex flex-col">
          <div className="font-bold hover:font-extrabold">
            <a href="/projects">projects</a>
          </div>
          <div className="font-bold hover:font-extrabold">
            <a
              target="_blank"
              href="
            mailto:coding@kouroshalasti.com?cc=kouroshalastibusiness@gmail.com"
            >
              commissions available
            </a>
          </div>
        </div>
        <div className="max right-0 float-none self-end text-right">
          &copy; 2024 Kourosh Alasti
        </div>
      </footer>
    </div>
  );
};
