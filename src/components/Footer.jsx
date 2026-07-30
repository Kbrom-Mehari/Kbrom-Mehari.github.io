import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

import { IoIosMail } from "react-icons/io";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/8 bg-slate-950/65">

            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                    {/* Left */}

                    <div>

                        <h3 className="text-xl font-semibold text-white">
                            Kbrom Mehari
                        </h3>

                        <p className="mt-3 max-w-md leading-7 text-slate-400">
                            Building software solutions for logistics, fleet
                            visibility, and organizational security.
                        </p>

                        <p className="mt-5 text-sm text-slate-500">
                            Designing and building with React, Spring Boot, and ☕.
                        </p>

                    </div>

                    {/* Right */}

                    <div className="flex gap-4">

                        <a
                            href="https://github.com/Kbrom-Mehari"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-white/8 p-3 text-slate-400 transition hover:border-sky-400/35 hover:text-white"
                        >
                            <FaGithub size={20} />
                        </a>

                        <a
                            href="https://linkedin.com/in/kbrom-mehari"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-white/8 p-3 text-slate-400 transition hover:border-sky-400/35 hover:text-blue-400"
                        >
                            <FaLinkedin size={20} />
                        </a>

                        <a
                            href="mailto:kibrommehari121@gmail.com"
                            className="rounded-lg border border-white/8 p-3 text-slate-400 transition hover:border-sky-400/35 hover:text-white"
                        >
                            <IoIosMail size={20} />
                        </a>

                    </div>

                </div>

                <div className="mt-10 border-t border-white/8 pt-6 text-sm text-slate-500">

                    © {currentYear} Kbrom Mehari · Built with React & Tailwind CSS.

                </div>

            </div>

        </footer>
    );
};

export default Footer;