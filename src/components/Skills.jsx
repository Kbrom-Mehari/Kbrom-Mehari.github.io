import {
    MonitorSmartphone,
    Server,
    Database,
    Boxes,
    ArrowDown
} from "lucide-react";

const architecture = [
    {
        icon: MonitorSmartphone,
        title: "User Experience",
        subtitle: "Where every system begins",
        description:
            "I build interfaces that make complex workflows feel simple, whether it's managing shipments, monitoring fleets, or visualizing operational data.",
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Axios"
        ]
    },
    {
        icon: Server,
        title: "Application Core",
        subtitle: "The logic behind the system",
        description:
            "This is where I spend most of my time—designing APIs, implementing business rules, securing applications, and connecting services that solve real operational problems.",
        technologies: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "REST APIs",
            "Netty"
        ]
    },
    {
        icon: Database,
        title: "Data Layer",
        subtitle: "Choosing the right storage",
        description:
            "Different data deserves different storage strategies. I use relational databases for business data and specialized databases for high-volume time-series workloads.",
        technologies: [
            "PostgreSQL",
            "Redis",
            "TimescaleDB"
        ]
    },
    {
        icon: Boxes,
        title: "Deployment & Integration",
        subtitle: "Bringing everything together",
        description:
            "From Linux servers to Docker containers and GPS integrations, I focus on building software that runs reliably in real-world environments.",
        technologies: [
            "Docker",
            "Linux",
            "Git",
            "Traccar"
        ]
    }
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="mx-6 my-16 rounded-2xl border border-gray-800 bg-gray-900 px-6 py-16 md:px-12"
        >
            {/* Header */}

            <div className="mx-auto max-w-3xl text-center">

                <span className="text-sm uppercase tracking-[0.25em] text-sky-400">
                    Architecture at a Glance
                </span>

                <h2 className="mt-3 text-4xl font-bold text-white">
                    How I Build Software
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-400">
                    Every project starts with understanding the problem before
                    choosing the technology. I think in terms of complete
                    systems—from the user interface to backend services, data,
                    and infrastructure.
                </p>

            </div>

            {/* Vertical Architecture */}

            <div className="mx-auto mt-20 max-w-4xl">

                {architecture.map((step, index) => {

                    const Icon = step.icon;

                    return (

                        <div key={step.title}>

                            <div className="relative flex gap-8">

                                {/* Timeline */}

                                <div className="flex flex-col items-center">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-500/30 bg-sky-500/10 text-sky-400">

                                        <Icon size={26} />

                                    </div>

                                    {index !== architecture.length - 1 && (
                                        <div className="mt-2 h-full w-px bg-gradient-to-b from-sky-500/40 to-gray-700"></div>
                                    )}

                                </div>

                                {/* Content */}

                                <div className="mb-12 flex-1 rounded-2xl border border-gray-800 bg-gray-800/60 p-7 transition-all duration-300 hover:border-sky-500/30">

                                    <p className="text-sm uppercase tracking-widest text-sky-400">
                                        {step.subtitle}
                                    </p>

                                    <h3 className="mt-2 text-2xl font-semibold text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-5 leading-8 text-gray-400">
                                        {step.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">

                                        {step.technologies.map((tech) => (

                                            <span
                                                key={tech}
                                                className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-300"
                                            >
                                                {tech}
                                            </span>

                                        ))}

                                    </div>

                                </div>

                            </div>

                            {index !== architecture.length - 1 && (
                                <div className="mb-8 flex justify-center text-gray-600">
                                    <ArrowDown size={18} />
                                </div>
                            )}

                        </div>

                    );

                })}

            </div>

            {/* Closing Note */}

            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-sky-500/20 bg-sky-500/5 p-8">

                <p className="text-center leading-8 text-gray-300">
                    I build software that extends beyond traditional websites 
                    especially systems for personal security, logistics, fleet
                    visibility, and organizational operations where software
                    interacts with daily processes.
                </p>

            </div>

        </section>
    );
}