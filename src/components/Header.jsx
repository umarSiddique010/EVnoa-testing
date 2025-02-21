import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/ev-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--bg-color)] h-auto w-full">
      <nav
        className="flex justify-between items-center px-7 py-10
        h-28 w-full bg-gradient-to-b from-[#f6f9fc47] via-[#f6f9fc47] to-[#f6f9fc47] backdrop-blur-md
        text-black fixed top-0 left-0 right-0 z-[100] shadow-lg shadow-[var(--second-color)]"
      >
        {/* Logo */}
        <div className="h-fit w-fit">
          <Link to="/">
            <img
              className="h-20 w-28 cursor-pointer"
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <ul
          className={`fixed top-0 left-0 w-full h-screen
           flex flex-col items-center justify-center gap-6 font-lg
          transition-transform duration-500 ease-in-out z-[99] 
          md:relative md:flex md:h-auto md:flex-row md:bg-none md:bg-transparent md:top-auto md:left-auto md:gap-8 md:text-2xl md:font-bold md:justify-around md:w-auto
          ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <li
            className="transition-all ease-in-out delay-75 duration-500 hover:text-ev-gold hover:scale-110 hover:tracking-wider"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="transition-all ease-in-out delay-75 duration-500 hover:text-ev-gold hover:scale-110 hover:tracking-wider"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link to="/products">Products</Link>
          </li>
          <li
            className="transition-all ease-in-out delay-75 duration-500 hover:text-ev-gold hover:scale-110 hover:tracking-wider"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className="transition-all ease-in-out delay-75 duration-500 hover:text-ev-gold hover:scale-110 hover:tracking-wider"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li
            className="transition-all ease-in-out delay-75 duration-500 hover:text-ev-gold hover:scale-110 hover:tracking-wider"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>

        {/* Hamburger Menu (Visible on Small Screens) */}
        <button
          className="md:hidden text-3xl text-ev-gold z-[101] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
