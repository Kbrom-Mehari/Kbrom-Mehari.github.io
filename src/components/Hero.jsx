import React from "react";
// Ensure your processed image is saved as hero.png in your assets folder
import heroImage from "../assets/hero.png";

const Hero = () => {

    return (
        <section className="bg-gray-900 my-8 px-6 py-16 md:px-12 rounded-2xl shadow-xl border border-gray-800 text-white md:mx-6 " id="hero">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                {/* Left Column: Bio / Text Content */}
                <div className="space-y-4 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        <span className="text-sky-500">Kbrom Mehari</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-gray-300">
                        Software Engineer | Fullstack Developer | Backend Specialist
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                        Designing and building software systems that help people and organizations 
                        make their operations secure, efficient and informed.

                       
                       
                    </p>
                    <div className="pt-4">
                        <a
                            href="#projects"
                            className="inline-block bg-sky-500 hover:bg-sky-500 text-gray-950 font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-sky-500/20"
                        >
                            See My Work
                        </a>
                    </div>
                </div>

                {/* Right Column: Image Container */}
                <div className="flex justify-center md:justify-end order-first md:order-last">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800">
                        <img
                            src={heroImage}
                            alt="kbrom Mehari"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;