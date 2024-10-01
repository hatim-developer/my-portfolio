import { IWork } from "types";

const WorkDetail = ({ details }: { details: IWork }) => {
  return (
    <article
      className={`px-4 transition-transform`}
      aria-label={`Experience: ${details.role}`}
    >
      <h3 className="mb-2 font-sans text-2xl font-semibold text-primary-color">
        {details.role}
      </h3>
      <p className="text-gray-600 mb-2 font-mono text-sm leading-7 text-secondary-color">
        {details.duration}
      </p>
      <div>
        <ul className="list-outside list-disc pl-4">
          {details.work.map((point, i) => (
            <li
              key={i}
              className="font-mono text-sm leading-8 text-secondary-color"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
export default WorkDetail;
