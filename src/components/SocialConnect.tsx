import { ICON_PATH } from "constants";
import LinkIcon from "./LinkIcon";

const SocialConnect = () => {
  return (
    <article
      className="flex w-max justify-end space-x-4 p-4"
      aria-label="contact social links"
    >
      <LinkIcon
        icon={`${ICON_PATH + "github"}.svg`}
        link="https://github.com/hatim-developer"
        className="w-12 transition-transform hover:scale-105"
      />
      <LinkIcon
        icon={`${ICON_PATH + "linkedin"}.svg`}
        link="https://www.linkedin.com/in/mohammedhatim/"
        className="w-12 transition-transform hover:scale-105"
      />
      <LinkIcon
        icon={`${ICON_PATH + "mail"}.svg`}
        link={"mailto:hatim.developer@gmail.com"}
        className="w-12 transition-transform hover:scale-105"
      />
    </article>
  );
};
export default SocialConnect;
