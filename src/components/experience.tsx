import { nanoid } from "nanoid";

const EXPERIENCES = [
    {
        company: "SchottMD",
        position: "Fullstack Contractor",
        location: "Remote",
        dates: "Aug. 2025 - Now",
        tools: [
            "TypeScript",
            "React",
            "Next.js",
            "Sentry",
            "PostgreSQL",
            "Redis",
            "AWS SES",
            "AWS S3",
            "AWS EC2",
        ],
    },
    {
        company: "PBXFlex",
        position: "Fullstack Development Intern",
        location: "Fullerton, CA",
        dates: "Nov 2023 - Feb 2024",
        tools: ["TypeScript", "React", "Next.js", "TailwindCSS"],
    },
    {
        company: "North Blue Networks",
        position: "Project Management Intern",
        location: "Fullerton, CA",
        dates: "June 2023 - Apr 2024",
        tools: ["Jira", "Trello", "ClicUp", "Slack"],
    },
    {
        company: "Indian Wells Valley Youth Softball",
        position: "Frontend Developer",
        location: "Ridgecrest, CA",
        dates: "Oct 2022 - June 2024",
        tools: [
            "TypeScript",
            "React",
            "Next.js",
            "PostgreSQL",
            "Square API",
            "Figma",
            "AWS S3",
            "AWS SES",
        ],
    },
];

const ExperienceSection = () => {
    return (
        <div className="col-span-3 rounded-sm border border-slate-500 p-4 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold">Experience</h2>
            <div className="flex flex-col gap-3">
                {EXPERIENCES.map((item) => (
                    <div
                        className="flex flex-col gap-4 rounded-lg border border-slate-500 px-3 py-2"
                        key={nanoid()}
                    >
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-semibold">
                                    {item.position}
                                </h3>
                                <p className="text-base font-light tracking-tighter">
                                    {item.company}
                                </p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <p>{item.dates}</p>
                                <p>{item.location}</p>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-1">
                            {item.tools.map((tool) => (
                                <div
                                    className="rounded-md bg-indigo-600 px-2 text-[12px] font-semibold text-white"
                                    key={nanoid()}
                                >
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;
