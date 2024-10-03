const SkillList = ({
  skills,
  className,
}: {
  skills: string[];
  className?: string;
}) => {
  return (
    <ul
      className={`md: mx-auto flex flex-row flex-wrap justify-center ${className || ""}`}
    >
      {skills.map((skill) => {
        return (
          <li
            key={skill.toLocaleLowerCase()}
            className="mr-1.5 mt-2 rounded-full bg-highlight-color/10 px-3 py-1 text-sm text-highlight-color"
          >
            {skill}
          </li>
        );
      })}
    </ul>
  );
};

export default SkillList;
