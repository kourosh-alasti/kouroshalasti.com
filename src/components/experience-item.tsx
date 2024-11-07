import ToolItem from "./tool-item";

interface Props {
  company: string;
  position: string;
  location: string;
  dates: string;
  bullets: string[];
  tools: string[];
}

// bg-[#1e1e1e]

export default function ExperienceItem({
  company,
  position,
  location,
  dates,
  bullets,
  tools,
}: Props) {
  return (
    <div className="px-4 py-2 border-1 border-slate-200 container bg-[#1e1e1e] h-45 flex flex-col rounded-md border border-slate-700 gap-4">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-normal md:font-semibold">{company}</h2>
          <p className="text-sm">{location}</p>
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-between">
          <h4 className="text-indigo-300 font-bold text-sm md:text-base lg:text-medium">{position}</h4>
          <h4 className="text-sm md:text-base lg:text-medium text-slate-400">{dates}</h4>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        {tools.map((i) => (
          <ToolItem title={i} />
        ))}
      </div>

    </div>
  );
}
