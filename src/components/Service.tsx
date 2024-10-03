import Divider from "components/Divider";
import { ICON_PATH } from "constants";
import { IService } from "types";

const Service = ({ service }: { service: IService }) => {
  return (
    <article
      className="bg-body-color-secondary rounded-xl border-2 border-neutral-color/40 p-6 text-center transition-transform hover:scale-105 hover:border-highlight-color/80 hover:bg-body-color"
      aria-label={`Service: ${service.title}`}
    >
      <img
        src={`${ICON_PATH + service.icon}.svg`}
        alt={`Image ${service.icon} icon`}
        className="mx-auto max-w-14"
      ></img>
      <h3 className="my-4 text-nowrap font-sans text-2xl font-semibold text-primary-color">
        {service.title}
      </h3>
      <p className="text-gray-600 my-6 font-mono text-sm leading-7 text-secondary-color">
        {service.description}
      </p>
      <Divider />
      <div>
        <h4 className="font-medium text-neutral-color">Technologies:</h4>
        {service.skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex px-2 text-sm text-highlight-color/80"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
};
export default Service;
