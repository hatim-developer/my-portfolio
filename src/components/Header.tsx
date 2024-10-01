import logo from "assets/img/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 bg-body-color shadow-sm shadow-all-color-950">
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
            <li className="hover:text-neutral-color">About</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
