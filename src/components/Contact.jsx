import {
    FaGithub,
    FaLinkedin,
    FaTelegram,
    FaWhatsapp
} from "react-icons/fa";

import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const iconColorMap = {
    LinkedIn: "text-blue-600",
    Telegram: "text-blue-600",
    WhatsApp: "text-emerald-400",
    default: "text-gray-300",
};

const contacts = [
    {
        title: "Email",
        description:
            "The best place to reach me for projects, collaborations, or opportunities.",
        button: "Send Email",
        icon: <IoIosMail className="h-7 w-7 sm:h-8 sm:w-8" />,
        href: "mailto:kibrommehari121@gmail.com",
        // featured: true,
    },
    {
        title: "GitHub",
        description:
            "Explore the software I'm currently building and contributing to.",
        button: "View GitHub",
        icon: <FaGithub className="h-6 w-6 sm:h-7 sm:w-7" />,
        href: "https://github.com/Kbrom-Mehari",
    },
    {
        title: "LinkedIn",
        description:
            "Let's connect and talk about software engineering and opportunities.",
        button: "Connect",
        icon: <FaLinkedin className="h-6 w-6 sm:h-7 sm:w-7" />,
        href: "https://linkedin.com/in/kbrom-mehari",
    },
    {
        title: "Telegram",
        description:
            "For quick conversations and project discussions.",
        button: "Message",
        icon: <FaTelegram className="h-6 w-6 sm:h-7 sm:w-7" />,
        href: "https://t.me/kbrom_mehari",
    },
    {
        title: "WhatsApp",
        description:
            "Available for direct communication when needed.",
        button: "Open Chat",
        icon: <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" />,
        href: "https://wa.me/251932141022",
    },
    {
        title: "X",
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

            <div className="mx-auto max-w-3xl text-center">

                <span className="text-sm uppercase tracking-[0.25em] text-sky-400">
                    Contact
                </span>

                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    Let's Build Something Useful Together
                </h2>

                <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
                    Use any of the channels below to get in touch and discuss about your projects and ideas.
                </p>

            </div>

            {/* Contact Cards */}

            <div className="mt-12 sm:mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                {contacts.map((contact) => (

                    <a
                        key={contact.title}
                        href={contact.href}
                        target={contact.href.startsWith("mailto") ? "_self" : "_blank"}
                        rel="noreferrer"
                        className={`
                            rounded-2xl
                            border
                            p-5
                            sm:p-7
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-sky-500/40
                            hover:bg-gray-800
                            hover:shadow-[0_0_30px_rgba(14,165,233,0.10)]
                            ${
                                contact.featured
                                    ? "border-sky-500/40 bg-sky-500/5 shadow-[0_0_30px_rgba(14,165,233,0.08)]"
                                    : "border-gray-800 bg-gray-800/50"
                            }
                        `}
                    >

                        {/* Icon + Title */}

                        <div className="flex items-center gap-4">

                            <div className={iconColorMap[contact.title] || iconColorMap.default}>
                                {contact.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-white sm:text-xl">
                                {contact.title}
                            </h3>

                        </div>

                        {/* Description */}

                        <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                            {contact.description}
                        </p>

                        {/* Button */}

                        <div
                            className="
                                mt-6
                                flex
                                w-full
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-gray-700
                                px-4
                                py-2.5
                                text-sm
                                font-medium
                                text-white
                                transition
                                hover:border-sky-500
                            "
                        >
                            {contact.button}
                        </div>

                    </a>

                ))}

            </div>

        </section>
    );
}