import ProjectCard from "./ProjectCard";
import { projects } from "../projectsData";

const Projects = () => {
    return (
        <section
            id="projects"
            className="
                section-shell
            "
        >
            {/* Header */}

            <div className="section-shell__inner mx-auto mb-12 max-w-3xl text-center">

                <span className="section-kicker justify-center">
                    Selected Work
                </span>

                <h2 className="section-title">
                    Projects I've Built
                </h2>

                <p className="section-copy mx-auto">
                    Systems designed with scalability and maintainability in mind.
                </p>

            </div>

            {/* Projects */}

            <div className="section-grid grid gap-8 px-4 pb-8 sm:px-6 md:grid-cols-2 lg:px-8">
                <div className="rounded-2xl border border-white/8 bg-white/4 p-5 lg:col-span-2">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Repository view</p>
                            <p className="mt-1 text-sm text-slate-300">Each project is treated like a product surface with architecture, delivery, and operational context.</p>
                        </div>
                        <div className="rounded-full border border-sky-400/20 bg-sky-400/8 px-3 py-1 text-xs text-sky-300">
                            Production-minded delivery
                        </div>
                    </div>
                </div>

                {projects.map((project) => (

                    <ProjectCard
                        key={project.id}
                        project={project}
                    />

                ))}

            </div>

        </section>
    );
};

export default Projects;