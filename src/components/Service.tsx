import Divider from "components/Divider";
import { IService } from "types";

const Service = ({ service }: { service: IService }) => {
  return (
    <article
      className={`rounded-lg border border-neutral-color border-opacity-45 bg-all-color-900 p-6 text-center shadow-md shadow-all-color-950 transition-transform hover:scale-105 hover:bg-all-color-950`}
      aria-label={`Service: ${service.title}`}
    >
      <img
        src={`src/assets/icons/${service.icon}.svg`}
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
