import ProjectCard from "./ProjectCard";
import { projects } from "../projectsData";

const Projects = () => {
    return (
        <section
            id="projects"
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

            <div className="mx-auto mb-16 max-w-3xl text-center">

                <span className="text-sm font-medium uppercase tracking-[0.25em] text-sky-400">
                    Selected Work
                </span>

                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    Projects I've Built
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
                    These projects reflect the kinds of software I enjoy building,
                    with focus on logistics platforms, fleet visibility solutions
                    and backend systems designed with scalability and
                    maintainability in mind.
                </p>

            </div>

            {/* Projects */}

            <div className="grid gap-8 lg:grid-cols-2">

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