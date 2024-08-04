import ToolItem from "./tool-item";

interface Props {
  company: string;
  position: string;
  dates: string;
  bullets: string[];
  tools: string[];
}

export default function ExperienceItem({
  company,
  position,
  dates,
  bullets,
  tools,
}: Props) {
  return (
    <div className="flex flex-col rounded-md bg-[#1e1e1e] p-6 hover:bg-slate-950 md:p-2">
      <h3 className="text-xl font-bold md:text-2xl">{company}</h3>
      <div className="mb-4 flex justify-between gap-3">
        <h4 className="font-semibold text-indigo-300">{position}</h4>
        <h4 className="font-thin">{dates}</h4>
      </div>

      <ul className="mb-3 list-disc text-wrap pl-4">
        {bullets.map((i) => (
          <li>{i}</li>
        ))}
      </ul>

      <div className="flex flex-row flex-wrap gap-3">
        {tools.map((i) => (
          <ToolItem title={i} />
        ))}
      </div>
    </div>
  );
}
