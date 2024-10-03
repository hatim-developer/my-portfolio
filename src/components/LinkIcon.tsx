const LinkIcon = ({
  icon,
  link,
  className,
}: {
  icon: string;
  link: string;
  className?: string;
}) => {
  return (
    <a
      href={link}
      className={`bg-body-color-secondary/70 hover:bg-body-color-secondary w-10 cursor-pointer rounded-xl p-2 ${className ? className : ""}`}
      target="_blank"
    >
      <img className="text-sm text-neutral-color" src={icon} alt="icon"></img>
    </a>
  );
};

export default LinkIcon;
