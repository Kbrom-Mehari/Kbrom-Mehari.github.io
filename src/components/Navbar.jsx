import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        // Added standard background, padding, items-center, and the border-b width class
        <nav className="sticky top-0 z-50 flex items-center justify-between p-4 pr-10 bg-gray-900 border-b border-b-sky-500 dark:border-gray-500">

            <div className="text-2xl font-bold text-white">
                <a href="#hero" className="text-sky-500"> Kbrom Mehari </a>
            </div>

            {/* Changed text-1xl to text-xl */}
            <div className="flex items-center text-white font-bold text-md">
                <ul className="hidden md:flex gap-10 ">
                    <li><a href="#about" className="hover:text-sky-500 transition-colors hover:shadow-sky-500">About</a></li>
                    <li><a href="#skills" className="hover:text-sky-500 transition-colors">Skills</a></li>
                    <li><a href="#projects" className="hover:text-sky-500 transition-colors">Projects</a></li>
                    <li><a href="#contact" className="hover:text-sky-500 transition-colors">Contact</a></li>
                </ul>
            </div>

            <button
                className="md:hidden block text-gray-400 hover:text-gray-100 focus:outline-none bg-gray-800 border border-gray-500 rounded px-2 shadow-md font-medium"
                onClick={toggleMenu}
            >
                {isOpen ? '✕ Close' : '☰ Menu'}
            </button>

            <div className={`fixed top-[60px] right-0 h-full w-64 bg-gray-800 p-6 shadow-2xl 
            transition-transform duration-100 ease-in-out md:hidden ${isOpen ? 'translate-x-0': 'translate-x-full'
            }`}>
                <ul className={"flex flex-col text-gray-200 text-lg font-bold gap-6"}>
                    <li onClick={toggleMenu} className="hover:text-sky-500 block"><a href="#about">About</a></li>
                    <li onClick={toggleMenu} className="hover:text-sky-500 block"><a href="#skills">Skills</a></li>
                    <li onClick={toggleMenu} className="hover:text-sky-500 block"><a href="#projects">Projects</a></li>
                    <li onClick={toggleMenu} className="hover:text-sky-500 block"><a href="#contact">Contact</a></li>
                </ul>
            </div>


        </nav>
    );
};

export default Navbar;