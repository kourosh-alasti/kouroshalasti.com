const TECH = [
    {
        name: "JavaScript",
        icon: "https://img.icons8.com/color/48/javascript--v1.png",
        homepage: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "React",
        icon: "https://reactjs.org/favicon.ico",
        homepage: "https://reactjs.org/",
    },
    {
        name: "TypeScript",
        icon: "https://www.typescriptlang.org/favicon-32x32.png",
        homepage: "https://www.typescriptlang.org/",
    },
    {
        name: "Node.js",
        icon: "https://img.icons8.com/fluency/48/node-js.png",
        homepage: "https://nodejs.org/",
    },
    {
        name: "Next.js",
        icon: "https://nextjs.org/static/favicon/favicon-32x32.png",
        homepage: "https://nextjs.org/",
    },
    {
        name: "Tailwind CSS",
        icon: "https://tailwindcss.com/favicons/apple-touch-icon.png",
        homepage: "https://tailwindcss.com/",
    },
    {
        name: "React Native",
        icon: "https://reactnative.dev/img/favicon.ico",
        homepage: "https://reactnative.dev/",
    },
    {
        name: "Express",
        icon: "https://expressjs.com/images/favicon.png",
        homepage: "https://expressjs.com/",
    },
    {
        name: "PostgreSQL",
        icon: "https://www.postgresql.org/favicon.ico",
        homepage: "https://www.postgresql.org/",
    },
    {
        name: "Svelte",
        icon: "https://svelte.dev/favicon.png",
        homepage: "https://svelte.dev/",
    },
    {
        name: "Astro",
        icon: "https://astro.build/favicon.svg",
        homepage: "https://astro.build/",
    },
    {
        name: "Go",
        icon: "https://go.dev/images/go-logo-blue.svg",
        homepage: "https://go.dev/",
    },
    {
        name: "C++",
        icon: "https://isocpp.org/favicon.ico",
        homepage: "https://isocpp.org/",
    },
];

function TechSection() {
    return (
        <div className="col-span-1 rounded border border-slate-500 p-4 shadow">
            <h2 className="mb-2 text-2xl font-semibold">Technologies</h2>
            <div className="flex flex-row flex-wrap gap-1 lg:flex-col lg:flex-nowrap">
                {TECH.map((item) => (
                    <a
                        key={item.name}
                        href={item.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 rounded border border-slate-500 p-2 transition-colors duration-200"
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            className="h-6 w-6"
                        />
                        <span className="text-sm font-medium">{item.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default TechSection;
