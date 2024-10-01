import Divider from "components/Divider";
import Hero from "components/Hero";
import Services from "containers/Services";
import Experience from "./Experience";

const Body = () => {
  return (
    <main id="main" className="mx-auto max-w-screen-lg">
      <Hero />
      <Divider />
      <Services />
      <Divider />
      <Experience />
    </main>
  );
};

export default Body;
