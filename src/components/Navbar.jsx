import { useState } from "react";
import { Command, Menu, X } from "lucide-react";

const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenPalette }) {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <nav
                className="
                    sticky
                    top-0
                    z-50
                    border-b
                    border-white/10
                    bg-slate-950/70
                    backdrop-blur-2xl
                "
            >
                <div
                    className="
                        mx-auto
                        flex
                        h-16
                        max-w-7xl
                        items-center
                        justify-between
                        px-4
                        sm:px-6
                        lg:px-8
                    "
                >
                    <div className="flex items-center gap-4">
                        <a
                            href="#hero"
                            className="
                                text-lg
                                font-semibold
                                tracking-tight
                                text-white
                                transition
                                hover:text-sky-300
                            "
                        >
                            Kbrom Mehari
                        </a>

                        <span className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-3 py-1 text-[11px] font-medium text-emerald-300 sm:inline-flex">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />
                            Available for work
                        </span>
                    </div>

                    <ul className="hidden items-center gap-8 md:flex">
                        <li>
                            <button
                                type="button"
                                onClick={onOpenPalette}
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400/35 hover:text-white"
                            >
                                <Command className="h-4 w-4 text-sky-300" />
                                <span className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Ctrl K</span>
                            </button>
                        </li>

                        {links.map((link) => (

                            <li key={link.label}>

                                <a
                                    href={link.href}
                                    className="
                                        group
                                        relative
                                        text-sm
                                        font-medium
                                        text-slate-300
                                        transition-colors
                                        hover:text-white
                                    "
                                >
                                    {link.label}

                                    <span
                                        className="
                                            absolute
                                            -bottom-2
                                            left-0
                                            h-0.5
                                            w-0
                                            bg-sky-400
                                            transition-all
                                            duration-300
                                            group-hover:w-full
                                        "
                                    />
                                </a>

                            </li>

                        ))}

                    </ul>

                    {/* Mobile Button */}

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="
                            rounded-xl
                            border
                            border-white/10
                            bg-slate-900/70
                            p-2.5
                            text-slate-300
                            transition
                            hover:bg-slate-800
                            hover:text-white
                            md:hidden
                        "
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}

            <div
                className={`
                    fixed
                    inset-0
                    z-40
                    bg-slate-950/85
                    backdrop-blur-2xl
                    transition-all
                    duration-300
                    md:hidden

                    ${
                        isOpen
                            ? "visible opacity-100"
                            : "invisible opacity-0"
                    }
                `}
            >

                <div
                    className="
                        flex
                        h-full
                        flex-col
                        items-center
                        justify-center
                        gap-8
                    "
                >
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
                        Navigation
                    </span>

                    {links.map((link) => (

                        <a
                            key={link.label}
                            href={link.href}
                            onClick={closeMenu}
                            className="
                                text-3xl
                                font-semibold
                                text-slate-200
                                transition
                                hover:text-sky-400
                            "
                        >
                            {link.label}
                        </a>

                    ))}

                </div>

            </div>
        </>
    );
}