import logo from "assets/img/logo.png";

const Header = () => {
  return (
    <header className="shadow-shadow-color sticky top-0 z-10 bg-body-color shadow-md">
      <section className="mx-auto flex max-w-screen-lg flex-row flex-wrap items-center justify-between px-4 py-3">
        <img
          src={logo}
          alt="Logo"
          className="max-w-10 cursor-pointer rounded-lg"
        />
        <nav className="font-mono text-sm text-secondary-color">
          <button id="hamburger" className="text-3xl sm:hidden">
            &#9776;
          </button>
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
      </section>
    </header>
  );
};

export default Header;
