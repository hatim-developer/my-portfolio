import WorkDetail from "components/WorkDetail";
import { experience } from "data/config";
import { useState } from "react";

const Experience = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section
      className="section-min-height flex scroll-mt-40 flex-col items-center px-4 py-8"
      aria-label="My Work Experience"
    >
      <h2 className="mb-8 text-center text-3xl text-secondary-color md:mb-10 md:text-4xl">
        Experience
      </h2>

      <section className="flex w-full flex-col gap-8 md:flex-row">
        <div
          className="relative flex w-full flex-row justify-evenly overflow-x-scroll md:w-max md:flex-col md:justify-start md:overflow-x-visible"
          aria-label="experience employer list"
          role="experience selector"
        >
          {experience.map((detail, tab) => {
            return (
              <button
                aria-label={detail.role}
                key={tab}
                tabIndex={tab}
                className={`h-11 flex-1 text-nowrap border-b-2 ${tabIndex === tab ? "border-highlight-color" : "border-neutral-color/50"} px-5 text-center md:flex-none md:border-b-0 md:border-l-2 md:text-left ${tab === tabIndex ? "bg-body-color-secondary text-highlight-color" : "bg-body-color text-neutral-color"} hover:bg-body-color-secondary`}
                onClick={(e) => setTabIndex(e.currentTarget.tabIndex)}
              >
                {detail.employer}
              </button>
            );
          })}
        </div>

        <article className="flex self-stretch" aria-label="Experience details">
          <WorkDetail details={experience[tabIndex]} />
        </article>
      </section>
    </section>
  );
};

export default Experience;
