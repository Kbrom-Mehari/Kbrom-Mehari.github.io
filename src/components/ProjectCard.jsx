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
    const [isExploring, setIsExploring] = useState(false);

    return (
        <>
            <article
                className="
                    motion-fade
                    flex
                    flex-col
                    rounded-2xl
                    border
                    border-gray-800
                    bg-gray-800
                    p-4
                    sm:p-5
                    md:p-6
                    transition-all
                    duration-200
                    hover:-translate-y-1
                    hover:border-sky-500/40
                    hover:shadow-[0_18px_60px_rgba(2,8,23,0.26)]
                "
            >
                {/* Header */}

                <div
                    className="
                        flex
                        flex-col
                        gap-4
                        sm:flex-row
                        sm:items-start
                        sm:justify-between
                    "
                >
                    <div>
                        <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
                            {project.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-gray-400 sm:mt-3 sm:text-base">
                            {project.description}
                        </p>
                    </div>

                    <span
                        className={`
                            inline-flex
                            w-fit
                            self-start
                            sm:self-auto
                            items-center
                            gap-1
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

                <div className="mt-5 rounded-2xl border border-white/8 bg-slate-950/40 p-4 sm:mt-6 sm:p-5">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-slate-500">
                        <span className="h-2 w-2 rounded-full bg-sky-400" />
                        Architecture
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {project.architecture?.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-xl border border-white/8 bg-white/4 p-3"
                            >
                                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                                    {item.label}
                                </p>
                                <p className="mt-1 text-sm text-slate-100">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                            Delivery flow
                        </p>

                        <ol className="mt-4 space-y-2">
                            {project.deliveryFlow?.map((step, index) => (
                                <li key={step} className="flex items-center gap-2 text-sm text-slate-300">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/8 text-[10px] font-semibold text-sky-300">
                                        {index + 1}
                                    </span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                            Impact
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                            {project.impact}
                        </p>
                    </div>
                </div>

                {/* Highlights */}

                <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/8 bg-white/4 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                            Interactive exploration
                        </p>
                        <p className="mt-1 text-sm text-slate-300">
                            Toggle a compact system walkthrough for this project.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsExploring((open) => !open)}
                        className="inline-flex items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/8 px-3 py-1.5 text-xs font-medium text-sky-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400/35"
                    >
                        {isExploring ? "Hide view" : "Inspect system"}
                    </button>
                </div>

                {isExploring && (
                    <div className="mt-4 rounded-2xl border border-white/8 bg-slate-950/45 p-4">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                                    System trace
                                </p>
                                <p className="mt-1 text-sm text-slate-300">
                                    A compact look at how this product moves from input to delivery.
                                </p>
                            </div>
                            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/8 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-emerald-300">
                                live view
                            </span>
                        </div>

                        <div className="mt-4 space-y-2">
                            {project.deliveryFlow?.slice(0, 3).map((step, index) => (
                                <div key={step} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/4 p-3 text-sm text-slate-300">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/8 text-[10px] font-semibold text-sky-300">
                                        {index + 1}
                                    </span>
                                    <span>{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-6 sm:mt-8">

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

                <div className="mt-6 sm:mt-8">

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

                <div
                    className="
                        mt-8
                        flex
                        flex-col
                        gap-3
                        sm:mt-10
                        sm:flex-row
                        sm:flex-wrap
                    "
                >
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            inline-flex
                            w-full
                            sm:w-auto
                            justify-center
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-gray-700
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-gray-400
                            transition
                            hover:border-white
                            hover:text-white
                        "
                    >
                        <FaGithub size={18} />

                        Repository

                    </a>

                    {project.screenshots?.length > 0 && (

                        <button
                            type="button"
                            onClick={() => setGalleryOpen(true)}
                            className="
                                inline-flex
                                w-full
                                sm:w-auto
                                justify-center
                                items-center
                                gap-2
                                rounded-lg
                                border
                                border-gray-700
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-gray-400
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
                                w-full
                                sm:w-auto
                                justify-center
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