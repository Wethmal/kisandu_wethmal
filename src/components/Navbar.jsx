import React, { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiMenu, BiX } from "react-icons/bi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 z-20 w-full flex justify-center px-4">
      {/* Glass Container */}
      <div className="flex w-full max-w-7xl items-center justify-between
        rounded-2xl border border-white/20
        bg-black/60 backdrop-blur-xl
        px-6 py-4 md:px-12 text-white shadow-lg shadow-black/40">

        {/* Logo */}
        <a
          href="#home"
          className="bg-gradient-to-r from-blue-500 to-pink-500
          bg-clip-text text-transparent text-2xl font-semibold
          opacity-90 hover:opacity-100 transition"
        >
          Kisandu Wethmal
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm">
          <li><a href="#home" className="opacity-70 hover:opacity-100">Home</a></li>
          <li><a href="#tech" className="opacity-70 hover:opacity-100">Tech</a></li>
          <li><a href="#projects" className="opacity-70 hover:opacity-100">Projects</a></li>
          <li><a href="#contact" className="opacity-70 hover:opacity-100">Contact</a></li>
        </ul>

        {/* Desktop Icons */}
        <ul className="hidden md:flex gap-5 text-xl">
          <li className="opacity-70 hover:opacity-100 hover:text-blue-500 cursor-pointer">
            <BsLinkedin />
          </li>
          <li className="opacity-70 hover:opacity-100 hover:text-gray-300 cursor-pointer">
            <BsGithub />
          </li>
        </ul>

        {/* Mobile Icon */}
        <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 w-[90%] max-w-sm
          rounded-2xl border border-white/10
          bg-black/80 backdrop-blur-xl
          md:hidden shadow-lg shadow-black/50">

          <ul className="flex flex-col items-center gap-6 py-6 text-white">
            <li><a onClick={() => setIsOpen(false)} href="#home">Home</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#tech">Tech</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#projects">Projects</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#contact">Contact</a></li>

            <div className="flex gap-6 pt-4 text-xl">
              <BsLinkedin />
              <BsGithub />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
