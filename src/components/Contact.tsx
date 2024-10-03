import { ICON_PATH } from "constants";
import LinkIcon from "./LinkIcon";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-min-height flex scroll-mt-40 flex-col items-center justify-center px-4 py-8"
      aria-label="Contact Me"
    >
      <h2 className="mb-8 text-center text-3xl text-secondary-color md:mb-10 md:text-4xl">
        Let's Connect!
      </h2>
      <p className="max-w-xl text-center font-mono leading-8 text-neutral-color">
        I'm always open to discussing exciting opportunities, potential
        collaborations, or new projects.
        <br></br>
        Reach out through the platforms below, and let's see how we can work
        together!
      </p>

      <section
        className="flex w-max justify-end space-x-4 p-4"
        aria-label="contact social links"
      >
        <LinkIcon
          icon={`${ICON_PATH + "github"}.svg`}
          link="https://github.com/hatim-developer"
          className="w-12 transition-transform hover:scale-105"
        />
        <LinkIcon
          icon={`${ICON_PATH + "linkedin"}.svg`}
          link="https://www.linkedin.com/in/mohammedhatim/"
          className="w-12 transition-transform hover:scale-105"
        />
        <LinkIcon
          icon={`${ICON_PATH + "mail"}.svg`}
          link={"mailto:hatim.developer@gmail.com"}
          className="w-12 transition-transform hover:scale-105"
        />
      </section>
    </section>
  );
};

export default Contact;
