import logo from "../../src/assets/logo_main.png";
import AnnouncementSection from "./announcement.tsx";

function MainSection() {
  return (
      <div className="flex flex-col gap-4 w-full col-span-1 md:col-span-3">
    <section className="flex w-full flex-row self-center rounded-sm border border-slate-500 px-6 py-3">
      <div className="flex items-center justify-center gap-4">
        <div className="h-[30%] flex-1 self-start md:h-full">
          <img src={logo} alt="KA" className="h-20 w-20 md:h-44 md:w-44" />
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="text-[1.5rem] font-extrabold sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] xl:text-[4.5rem]">
            Kourosh Alasti
          </h1>
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-semibold antialiased hover:font-[650] sm:text-xl sm:font-[650] sm:hover:font-bold">
              Student, Designer, Developer
            </h4>
            <h6 className="text-base text-indigo-200/80 sm:text-sm">
              San Francisco / Los Angeles
            </h6>
          </div>
        </div>
      </div>
    </section>
        <AnnouncementSection />
      </div>
  );
}

export default MainSection;
