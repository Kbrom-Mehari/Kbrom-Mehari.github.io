import {
    FaGithub,
    FaLinkedin,
    FaTelegram,
    FaWhatsapp
} from "react-icons/fa";

import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const iconColorMap = {
  LinkedIn: 'text-blue-600',
  Telegram: 'text-blue-600',
  WhatsApp: 'text-emerald-400',
  default: 'text-gray-300' 
};

const contacts = [
    {
        title: "Email",
        description:
            "The best place to reach me for projects, collaborations, or opportunities.",
        button: "Send Email",
        icon: <IoIosMail size={30} />,
        href: "mailto:kibrommehari121@gmail.com",
        featured: true,
    },
    {
        title: "GitHub",
        description:
            "Explore the software I'm currently building and contributing to.",
        button: "View GitHub",
        icon: <FaGithub size={28} />,
        href: "https://github.com/Kbrom-Mehari",
    },
    {
        title: "LinkedIn",
        description:
            "Let's connect and talk about software engineering and opportunities.",
        button: "Connect",
        icon: <FaLinkedin size={28} />,
        href: "https://linkedin.com/in/kbrom-mehari",
    },
    {
        title: "Telegram",
        description:
            "Ideal for quick conversations and project discussions.",
        button: "Message",
        icon: <FaTelegram size={28} />,
        href: "https://t.me/kbrom_mehari",
    },
    {
        title: "WhatsApp",
        description:
            "Available for direct communication when needed.",
        button: "Open Chat",
        icon: <FaWhatsapp size={28} />,
        href: "https://wa.me/251932141022",
    },
    {
        title: "X",
        description:
            "Occasionally I share what I'm learning and building.",
        button: "Visit Profile",
        icon: <FaXTwitter size={28} />,
        href: "https://x.com/kibrommehari121",
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="mx-6 my-16 rounded-2xl border border-gray-800 bg-gray-900 px-6 py-16 md:px-12"
        >
            <div className="mx-auto max-w-3xl text-center">
                <span className="uppercase tracking-[0.25em] text-sky-400 text-sm">
                    Contact
                </span>

                <h2 className="mt-3 text-4xl font-bold text-white">
                    Let's Build Something Useful Together
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-400">
                    Whether you're building a logistics platform, a fleet
                    visibility solution, or another backend-focused application,
                    I'd be happy to hear about it.
                </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {contacts.map((contact) => (

                    <a
                        key={contact.title}
                        href={contact.href}
                        target={contact.href.startsWith("mailto") ? "_self" : "_blank"}
                        rel="noreferrer"
                        className={`
                            rounded-2xl
                            border
                            p-7
                            transition-all
                            duration-300
                            hover:border-sky-500
                            hover:-translate-y-1
                            ${
                                contact.featured
                                    ? "border-sky-500/40 bg-sky-500/5"
                                    : "border-gray-800 bg-gray-800/50"
                            }
                        `}
                    >
                        <div className={iconColorMap[contact.title] || iconColorMap.default}>
                            {contact.icon}
                        </div>

                        <h3 className="mt-6 text-xl font-semibold text-white">
                            {contact.title}
                        </h3>

                        <p className="mt-3 leading-7 text-gray-400">
                            {contact.description}
                        </p>

                        <div className="mt-8 inline-flex items-center rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-white transition hover:border-sky-500">
                            {contact.button}
                        </div>
                    </a>

                ))}

            </div>
        </section>
    );
}