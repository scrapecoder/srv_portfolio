import { useState } from "react";
import { TiDownload } from "react-icons/ti";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the hamburger menu

export default function NavBar({ scrollToSection }: { scrollToSection: (number: number) => void }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to handle menu toggle
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full bg-slate-950 px-2 mid:px-20">
            {/* Main Nav */}
            <div className="flex justify-between items-center py-2">
                {/* Logo */}
                <div className="mid:w-60 ml-1 md:ml-10 sm:mr-4 mid:mr-10">
                    <h2 className="text-white font-semibold text-2xl font-sans">Sourav</h2>
                    <h3 className="text-cyan-500 ml-5 font-semibold text-xl/2 font-sans">Kukreti</h3>
                </div>

                {/* Hamburger menu for small devices */}
                <div className="sm:hidden mr-4">
                    <button onClick={toggleMenu} className="text-white">
                        {isMenuOpen ? <FaTimes className="text-stone-950" size={20} /> : <FaBars className="text-stone-950" size={20} />}
                    </button>
                </div>

                {/* Menu Items for medium and larger devices */}
                <div className="hidden sm:flex flex-row flex-1 w-full space-x-2 sm:space-x-2 md:space-x-5 lg:space-x-8 items-center justify-end">
                    <button className="bg-slate-950" onClick={() => scrollToSection(1)}>
                        <span className="text-white font-normal text-sm hover:text-sky-700 font-sans">Home</span>
                    </button>
                    <button className="bg-slate-950" onClick={() => scrollToSection(2)}>
                        <span className="text-white font-normal text-sm hover:text-sky-700 font-sans">Featured projects</span>
                    </button>
                    <button className="bg-slate-950" onClick={() => scrollToSection(3)}>
                        <span className="text-white font-normal text-sm hover:text-sky-700 font-sans">About me</span>
                    </button>
                    <button className="bg-slate-950" onClick={() => scrollToSection(4)}>
                        <span className="text-white font-normal text-sm hover:text-sky-700 font-sans">Contact me</span>
                    </button>
                </div>

                {/* Resume Button */}
                <div className="hidden sm:flex flex-initial sm:mx-4 md:mx-10">
                    <a className="flex flex-row bg-cyan-500 py-1 px-2 items-center justify-center rounded-sm hover:bg-cyan-600"
                        target="_blank"
                        href="https://drive.google.com/file/d/1sb85gs-oj6a3v-andXSyU1yjGsWdDGDp/view?usp=sharing"
                    >
                        <span className="text-slate-950">View Resume</span>
                        <TiDownload className="ml-1 text-black" />
                    </a>
                </div>
            </div>

            {/* Side Menu for Small Devices */}
            {isMenuOpen && (
                <div className="sm:hidden flex flex-col space-y-4 mt-4">
                    <button onClick={() => { toggleMenu(); scrollToSection(1); }} className="text-white text-lg bg-transparent hover:text-sky-700">
                        Home
                    </button>
                    <button onClick={() => { toggleMenu(); scrollToSection(2); }} className="text-white text-lg bg-transparent hover:text-sky-700">
                        Featured projects
                    </button>
                    <button onClick={() => { toggleMenu(); scrollToSection(3); }} className="text-white text-lg bg-transparent hover:text-sky-700">
                        About me
                    </button>
                    <button onClick={() => { toggleMenu(); scrollToSection(4); }} className="text-white text-lg bg-transparent hover:text-sky-700">
                        Contact me
                    </button>
                    <a className="flex items-center justify-center bg-cyan-500 py-2 px-3 rounded-sm hover:bg-cyan-600"
                        target="_blank"
                        href="https://drive.google.com/file/d/1sb85gs-oj6a3v-andXSyU1yjGsWdDGDp/view?usp=sharing"
                    >
                        <span className="text-slate-950">View Resume</span>
                        <TiDownload className="ml-1 text-black" />
                    </a>
                </div>
            )}
        </div>
    );
}
