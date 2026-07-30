import React from "react";
// Ensure your processed image is saved as hero.png in your assets folder
import heroImage from "../assets/hero.png";

const Hero = ({ isTerminalMode }) => {

    return (
        <section className="section-shell section-shell--hero" id="hero">
            <div className="section-shell__inner">
                <div className="mx-auto grid max-w-6xl items-center gap-10 md:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">

                    {/* Left Column: Bio / Text Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <div className="space-y-3">
                            <span className="section-kicker justify-center lg:justify-start">Production Engineer</span>
                            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                <span className="text-sky-300">Kbrom Mehari</span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
                                Designing and building software systems that help people and organizations
                                make their operations secure, efficient and informed.
                            </p>
                        </div>

                        <div className="inline-metrics justify-center lg:justify-start">
                            <div className="metric-chip">
                                <span className="metric-chip__label">Focus</span>
                                <span className="metric-chip__value">Logistics systems</span>
                            </div>
                            <div className="metric-chip">
                                <span className="metric-chip__label">Stack</span>
                                <span className="metric-chip__value">React + Spring Boot</span>
                            </div>
                            <div className="metric-chip">
                                <span className="metric-chip__label">Mode</span>
                                <span className="metric-chip__value">Building production software</span>
                            </div>
                        </div>

                        <div className={`rounded-2xl border p-4 text-left shadow-inner transition-all duration-200 sm:p-5 ${isTerminalMode ? 'border-sky-400/25 bg-slate-900/90' : 'border-white/8 bg-slate-950/50'}`}>
                            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-slate-500">
                                <span className={`h-2 w-2 rounded-full ${isTerminalMode ? 'bg-sky-400' : 'bg-emerald-400'}`} />
                                {isTerminalMode ? 'terminal mode: active' : 'system status: live'}
                            </div>
                            <div className="mt-4 flex items-center gap-2 font-mono text-sm text-slate-300">
                                <span className="text-sky-300">$</span>
                                <span>{isTerminalMode ? 'inspect --workspace --signal' : 'deploy --confidence --production'}</span>
                            </div>
                            <div className="mt-3 grid gap-3 sm:grid-cols-3">
                                <div className="rounded-xl border border-white/8 bg-white/4 p-3">
                                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Latency</div>
                                    <div className="mt-1 text-sm font-semibold text-slate-100">42ms</div>
                                </div>
                                <div className="rounded-xl border border-white/8 bg-white/4 p-3">
                                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Builds</div>
                                    <div className="mt-1 text-sm font-semibold text-slate-100">+18 this week</div>
                                </div>
                                <div className="rounded-xl border border-white/8 bg-white/4 p-3">
                                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Focus</div>
                                    <div className="mt-1 text-sm font-semibold text-slate-100">Reliability</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center rounded-xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-300"
                            >
                                See My Work
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-white/8"
                            >
                                Start a conversation
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Image Container */}
                        <div className="flex justify-center lg:justify-end">
                        <div className="workspace-surface workspace-surface--strong relative w-full max-w-md overflow-hidden rounded-[1.5rem] p-3 sm:p-4">
                            <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/8 bg-white/3 px-4 py-3 text-[11px] uppercase tracking-[0.24em] text-slate-400">
                                <span>Workspace preview</span>
                                <span data-mono="true">status: online</span>
                            </div>

                            <div className="overflow-hidden rounded-[1.1rem] border border-white/6 bg-slate-950/30 pt-10 sm:pt-11">
                                <img
                                    src={heroImage}
                                    alt="kbrom Mehari"
                                    className="aspect-[4/5] w-full object-cover object-top"
                                />
                            </div>

                            <div className="mt-3 flex flex-col gap-1 px-2 pb-1 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                                <span className="monospace-label">Current system</span>
                                <span className="max-w-full sm:max-w-[18rem] sm:text-right">{isTerminalMode ? 'Try the Konami code again to exit' : 'Operational software for real-world workflows'}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;