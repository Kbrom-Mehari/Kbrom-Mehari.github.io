import { useState } from "react";
import {
    ExternalLink,
    Images,
    CheckCircle2,
    Clock3,
    Rocket,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import ImageGalleryModal from "./ImageGalleryModal";

const statusStyle = {
    Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    Completed: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    MVP: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    "In Progress":
        "bg-purple-500/10 text-purple-400 border-purple-500/30",
};

const statusIcon = {
    Live: <Rocket size={14} />,
    Completed: <CheckCircle2 size={14} />,
    MVP: <CheckCircle2 size={14} />,
    "In Progress": <Clock3 size={14} />,
};

export default function ProjectCard({ project }) {
    const [galleryOpen, setGalleryOpen] = useState(false);

    return (
        <>
            <article
                className="
                    flex flex-col
                    rounded-2xl
                    border border-gray-800
                    bg-gray-800
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-sky-500/40
                "
            >
                {/* Header */}

                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            {project.title}
                        </h3>

                        <p className="mt-3 leading-7 text-gray-400">
                            {project.description}
                        </p>
                    </div>

                    <span
                        className={`
                            flex items-center gap-1
                            whitespace-nowrap
                            rounded-full
                            border
                            px-3
                            py-1
                            text-xs
                            font-medium
                            ${statusStyle[project.status]}
                        `}
                    >
                        {statusIcon[project.status]}
                        {project.status}
                    </span>
                </div>

                {/* Highlights */}

                <div className="mt-8">
                    <p className="mb-3 text-sm uppercase tracking-wider text-gray-500">
                        Highlights
                    </p>

                    <ul className="space-y-2">
                        {project.features.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-center gap-2 text-sm text-gray-300"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>

                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tech Stack */}

                <div className="mt-8">
                    <p className="mb-3 text-sm uppercase tracking-wider text-gray-500">
                        Built With
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="
                                    rounded-full
                                    border
                                    border-gray-700
                                    px-3
                                    py-1
                                    text-sm
                                    text-gray-300
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Buttons */}

                <div className="mt-10 flex flex-wrap gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            inline-flex
                            items-center
                            text-gray-400
                            gap-2
                            rounded-lg
                            border
                            border-gray-700
                            px-4
                            py-2
                            text-sm
                            font-medium
                            transition
                            hover:border-white
                            hover:text-white
                        "
                    >
                        <FaGithub size={18} aria-hidden="true" />

                        Repository
                    </a>

                    {project.screenshots?.length > 0 && (
                        <button
                            type="button"
                            onClick={() => setGalleryOpen(true)}
                            className="
                                inline-flex
                                items-center
                                text-gray-400
                                gap-2
                                rounded-lg
                                border
                                border-gray-700
                                px-4
                                py-2
                                text-sm
                                font-medium
                                transition
                                hover:border-sky-500
                                hover:text-sky-400
                            "
                        >
                            <Images size={18} />

                            Gallery
                        </button>
                    )}

                    {project.website && (
                        <a
                            href={project.website}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-lg
                                bg-sky-500
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-gray-900
                                transition
                                hover:bg-sky-400
                            "
                        >
                            <ExternalLink size={18} />

                            Live Demo
                        </a>
                    )}
                </div>
            </article>

            {project.screenshots?.length > 0 && (
                <ImageGalleryModal
                    title={project.title}
                    images={project.screenshots}
                    isOpen={galleryOpen}
                    onClose={() => setGalleryOpen(false)}
                />
            )}
        </>
    );
}
