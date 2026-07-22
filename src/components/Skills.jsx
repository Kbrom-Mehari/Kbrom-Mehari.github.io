import {
    MonitorSmartphone,
    Server,
    Database,
    Boxes,
    ArrowDown,
} from "lucide-react";

const architecture = [
    {
        icon: MonitorSmartphone,
        title: "User Experience",
        subtitle: "beautiful and easy to use interfaces",
        description:
            "I build interfaces that make complex workflows feel simple, whether it's managing shipments, monitoring fleets, or visualizing operational data.",
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Axios",
        ],
    },
    {
        icon: Server,
        title: "Backend Engineering",
        subtitle: "logic behind systems",
        description:
            "Tools for designing APIs, implementing business rules and securing applications.",
        technologies: [
            "Java", "Python",
            "Spring Boot",
            "Spring Security",
            "JPA/Hibernate",
            "REST APIs",
            "Netty",
        ],
    },
    {
        icon: Database,
        title: "Data Layer",
        subtitle: "Database and caching",
        description:
            "I use relational databases for business data and specialized databases for high-volume time-series workloads.",
        technologies: [
            "PostgreSQL",
            "MySQL",
            "Redis",
            "TimescaleDB",
            "PostGIS"
        ],
    },
    {
        icon: Boxes,
        title: "Deployment & Integration",
        subtitle: "Cloud, containerization and platforms",
        description:
            "From Linux servers to Docker containers and GPS integrations, I focus on building software that runs reliably in real-world environments.",
        technologies: [
            "Azure",
            "Docker",
            "Github Actions",
            "Traccar",
            "Linux",
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="
                mx-auto
                md:mx-6
                my-16
                rounded-2xl
                border
                border-gray-800
                bg-gray-900
                px-4
                md:px-12
                py-16
            "
        >
            {/* Header */}

            <div className="mx-auto max-w-3xl text-center">

                <span className="text-sm uppercase tracking-[0.25em] text-sky-400">
                    Behind the Build
                </span>

                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    Tools I use to build Software
                </h2>

                <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
                    I start every project by understanding the problem before
                    choosing the technology. I think in terms of complete
                    systems from the user interface to backend services, data,
                    and infrastructure. So, the tools I use depend on the system to be built
                </p>

            </div>

            {/* Architecture */}

            <div className="mx-auto mt-16 sm:mt-20 max-w-4xl">

                {architecture.map((step, index) => {

                    const Icon = step.icon;

                    return (

                        <div key={step.title}>

                            <div className="relative flex gap-4 sm:gap-8">

                                {/* Timeline */}

                                <div className="flex flex-col items-center">

                                    <div className="relative">

                                        {/* Step Number */}

                                        <div
                                            className="
                                                absolute
                                                -right-2
                                                -top-2
                                                flex
                                                h-6
                                                w-6
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-sky-500
                                                text-[10px]
                                                font-bold
                                                text-gray-900
                                            "
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </div>

                                        {/* Icon */}

                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                sm:h-14
                                                sm:w-14
                                                items-center
                                                justify-center
                                                rounded-xl
                                                sm:rounded-2xl
                                                border
                                                border-sky-500/30
                                                bg-sky-500/10
                                                text-sky-400
                                            "
                                        >
                                            <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                                        </div>

                                    </div>

                                    {index !== architecture.length - 1 && (
                                        <div className="mt-2 h-full w-px bg-gradient-to-b from-sky-500/40 to-gray-700"></div>
                                    )}

                                </div>

                                {/* Content */}

                                <div
                                    className="
                                        mb-8
                                        sm:mb-12
                                        flex-1
                                        rounded-2xl
                                        border
                                        border-gray-800
                                        bg-gray-800/60
                                        p-5
                                        sm:p-7
                                        transition-all
                                        duration-300
                                        hover:border-sky-500/30
                                    "
                                >

                                    <p className="text-xs uppercase tracking-[0.2em] text-sky-400 sm:text-sm">
                                        {step.subtitle}
                                    </p>

                                    <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
                                        {step.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">

                                        {step.technologies.map((tech) => (

                                            <span
                                                key={tech}
                                                className="
                                                    rounded-full
                                                    border
                                                    border-gray-700
                                                    px-2.5
                                                    py-1
                                                    text-xs
                                                    text-gray-300
                                                    sm:px-3
                                                    sm:text-sm
                                                "
                                            >
                                                {tech}
                                            </span>

                                        ))}

                                    </div>

                                </div>

                            </div>

                            {index !== architecture.length - 1 && (

                                <div className="mb-6 hidden justify-center text-gray-600 sm:flex">
                                    <ArrowDown size={18} />
                                </div>

                            )}

                        </div>

                    );

                })}

            </div>

            {/* Closing Note */}

            <div
                className="
                    mx-auto
                    mt-8
                    max-w-3xl
                    rounded-2xl
                    border
                    border-sky-500/20
                    bg-sky-500/5
                    p-5
                    sm:p-8
                "
            >

                <p className="text-center text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
                    I build software that extends beyond traditional websites,
                    especially systems for personal security, logistics, fleet
                    visibility, and organizational operations where software
                    interacts with real-world processes.
                </p>

            </div>

        </section>
    );
}