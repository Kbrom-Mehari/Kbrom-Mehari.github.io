import {
    Lightbulb,
    Cog,
    Rocket,
} from "lucide-react";

const aboutCards = [
    {
        icon: Lightbulb,
        title: "Why I Build",
        text:
            "I enjoy building software that helps organizations understand their operations and make better decisions. Whether it's fleet visibility, logistics, or organizational security, I'm most motivated by systems that solve practical problems and create measurable impact.",
    },
    {
        icon: Cog,
        title: "How I Engineer",
        text:
            "Backend engineering is where I spend most of my time. I design secure APIs, implement business logic, and build reliable services. At the same time, I believe powerful systems should remain intuitive, so I enjoy creating interfaces that make complex workflows feel simple.",
    },
    {
        icon: Rocket,
        title: "How I Grow",
        text:
            "I learn by building. Every project gives me the opportunity to explore new technologies, refine my engineering approach, and understand how distributed systems, real-time applications, and infrastructure fit together to solve real-world problems.",
    },
];

const About = () => {
    return (
        <section
            id="about"
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
            <div className="mx-auto max-w-6xl">

                {/* Header */}

                <div className="max-w-3xl">

                    <span className="text-sm uppercase tracking-[0.25em] text-sky-400">
                        About
                    </span>

                    <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                        The Way I Think About Software
                    </h2>

                </div>

                <div className="mt-14 grid gap-10 lg:grid-cols-[2fr_1fr]">

                    {/* Thought Cards */}

                    <div className="space-y-6">

                        {aboutCards.map((card) => {

                            const Icon = card.icon;

                            return (

                                <div
                                    key={card.title}
                                    className="
                                        rounded-2xl
                                        border
                                        border-gray-800
                                        bg-gray-800/60
                                        p-6
                                        sm:p-7
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-sky-500/30
                                        hover:bg-gray-800
                                        hover:shadow-[0_0_30px_rgba(14,165,233,0.10)]
                                    "
                                >

                                    <div className="flex items-center gap-4">

                                        <div
                                            className="
                                                flex
                                                h-12
                                                w-12
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-sky-500/10
                                                text-sky-400
                                            "
                                        >
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="text-xl font-semibold text-white">
                                            {card.title}
                                        </h3>

                                    </div>

                                    <p className="mt-6 text-sm leading-8 text-gray-300 sm:text-base">
                                        {card.text}
                                    </p>

                                </div>

                            );

                        })}

                    </div>

                    {/* Side Panel */}

                    <aside
                        className="
                            h-fit
                            rounded-2xl
                            border
                            border-gray-800
                            bg-gray-800/60
                            p-6
                            sm:p-7
                        "
                    >

                        <div>

                            <p className="text-sm uppercase tracking-widest text-sky-400">
                                Current Focus
                            </p>

                            <p className="mt-2 leading-7 text-white">
                                Logistics Platforms, Fleet Visibility, and
                                Software for Organizational Security.
                            </p>

                        </div>

                        <div className="mt-8">

                            <p className="text-sm uppercase tracking-widest text-sky-400">
                                Exploring
                            </p>

                            <p className="mt-2 leading-7 text-gray-300">
                                Microservices, Kafka, Distributed Systems,
                                Event-Driven Architecture, and Cloud
                                Infrastructure.
                            </p>

                        </div>

                        <div className="mt-8">

                            <p className="text-sm uppercase tracking-widest text-sky-400">
                                Engineering Philosophy
                            </p>

                            <p className="mt-2 leading-7 text-gray-300">
                                Build software that solves real problems.
                                Keep it reliable, maintainable, and as simple
                                as possible.
                            </p>

                        </div>

                    </aside>

                </div>

            </div>
        </section>
    );
};

export default About;