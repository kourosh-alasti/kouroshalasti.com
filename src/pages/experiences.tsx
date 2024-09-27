import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ExperienceItem from "../components/experience-item";

const EXPERIENCES = [
  {
    company: "Indian Wells Valley Youth Softball",
    position: "Frontend Developer",
    dates: "Oct 2022 - June 2024",
    bullets: [
      "Built and launched a user-friendly website, facilitating information distribution to an average of 30 daily unique visitors",
      "Designed an engaging UI using Figma and migrated website to React / Next, implementing custom functionality to streamline UX",
      "Configured DNS to enabled custom email addresses, improvin sponsorship opportunities by 25%",
      "Integrated SquareAPI, enabling seamless online payment processing for 120+ seasonal registations",
    ],
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
  {
    company: "North Blue Networks",
    position: "Project Manager",
    dates: "June 2023 - Apr 2024",
    bullets: [
      "Spearheaded Project lifecycles, deliverying 90% of software solutions within deadlines",
      "Increased productivity for team of 5-6 developers through implementation of Agile Methodologies, fostering strong team collaboration",
      "Gathered client requirements through proactive communication, ensuring high client satisfaction and retention",
      "Leveraged IT expertise to configure computer systems and server racks, guarenteeing seamless client operations",
    ],
    tools: ["Jira", "Trello", "ClicUp", "Slack"],
  },
  {
    company: "PBXFlex",
    position: "Full Stack Developer",
    dates: "Nov 2023 - Feb 2024",
    bullets: [
      "Developed a VoIP system and admin dashoboard using TypeScript, React, and Next.js, serving over 100 users across 15+ companies",
      "Designed and implemented scalable, high-performance server componenets to handle real-time communication and manage user extensions and phone numbers",
      "Collaborated with 3 developers to gather requirements, beta test, and deploy new features, ensuring seamless integration and reliability of VoIP system",
    ],
    tools: ["TypeScript", "React", "Next.js", "TailwindCSS"],
  },
];

export default function ExperiencesPage() {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center gap-12 overflow-hidden px-3 md:px-2">
      <Link to="/" className="mt-4">
        <div className="flex items-center justify-center gap-1 justify-self-start">
          <ArrowLeft />
          <h1>go back</h1>
        </div>
      </Link>

      <div className="mt-6 grid grid-cols-1 items-center justify-center gap-2 antialiased md:ml-0 md:gap-4">
        <h2 className="text-center text-lg font-semibold underline underline-offset-[3px] md:text-3xl md:font-bold md:underline-offset-[7px]">
          Job Experience
        </h2>

        <div className="flex flex-col gap-3">
          {EXPERIENCES.map((exp) => (
            <ExperienceItem {...exp} />
          ))}
        </div>
      </div>
    </main>
  );
}
