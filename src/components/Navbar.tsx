"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SolaceLogo from "../assets/images/solace.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const scrollThreshold = 50;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Set initial scroll position
    setScrollPosition(window.scrollY);

    // Update scroll position on scroll
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollPosition > scrollThreshold;

  const scrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-3 ${isOpen || isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between flex-wrap px-4">
        <div className="flex items-center flex-shrink-0">
          <Image src={SolaceLogo} alt="Solace Logo" width={50} height={50} />
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center px-3 py-2 ${isScrolled ? "text-black" : isOpen ? "text-black" : "text-white"
              }`}
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} fontSize={24} />
          </button>
        </div>

        {/* Animated Link List */}
        <div
          className={`absolute top-full left-0 w-full transition-all duration-500 ease-in-out ${isOpen ? "bg-white opacity-100 max-h-[500px]" : "bg-transparent opacity-0 max-h-0"
            } lg:static lg:bg-transparent lg:opacity-100 lg:max-h-none lg:flex lg:items-center lg:w-auto`}
        >
          <div
            className={`flex flex-col lg:flex-row ${isOpen ? "justify-start items-start pl-6 py-4" : "justify-center items-center"
              } space-y-4 lg:space-y-0 lg:space-x-8 px-6 w-full`}
          >
            <a
              href="#about"
              onClick={() => scrollToSection("introduction")}
              className={`text-lg transition-colors duration-300 ${isOpen || isScrolled ? "text-black" : "text-white"
                }`}
            >
              About
            </a>
            <a
              href="#methodology"
              onClick={() => scrollToSection("methodology")}
              className={`text-lg transition-colors duration-300 ${isOpen || isScrolled ? "text-black" : "text-white"
                }`}
            >
              Methodology
            </a>
            <a
              href="#features"
              onClick={() => scrollToSection("features")}
              className={`text-lg transition-colors duration-300 ${isOpen || isScrolled ? "text-black" : "text-white"
                }`}
            >
              Features
            </a>
            <a
              href="#results"
              onClick={() => scrollToSection("results")}
              className={`text-lg transition-colors duration-300 ${isOpen || isScrolled ? "text-black" : "text-white"
                }`}
            >
              Results
            </a>
            <a
              href="#recommendations"
              onClick={() => scrollToSection("recommendations")}
              className={`text-lg transition-colors duration-300 ${isOpen || isScrolled ? "text-black" : "text-white"
                }`}
            >
              Recommendations
            </a>
            <a
              href="/apk/solace.apk"
              download
              className="text-lg transition-colors duration-300 text-white px-4 py-2 w-full text-center rounded"
              style={{ background: "var(--dark-neon)" }}
            >
              Download App
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
}
