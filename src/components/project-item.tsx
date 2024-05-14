import { ExternalLinkIcon } from "lucide-react";

interface Props {
  link: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  tech: string[];
}

export const ProjectItem = ({
  link,
  title,
  description,
  src,
  alt,
  tech,
}: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full max-w-[20rem] cursor-pointer flex-col items-center gap-4 justify-self-center rounded-xl bg-[#1e1e1e] p-6 text-sm font-medium shadow-sm transition hover:bg-slate-950 sm:max-w-full sm:flex-row sm:justify-self-stretch md:p-2"
    >
      <ExternalLinkIcon className="absolute right-5 top-5 h-4 w-4 transition-all group-hover:right-4 group-hover:top-4" />
      <span className="relative aspect-[1.57142847] w-32 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl sm:rounded-lg">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="object-contain object-center text-transparent drop-shadow-md"
        />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-center text-lg font-bold uppercase tracking-wide sm:text-start">
          {title}
        </h3>
        <p className="max-w-full text-center sm:text-start">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-1 sm:justify-normal">
          {tech.map((i, index) => (
            <span
              key={`${title}-${i}-${index}`}
              className="rounded-md bg-indigo-400/60 px-2 text-[12px] font-semibold text-white"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};
