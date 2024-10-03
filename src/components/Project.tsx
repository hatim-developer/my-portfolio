import Divider from "components/Divider";
import { IProject } from "types";
import LazyImage from "./LazyImage";
import SkillList from "containers/SkillList";
import LinkIcon from "./LinkIcon";
import { ICON_PATH, THUMBNAIL_PATH } from "constants";

const Project = ({ project }: { project: IProject }) => {
  return (
    <article
      className="bg-body-color-secondary max-w-sm rounded-xl border-2 border-neutral-color/20 text-center transition-transform hover:scale-105 hover:border-highlight-color/80 hover:bg-body-color"
      aria-label={`Project: ${project.title}`}
    >
      <div role="thumbnail" className="relative mx-auto w-full">
        <LazyImage
          placeholderProps={{
            src: `${ICON_PATH}project.svg`,
            alt: `${project.title} thumbnail`,
            className: "mx-auto max-w-14 pt-20",
          }}
          imgProps={{
            className: "rounded-tl-xl rounded-tr-xl",
            src: `${THUMBNAIL_PATH + project.thumbnail}`,
          }}
        />

        {project.links.length ? (
          <div
            className="absolute right-0 top-0 flex w-max justify-end space-x-1 p-1"
            aria-label="project links"
          >
            {project.links.map((linkDetail) => (
              <LinkIcon
                key={linkDetail.type}
                icon={`${ICON_PATH + linkDetail.type}.svg`}
                link={linkDetail.address}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="p-4">
        <h3 className="text-nowrap font-sans text-2xl font-semibold text-primary-color lg:text-xl">
          {project.title}
        </h3>
        <p className="text-gray-600 my-2 font-mono text-sm leading-7 text-secondary-color">
          {project.description}
        </p>
        <Divider />
        <div>
          <SkillList skills={project.skills} />
        </div>
      </div>
    </article>
  );
};
export default Project;
