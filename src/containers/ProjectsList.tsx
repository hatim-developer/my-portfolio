import Project from "components/Project";
import { projects } from "data/config";

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-min-height flex scroll-mt-12 flex-col items-center justify-center px-4 py-8"
      aria-label="My services"
    >
      <h2 className="mb-8 text-center text-3xl text-secondary-color md:mb-10 md:text-4xl">
        My Projects
      </h2>
      {/* <div className="font-san flex flex-row justify-center gap-8"> */}
      <div className="font-san grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
