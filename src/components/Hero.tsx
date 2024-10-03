import profilePhoto from "assets/img/profile_photo.png";
import SkillList from "containers/SkillList";

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-min-height flex scroll-mt-40 flex-col items-center justify-evenly px-4 md:flex-row"
      aria-label="Profile details and about me"
    >
      <article
        id="profile"
        className="flex flex-col items-center justify-center md:w-1/2"
        aria-label="Profile details"
      >
        <div id="profile_pic" className="p-4">
          <img
            src={profilePhoto}
            alt="Profile Picture"
            className="h-auto w-auto max-w-52 rounded-full p-1 ring-2 ring-secondary-color sm:max-w-72"
          ></img>
        </div>
        <h1 className="text-nowrap py-2 text-center font-sans text-4xl font-bold text-primary-color">
          Mohammed Hatim
        </h1>
        <h2 className="text-nowrap text-right font-sans text-xl text-secondary-color">
          Senior Frontend Engineer
        </h2>
        <p className="my-4 text-center font-sans text-neutral-color">
          <span className="text-nowrap text-highlight-color">
            I love coding
          </span>{" "}
          & build the products loved by audience.
        </p>
      </article>
      <article
        id="about"
        className="flex w-5/6 flex-col items-center text-justify text-base leading-8 text-neutral-color md:w-1/2"
        aria-label="About me"
      >
        <hr className="my-4 h-1 w-5/6 md:hidden"></hr>

        <p className="mb-4 indent-8">
          Hey 👋, Hatim here, I am
          <span className="font-semibold text-secondary-color">
            {" "}
            Senior Front End Engineer{" "}
          </span>
          having 7+ years of experience in software industry developing the{" "}
          <span className="font-semibold text-secondary-color">
            beautiful websites, games and apps,{" "}
          </span>
          I find joy in creating
          <span className="font-semibold text-secondary-color">
            {" "}
            web products{" "}
          </span>
          see their impact in society.
        </p>

        <p className="mb-4">
          Currently at Hashcube Software, building the{" "}
          <strong>
            engaging games, websites for internal microservices, playable ads
            and mentoring the junior developers.
          </strong>
        </p>

        <p className="mb-2">
          Grown up in Athani, Karnataka, India.{" "}
          <strong>
            I love coding, cooking tasty dishes, eating them, playing games,
            learning new things and improving my self.
          </strong>
        </p>

        <section
          className="-order-1 mt-2 md:order-1 md:mt-6"
          aria-label="Top skills"
        >
          <h2 className="text-center text-secondary-color md:text-left md:after:content-[':']">
            Top Skills
          </h2>
          <SkillList
            skills={[
              "Javascript",
              "Typescript",
              "React",
              "Html & Css",
              "Tailwindcss",
              "Phaser",
              "PixiJs",
              "Cocos2d",
              "Cocos Creator",
            ]}
            className="md:justify-start"
          />
        </section>
      </article>
    </section>
  );
};

export default Hero;
