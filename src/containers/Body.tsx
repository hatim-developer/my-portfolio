import Divider from "components/Divider";
import Hero from "components/Hero";
import Services from "containers/Services";
import Experience from "./Experience";
import Projects from "./ProjectsList";
import Contact from "components/Contact";

const Body = () => {
  return (
    <main id="main" className="mx-auto max-w-screen-lg">
      <Hero />
      <Divider />
      <Services />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
    </main>
  );
};

export default Body;
