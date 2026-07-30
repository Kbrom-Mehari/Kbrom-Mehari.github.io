import {
    FaGithub,
    FaLinkedin,
    FaTelegram,
    FaWhatsapp
} from "react-icons/fa";

import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowRight, Clock3, MapPin, Sparkles } from "lucide-react";

const iconColorMap = {
    LinkedIn: "text-blue-400",
    Telegram: "text-sky-400",
    WhatsApp: "text-emerald-400",
    default: "text-slate-300",
};

const contacts = [
    {
        title: "Email",
        meta: "Primary channel",
        endpoint: "kibrommehari121@gmail.com",
        description:
            "The best place to reach me for projects, collaborations, or opportunities.",
        button: "Send Email",
        icon: <IoIosMail className="h-7 w-7 sm:h-8 sm:w-8" />,
        href: "mailto:kibrommehari121@gmail.com",
        // featured: true,
    },
    {
        title: "GitHub",
        meta: "Code + repos",
        endpoint: "github.com/Kbrom-Mehari",
        description:
            "Explore the software I'm currently building and contributing to.",
        button: "View GitHub",
        icon: <FaGithub className="h-6 w-6 sm:h-7 sm:w-7" />,
        href: "https://github.com/Kbrom-Mehari",
    },
    {
        title: "LinkedIn",
        meta: "Professional network",
        endpoint: "linkedin.com/in/kbrom-mehari",
        description:
            "Let's connect and talk about software engineering and opportunities.",
        button: "Connect",
        icon: <FaLinkedin className="h-6 w-6 sm:h-7 sm:w-7" />,
        href: "https://linkedin.com/in/kbrom-mehari",
    },
    {
        title: "Telegram",
        meta: "Quick sync",
        endpoint: "t.me/kbrom_mehari",
        description:
            "For quick conversations and project discussions.",
        button: "Message",
        icon: <FaTelegram className="h-6 w-6 sm:h-7 sm:w-7" />,
        href: "https://t.me/kbrom_mehari",
    },
    {
        title: "WhatsApp",
        meta: "Direct chat",
        endpoint: "+251 932 141 022",
        description:
            "Available for direct communication when needed.",
        button: "Open Chat",
        icon: <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" />,
        href: "https://wa.me/251932141022",
    },
    {
        title: "X",
        meta: "Updates",
        endpoint: "x.com/kibrommehari121",
        description:
            "Occasionally I share what I'm learning and building.",
        button: "Visit Profile",
        icon: <FaXTwitter className="h-6 w-6 sm:h-7 sm:w-7" />,
        href: "https://x.com/kibrommehari121",
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="
                section-shell
            "
        >
            <div className="section-shell__inner mx-auto max-w-6xl">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="section-kicker justify-center">
                        Contact
                    </span>

                    <h2 className="section-title">
                        Let's Build Something Useful Together
                    </h2>

                    <p className="section-copy mx-auto">
                        Whether you are shipping a product, refining an internal workflow, or building a serious platform, I’m available for thoughtful engineering conversations.
                    </p>
                </div>

                <div className="mt-10 rounded-[1.75rem] border border-white/8 bg-slate-950/50 p-6 sm:p-8">
                    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                        <div>
                            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-slate-500">
                                <Sparkles className="h-3.5 w-3.5 text-sky-300" />
                                Availability
                            </div>

                            <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                                Open for product engineering work and focused collaborations.
                            </h3>

                            <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                                I enjoy partnering with teams that care about reliability, thoughtful UX, and software that actually supports real operations.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                                    <Clock3 className="h-4 w-4 text-sky-300" />
                                    Responds within 24 hours
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                                    <MapPin className="h-4 w-4 text-sky-300" />
                                    Based in Ethiopia
                                </span>
                            </div>
                        </div>

                        <a
                            href="mailto:kibrommehari121@gmail.com"
                            className="rounded-[1.4rem] border border-sky-400/20 bg-sky-400/8 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400/35 hover:bg-sky-400/10"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                                        Preferred channel
                                    </p>
                                    <p className="mt-2 text-lg font-semibold text-white">
                                        Start with email
                                    </p>
                                </div>
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-400/15 text-sky-300">
                                    <ArrowRight className="h-5 w-5" />
                                </div>
                            </div>

                            <p className="mt-4 text-sm leading-7 text-slate-300">
                                For product, engineering, or collaboration inquiries, email is the most reliable route.
                            </p>
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact Cards */}

            <div className="section-grid grid gap-5 px-4 pb-8 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">

                {contacts.map((contact) => (

                    <a
                        key={contact.title}
                        href={contact.href}
                        target={contact.href.startsWith("mailto") ? "_self" : "_blank"}
                        rel="noreferrer"
                        className={`
                            group
                            relative
                            overflow-hidden
                            rounded-[1.45rem]
                            border
                            border-white/8
                            bg-slate-950/55
                            p-5
                            sm:p-6
                            transition-all
                            duration-200
                            hover:-translate-y-1
                            hover:border-sky-400/25
                            hover:bg-white/6
                            hover:shadow-[0_18px_60px_rgba(2,8,23,0.28)]
                        `}
                    >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-200 group-hover:scale-105 group-hover:border-sky-400/25 group-hover:bg-sky-400/10 ${iconColorMap[contact.title] || iconColorMap.default}`}>
                                    {contact.icon}
                                </div>

                                <div>
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                                        {contact.meta}
                                    </p>
                                    <h3 className="mt-1 text-lg font-semibold text-slate-100 sm:text-xl">
                                        {contact.title}
                                    </h3>
                                </div>
                            </div>

                            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/8 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-300">
                                open
                            </span>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                            {contact.description}
                        </p>

                        <div className="mt-5 rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                            <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                                Endpoint
                            </p>
                            <p className="mt-1 font-mono text-sm text-slate-200">
                                {contact.endpoint}
                            </p>
                        </div>

                        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/8 pt-4">
                            <span className="text-xs uppercase tracking-[0.22em] text-slate-500">
                                {contact.button}
                            </span>

                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sky-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:border-sky-400/30 group-hover:bg-sky-400/10">
                                <ArrowRight className="h-4 w-4" />
                            </div>
                        </div>

                    </a>

                ))}

            </div>

        </section>
    );
}