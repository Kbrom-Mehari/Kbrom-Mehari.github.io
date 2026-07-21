const About = () => {
    return (
        <section
            id="about"
            className="mx-6 my-16 rounded-2xl border border-gray-800 bg-gray-900 px-6 py-16 md:px-12"
        >
            <div className="mx-auto max-w-6xl">

                {/* Header */}

                <div className="max-w-3xl">

                    <span className="uppercase tracking-[0.25em] text-sky-400 text-sm">
                        About
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-white">
                        The Way I Think About Software
                    </h2>

                </div>

                <div className="mt-14 grid gap-12 lg:grid-cols-[2fr_1fr]">

                    {/* Story */}

                    <div className="space-y-7 text-lg leading-9 text-gray-300">

                        <p>
                            I love building software that helps organizations
                            understand more and manage their daily operations efficiently.
                            It could be tracking their assests smartly, coordinating
                            logistics, or improving organizational security,
                            I'm most motivated by systems that solve practical
                            problems.
                        </p>

                        <p>
                            My work is centered around backend engineering,
                            where I design secure APIs, implement business logic, and
                            build reliable services. At the same time, I
                            believe that powerful systems should be simple to
                            use, so I enjoy creating interfaces that make
                            complex workflows feel intuitive.
                        </p>

                        <p>
                            I learn best by building. Every project is an
                            opportunity to explore new technologies, refine my
                            engineering approach, and understand how different
                            pieces of a system fit together. I'm particularly
                            interested in distributed systems, real-time
                            applications, and software that interacts with the
                            physical world.
                        </p>

                    </div>

                    {/* Side Panel */}

                    <aside className="rounded-2xl border border-gray-800 bg-gray-800/60 p-7">

                        <div>

                            <p className="text-sm uppercase tracking-widest text-sky-400">
                                Current Focus
                            </p>

                            <p className="mt-2 text-white leading-7">
                                Logistics Platforms, Fleet Visibility, and
                                Software for Organizational Security.
                            </p>

                        </div>

                        <div className="mt-8">

                            <p className="text-sm uppercase tracking-widest text-sky-400">
                                Exploring
                            </p>

                            <p className="mt-2 text-gray-300 leading-7">
                                Microservices, Kafka, Distributed Systems,
                                Event-Driven Architecture, and Cloud
                                Infrastructure.
                            </p>

                        </div>

                        <div className="mt-8">

                            <p className="text-sm uppercase tracking-widest text-sky-400">
                                Engineering Philosophy
                            </p>

                            <p className="mt-2 text-gray-300 leading-7">
                                Build software that solves real problems. Keep
                                it reliable, maintainable, and as simple as
                                possible.
                            </p>

                        </div>

                    </aside>

                </div>

            </div>
        </section>
    );
};

export default About;