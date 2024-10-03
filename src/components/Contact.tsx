import SocialConnect from "./SocialConnect";

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

      <SocialConnect />
    </section>
  );
};

export default Contact;
