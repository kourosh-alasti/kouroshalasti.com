import { CopyIcon } from "lucide-react";
import logo from "../assets/logo_main.png";

function HomePage() {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center overflow-hidden ">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
        <div className="h-[30%] flex-1 md:h-full">
          <img src={logo} alt="KA" className="h-44 w-44" />
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="text-[3.5rem] font-extrabold md:text-[5.5rem]">
            Kourosh Alasti
          </h1>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between rounded-md border border-gray-700 bg-[#1e1e1e] px-3 py-2">
              <h3>git clone kourosh-alasti</h3>
              <a target="_blank" href="https://github.com/kourosh-alasti">
                <CopyIcon className="text-gray-400 hover:cursor-pointer hover:text-gray-200" />
              </a>
            </div>
            <div>
              alastisolutions is{" "}
              <a
                href="https://alastisolutions.org"
                className="font-bold no-underline hover:cursor-pointer hover:font-extrabold"
              >
                here
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
