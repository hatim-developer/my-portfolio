const SkillList = ({ skills }: { skills: string[] }) => {
  return (
    <ul className="md: mx-auto flex flex-row flex-wrap justify-center md:justify-start">
      {skills.map((skill) => {
        return (
          <li
            key={skill.toLocaleLowerCase()}
            className="bg-highlight-color/10 text-highlight-color mr-1.5 mt-2 rounded-full px-3 py-1 text-sm"
          >
            {skill}
          </li>
        );
      })}
    </ul>
  );
};

export default SkillList;
