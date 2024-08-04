import { CopyIcon, MailIcon, FolderGitIcon, BriefcaseIcon } from "lucide-react";
import logo from "../assets/logo_main.png";
import ActionButton from "../components/action-button";

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
            <h6 className="text-base text-indigo-200/80 sm:text-sm">
              San Francisco / Los Angeles
            </h6>
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
        <ActionButton to="/projects">
          <FolderGitIcon />
          Projects
        </ActionButton>
        <ActionButton to="/experiences">
          <BriefcaseIcon />
          Experience
        </ActionButton>
        <ActionButton
          to="mailto:coding@kouroshalasti.com?cc=kouroshalastibusiness@gmail.com"
          target="_blank"
        >
          <MailIcon />
          Email Me
        </ActionButton>
      </div>
    </main>
  );
}

export default HomePage;
