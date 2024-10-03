export interface IService {
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface IWork {
  role: string;
  employer: string;
  duration: string;
  work: string[];
}

type TLink = {
  type: "github" | "link" | "play_store" | "app_store";
  address: string;
};

export interface IProject {
  title: string;
  description: string;
  thumbnail: string;
  skills: string[];
  links: TLink[];
}

export type TImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
