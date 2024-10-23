"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detect scroll to add shadow to the navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to close the menu
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <section
            className={`${
                scrolled ? "shadow-lg bg-opacity-90 backdrop-blur-md" : ""
            } flex flex-row w-full h-[75px] py-12 px-20 items-center sticky top-0 z-50 transition-shadow duration-300`}
        >
            {/* Logo Section */}
            <div className="flex flex-col w-1/2">
                <img className="w-[120px]" src="/assets/upscaledkay.png" alt="kaylogo" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-col w-1/2">
                <div className="flex flex-row gap-4 justify-end">
                    <a href="#home_sec">
                        <span className="text-primaryWhite hover:text-secondaryWhite">
                            <span className="px-2 text-primaryYellow">#</span>home
                        </span>
                    </a>
                    <a href="#quotes_sec">
                        <span className="text-primaryWhite hover:text-secondaryWhite">
                            <span className="px-2 text-primaryYellow">#</span>projects
                        </span>
                    </a>
                    <a href="#skills_sec">
                        <span className="text-primaryWhite hover:text-secondaryWhite">
                            <span className="px-2 text-primaryYellow">#</span>skills
                        </span>
                    </a>
                    <a href="#contact_sec">
                        <span className="text-primaryWhite hover:text-secondaryWhite">
                            <span className="px-2 text-primaryYellow">#</span>contact
                        </span>
                    </a>
                </div>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden flex flex-col w-1/2 items-end relative z-50">
                <button onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? (
                        <X size={32} className="text-primaryWhite" />
                    ) : (
                        <List size={32} className="text-primaryWhite" />
                    )}
                </button>
            </div>

            {/* Off-canvas Menu for Mobile */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-40 transition-transform transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                    <a href="#home_sec" onClick={closeMenu}>
                        <span className="text-primaryWhite hover:text-secondaryWhite text-2xl">
                            <span className="px-2 text-primaryYellow">#</span>home
                        </span>
                    </a>
                    <a href="#quotes_sec" onClick={closeMenu}>
                        <span className="text-primaryWhite hover:text-secondaryWhite text-2xl">
                            <span className="px-2 text-primaryYellow">#</span>projects
                        </span>
                    </a>
                    <a href="#skills_sec" onClick={closeMenu}>
                        <span className="text-primaryWhite hover:text-secondaryWhite text-2xl">
                            <span className="px-2 text-primaryYellow">#</span>skills
                        </span>
                    </a>
                    <a href="#contact_sec" onClick={closeMenu}>
                        <span className="text-primaryWhite hover:text-secondaryWhite text-2xl">
                            <span className="px-2 text-primaryYellow">#</span>contact
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
