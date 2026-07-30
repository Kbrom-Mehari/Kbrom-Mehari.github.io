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
                section-shell
            "
        >
            {/* Header */}

            <div className="section-shell__inner mx-auto max-w-3xl text-center">

                <span className="section-kicker justify-center">
                    Behind the Build
                </span>

                <h2 className="section-title">
                    Tools I use to build Software
                </h2>

                <p className="section-copy mx-auto">
                    I start every project by understanding the problem before
                    choosing the technology. I think in terms of complete
                    systems from the user interface to backend services, data,
                    and infrastructure. So, the tools I use depend on the system to be built
                </p>

            </div>

            {/* Architecture */}

            <div className="section-grid mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-0">
                <div className="mb-8 rounded-2xl border border-white/8 bg-white/4 p-4 sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Architecture map</p>
                            <p className="mt-1 text-sm text-slate-300">A practical system view: experience, services, data, operations.</p>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-3 py-1 text-xs text-emerald-300">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            Distributed systems ready
                        </div>
                    </div>
                </div>

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
                                        border-white/8
                                        bg-white/4
                                        p-5
                                        sm:p-7
                                        transition-all
                                        duration-300
                                        hover:border-sky-400/25
                                        hover:shadow-[0_12px_36px_rgba(2,8,23,0.18)]
                                    "
                                >

                                    <p className="section-kicker">
                                        {step.subtitle}
                                    </p>

                                    <h3 className="mt-2 text-xl font-semibold text-slate-100 sm:text-2xl">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8">
                                        {step.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">

                                        {step.technologies.map((tech) => (

                                            <span
                                                key={tech}
                                                className="
                                                    rounded-full
                                                    border
                                                    border-white/10
                                                    px-2.5
                                                    py-1
                                                    text-xs
                                                    text-slate-300
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