"use client";

import {  useState, useEffect } from "react";
import Link from "next/link";
import "@/app/globals.css";
import { ModeToggle } from "./theme-chng-btn";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'], // Or any other subsets you need
  weight: ['400', '600', '700'], // Specify the weights you want to use
});

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavTopVisible, setIsNavTopVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsNavTopVisible(false);
      } else {
        // Scrolling up
        setIsNavTopVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  return (
    <nav
      className={`${nunitoSans.className} bg-background flex flex-col items-center justify-center main-navbar sticky top-0 z-50 transition-all duration-300 ${
        isNavTopVisible ? "" : "top-[-5%]"
      }`}
    >
      <div
        className={` bg-background flex items-center px-4 py-3 w-full nav-top transform transition-all duration-500 ease-in-out ${
          isNavTopVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } justify-between md:justify-center`}
      >
        {/* Logo */}
        <h1 className="text-2xl text-foreground">Malayala Kshatriya Samajam</h1>

        {/* Hamburger Button */}
        <button
          className="block md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {isNavTopVisible ? <div className="bg-primary h-[1px] w-3/4"></div> : null}


      {/* Navigation Links */}
      <div
        className={`md:flex md:items-center md:justify-center bg-background ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 text-center">
          <li className="p-4">
            <Link
              href="/"
              className="hover:text-primary relative group transition-all duration-300"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-foreground transition-all duration-300 group-hover:w-full group-hover:bg-primary"></span>
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="/articles"
              className="hover:text-primary relative group transition-all duration-300"
            >
              History
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-foreground transition-all duration-300 group-hover:w-full group-hover:bg-primary"></span>
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="#"
              className="hover:text-primary relative group transition-all duration-300"
            >
              Gallery
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-foreground transition-all duration-300 group-hover:w-full group-hover:bg-primary"></span>
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="/about"
              className="hover:text-primary relative group transition-all duration-300"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-foreground transition-all duration-300 group-hover:w-full group-hover:bg-primary"></span>
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="#"
              className="hover:text-primary relative group transition-all duration-300"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-foreground transition-all duration-300 group-hover:w-full group-hover:bg-primary"></span>
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
