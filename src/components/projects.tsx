import { nanoid } from "nanoid";
import { ArrowSquareUpIcon } from "@phosphor-icons/react";

import frauditImage from "../../src/assets/fraudit.png";
import rmpImage from "../../src/assets/rmp.png";
import loglitelyImage from "../../src/assets/loglitely.png";
import passjenImage from "../../src/assets/passjen.png";
import gomacuiImage from "../../src/assets/gomacui.png";
import constellationsImage from "../../src/assets/constellation.png";
import futdraftsImage from "../../src/assets/futdrafts.png";

const PROJECTS = [
    {
        link: "https://github.com/futdrafts/futdrafts.com",
        title: "FutDrafts",
        description:
            "Full Stack Fantasy Soccer Application, enhanced with AI predictions and draft suggestions",
        src: futdraftsImage,
        alt: "FutDrafts Project Image",
        tech: [
            "TypeScript",
            "Next.JS",
            "Python",
            "FastAPI",
            "Docker",
            "TailwindCSS",
            "React",
            "Redis",
        ],
        award: "3rd Place",
    },
    {
        link: "https://github.com/kourosh-alasti/constellations",
        title: "Constellations",
        description: "Facial Recognition Social Platform for Dementia Patients",
        src: constellationsImage,
        alt: "Constellations Project Image",
        tech: [
            "TypeScript",
            "Next.JS",
            "Python",
            "FastAPI",
            "PostgreSQL Vector",
        ],
    },
    {
        link: "https://github.com/kourosh-alasti/fraudit",
        title: "Fraudit",
        description:
            "Open Source Reddit Clone to bootstrap social platform development",
        src: frauditImage,
        alt: "Fraudit Project Image",
        tech: [
            "Next.JS",
            "TypeScript",
            "TailwindCSS",
            "Drizzle",
            "Clerk",
            "Neon DB",
            "PostgreSQL",
        ],
    },
    {
        link: "https://github.com/kourosh-alasti/fraudit/tree/master/src/app/(main)/rmp",
        title: "Fraudit Rate My Professor",
        description:
            "Open Source Rate My Professor Clone for students who want to implement a rating system for highschool teachers",
        src: rmpImage,
        alt: "Fraudit RMP Project Image",
        tech: [
            "Next.JS",
            "TypeScript",
            "Drizzle",
            "Clerk",
            "Neon DB",
            "PostgreSQL",
        ],
    },
    {
        link: "https://github.com/kourosh-alasti/loglitely",
        title: "Loglitely",
        description: "A TypeScript first logger.",
        src: loglitelyImage,
        alt: "Loglitely Project Image",
        tech: ["TypeScript", "JavaScript", "Node.JS", "NPM", "Git"],
    },
    {
        link: "https://github.com/kourosh-alasti/passjen",
        title: "Passjen",
        description:
            "A Zero Dependency, secure password generator and hasher for TypeScript/JavaScript applications.",
        src: passjenImage,
        alt: "Passjen Project Image",
        tech: ["TypeScript", "Node.JS", "NPM", "Git"],
    },
    {
        link: "https://github.com/kourosh-alasti/go-macui",
        title: "Go MacUI",
        description: "GO MacOS Native UI Library",
        src: gomacuiImage,
        alt: "Go MacUI Project Image",
        tech: ["Go", "Obj-C", "C", "Metal", "Git"],
    },
];

const ProjectsSection = () => {
    return (
        <div className="col-span-2 rounded-lg border border-slate-500 p-4 shadow-sm">
            <h2 className="mb-2 text-xl font-semibold">Projects</h2>
            <div className="flex w-full flex-col gap-4">
                {PROJECTS.map((item) => (
                    <a
                        key={nanoid()}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-s:event={`Project Click: ${item.title}`}
                        className="group relative flex h-full w-full cursor-pointer flex-col items-center gap-4 justify-self-center rounded-sm border border-slate-500 bg-[#1e1e1e] p-6 text-sm font-medium shadow-xs transition sm:flex-row sm:justify-self-stretch md:p-2"
                    >
                        <ArrowSquareUpIcon className="absolute top-5 right-5 h-4 w-4 transition-all group-hover:top-4 group-hover:right-4" />
                        <span className="relative aspect-[1.57142847] w-32 shrink-0 cursor-pointer overflow-hidden rounded-xl sm:rounded-lg">
                            <img
                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                                className="object-contain object-center text-transparent drop-shadow-md"
                            />
                        </span>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center gap-1">
                                <h3 className="text-center text-lg font-bold tracking-wide uppercase sm:text-start">
                                    {item.title}
                                </h3>
                                {item.award && (
                                    <span className="rounded-sm bg-amber-300 px-1 py-0.5 text-amber-700">
                                        {item.award}
                                    </span>
                                )}
                            </div>
                            <p className="max-w-full text-center sm:text-start">
                                {item.description}
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-1 sm:justify-normal">
                                {item.tech.map((i, index) => (
                                    <span
                                        key={`${item.title}-${i}-${index}`}
                                        className="rounded-md bg-indigo-600 px-2 text-[12px] font-semibold text-white"
                                    >
                                        {i}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
