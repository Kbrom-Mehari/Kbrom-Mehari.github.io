import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Command, Sparkles } from "lucide-react";

const commands = [
    {
        label: "Open projects",
        description: "Jump to the selected work section",
        href: "#projects",
    },
    {
        label: "Contact me",
        description: "Reach out for product or engineering work",
        href: "#contact",
    },
    {
        label: "View about",
        description: "See how I approach systems and product thinking",
        href: "#about",
    },
    {
        label: "Open GitHub",
        description: "Browse repositories and ongoing work",
        href: "https://github.com/Kbrom-Mehari",
        external: true,
    },
];

export default function CommandPalette({ isOpen, onClose }) {
    const [query, setQuery] = useState("");

    useEffect(() => {
        if (!isOpen) {
            setQuery("");
            return;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    const filteredCommands = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        if (!normalizedQuery) {
            return commands;
        }

        return commands.filter((command) => {
            return (
                command.label.toLowerCase().includes(normalizedQuery) ||
                command.description.toLowerCase().includes(normalizedQuery)
            );
        });
    }, [query]);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-[60] flex items-start justify-center bg-slate-950/80 px-4 pt-20 backdrop-blur-xl"
            onClick={onClose}
        >
            <div
                className="w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-[0_30px_90px_rgba(2,8,23,0.6)]"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/70 px-3 py-3">
                    <Command className="h-4 w-4 text-sky-300" />
                    <input
                        autoFocus
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Search workspace"
                        className="flex-1 border-0 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                    />
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.24em] text-slate-400">
                        Esc
                    </span>
                </div>

                <div className="mt-3 space-y-2">
                    {filteredCommands.map((command) => (
                        <a
                            key={command.label}
                            href={command.href}
                            target={command.external ? "_blank" : undefined}
                            rel={command.external ? "noreferrer" : undefined}
                            onClick={onClose}
                            className="flex items-center justify-between rounded-xl border border-white/8 bg-white/4 px-3 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400/25 hover:bg-white/6"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/10 text-sky-300">
                                    <Sparkles className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-100">{command.label}</p>
                                    <p className="text-xs text-slate-400">{command.description}</p>
                                </div>
                            </div>

                            <ArrowRight className="h-4 w-4 text-slate-400" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
