import logo from "assets/img/logo.png";
import { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="shadow-shadow-color sticky top-0 z-10 bg-body-color shadow-md">
      <section className="mx-auto flex max-w-screen-lg flex-row flex-wrap items-center justify-between px-4 py-3">
        <img
          src={logo}
          alt="Logo"
          className="max-w-10 cursor-pointer rounded-lg"
        />
        <div className="text-secondary-color">
          <button
            id="hamburger"
            className={`relative h-8 w-8 cursor-pointer text-3xl sm:hidden ${mobileMenu ? "toggle-menu" : ""}`}
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            <div className="w- absolute h-1 w-full rounded bg-secondary-color transition-all duration-500 before:absolute before:h-1 before:w-full before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-secondary-color before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-full after:-translate-x-4 after:translate-y-3 after:rounded after:bg-secondary-color after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <nav className="font-mono text-sm" aria-label="main">
            <ul className="hidden flex-row flex-wrap items-center justify-evenly space-x-4 sm:flex md:space-x-10">
              <li className="hover:text-highlight-color">
                <a href="/#hero">Home</a>
              </li>
              <li className="hover:text-highlight-color">
                <a href="/#services">Services</a>
              </li>
              <li className="hover:text-highlight-color">
                <a href="/#experience">Experience</a>
              </li>
              <li className="hover:text-highlight-color">
                <a href="/#projects">Projects</a>
              </li>
              <li className="hover:text-highlight-color">
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section
        id="mobile-menu"
        className={`top-68 absolute min-h-screen w-full origin-top flex-col self-end bg-body-color text-3xl text-secondary-color ${mobileMenu ? "animate-open-menu flex" : "hidden"}`}
        onClick={() => {
          setMobileMenu(!mobileMenu);
        }}
      >
        <nav className="flex flex-col items-center py-4" aria-label="mobile">
          <a
            href="/#hero"
            className="w-full py-6 text-center hover:text-highlight-color"
          >
            Home
          </a>
          <a
            href="/#services"
            className="w-full py-6 text-center hover:text-highlight-color"
          >
            Services
          </a>
          <a
            href="/#experience"
            className="w-full py-6 text-center hover:text-highlight-color"
          >
            Experience
          </a>
          <a
            href="/#projects"
            className="w-full py-6 text-center hover:text-highlight-color"
          >
            Projects
          </a>
          <a
            href="/#contact"
            className="w-full py-6 text-center hover:text-highlight-color"
          >
            Contact
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
