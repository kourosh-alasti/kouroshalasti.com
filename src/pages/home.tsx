import { CopyIcon, MailIcon, FolderGitIcon } from "lucide-react";
import logo from "../assets/logo_main.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center gap-12 overflow-hidden px-1 md:px-2">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
        <div className="h-[30%] flex-1 md:h-full">
          <img src={logo} alt="KA" className="h-44 w-44" />
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="text-[3rem] font-extrabold sm:text-[3.5rem] md:text-[5.5rem]">
            Kourosh Alasti
          </h1>
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-semibold antialiased hover:font-[650] sm:text-xl sm:font-[650] hover:sm:font-bold">
              Student, Designer, Developer
            </h4>
            <div className="flex justify-between rounded-md border border-gray-700 bg-[#1e1e1e] px-3 py-2">
              <h3>git clone kourosh-alasti</h3>
              <a target="_blank" href="https://github.com/kourosh-alasti">
                <CopyIcon className="text-gray-400 hover:cursor-pointer hover:text-gray-200" />
              </a>
            </div>
            {/*
             * Commented out until alastisolutions website is up and running.  Uncomment when ready.
             *
             *
            <div>
              alastisolutions is{" "}
              <a
                href="https://alastisolutions.org"
                className="font-bold no-underline hover:cursor-pointer hover:font-extrabold"
              >
                here
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Link to="/projects">
          <button className="flex gap-2 rounded-md border bg-[#2e2e2e] px-4 py-2 capitalize text-white hover:bg-[#3e3e3e] hover:text-gray-200  hover:opacity-80">
            <FolderGitIcon />
            Projects
          </button>
        </Link>
        <Link
          to="mailto:coding@kouroshalasti.com?cc=kouroshalastibusiness@gmail.com"
          target="_blank"
        >
          <button className="flex gap-2 rounded-md border bg-[#2e2e2e] px-4 py-2 capitalize text-white hover:bg-[#3e3e3e] hover:text-gray-200">
            <MailIcon />
            Email Me
          </button>
        </Link>
      </div>
    </main>
  );
}

export default HomePage;
