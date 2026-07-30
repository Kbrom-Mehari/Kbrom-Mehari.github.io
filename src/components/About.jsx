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
            "Building software for operational systems is what interests me most. Logistics, fleet visibility, personal and organizational security all involve real challenges where reliable software can make a noticeable difference."
    },
    {
        icon: Cog,
        title: "How I Engineer",
        text:
            "I design secure APIs, implement domain business logic, and build reliable services. At the same time, I believe powerful systems should be beautiful and easy to use, so I love creating interfaces that make complex workflows feel simple.",
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
                section-shell
            "
        >
            <div className="section-shell__inner mx-auto max-w-6xl">

                {/* Header */}

                <div className="max-w-3xl">

                    <span className="section-kicker">
                        About
                    </span>

                    <h2 className="section-title">
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
                                        border-white/8
                                        bg-white/4
                                        p-6
                                        sm:p-7
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-sky-400/25
                                        hover:bg-white/6
                                        hover:shadow-[0_14px_40px_rgba(2,8,23,0.2)]
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
                                                bg-sky-400/10
                                                text-sky-300
                                            "
                                        >
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="text-xl font-semibold text-slate-100">
                                            {card.title}
                                        </h3>

                                    </div>

                                    <p className="mt-6 text-sm leading-8 text-slate-300 sm:text-base">
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
                            border-white/8
                            bg-white/4
                            p-6
                            sm:p-7
                        "
                    >

                        <div>

                            <p className="section-kicker">
                                Current Focus
                            </p>

                            <p className="mt-2 leading-7 text-slate-100">
                                Logistics Platforms, Fleet Visibility, and
                                Software for Organizational Security.
                            </p>

                        </div>

                        <div className="mt-8">

                            <p className="section-kicker">
                                Exploring
                            </p>

                            <p className="mt-2 leading-7 text-slate-300">
                                Microservices, Kafka, Distributed Systems,
                                Event-Driven Architecture, and Cloud
                                Infrastructure.
                            </p>

                        </div>

                        <div className="mt-8">

                            <p className="section-kicker">
                                Engineering Philosophy
                            </p>

                            <p className="mt-2 leading-7 text-slate-300">
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