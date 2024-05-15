import { Outlet, Link } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="mx-auto flex h-full min-h-full w-full max-w-screen-xl flex-col justify-center">
      <Outlet />
      <footer className="bottom-0 mx-5 flex flex-col items-center justify-between gap-1 overflow-hidden text-right text-[90%] md:flex-row md:items-end md:text-left">
        <div className="flex flex-col rounded-md border px-3 py-1">
          <div className="font-bold hover:font-extrabold">
            <Link to="/projects"> &rarr; my projects</Link>
          </div>
          <div className="font-bold hover:font-extrabold">
            <a
              target="_blank"
              href="
            mailto:coding@kouroshalasti.com?cc=kouroshalastibusiness@gmail.com"
            >
              email me &larr;
            </a>
          </div>
        </div>
        <div className="">&copy; 2024 Kourosh Alasti</div>
      </footer>
    </div>
  );
};
