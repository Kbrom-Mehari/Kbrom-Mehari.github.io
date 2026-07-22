import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
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
                    bg-gray-900/80
                    backdrop-blur-xl
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
                    {/* Logo */}

                    <a
                        href="#hero"
                        className="
                            text-2xl
                            font-bold
                            tracking-tight
                            text-white
                            transition
                            hover:text-sky-400
                        "
                    >
                        <span className="text-sky-400">Kbrom Mehari</span>{" "}
                    </a>

                    {/* Desktop Navigation */}

                    <ul className="hidden items-center gap-10 md:flex">

                        {links.map((link) => (

                            <li key={link.label}>

                                <a
                                    href={link.href}
                                    className="
                                        group
                                        relative
                                        font-medium
                                        text-gray-300
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
                            bg-gray-800/60
                            p-2.5
                            text-gray-300
                            transition
                            hover:bg-gray-700
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
                    bg-gray-950/80
                    backdrop-blur-xl
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

                    {links.map((link) => (

                        <a
                            key={link.label}
                            href={link.href}
                            onClick={closeMenu}
                            className="
                                text-3xl
                                font-semibold
                                text-gray-300
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