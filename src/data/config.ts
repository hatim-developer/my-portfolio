import { IService, IWork } from "types";

export const services: IService[] = [
  {
    title: "Game Development",
    description:
      "Crafting immersive 2D casual games for web (HTML5 Canvas) and mobile platforms (Android and iOS) with engaging gameplay and seamless performance.",
    icon: "game",
    skills: [
      "Cocos2d",
      "Cocos Creator",
      "Pixi",
      "Phaser",
      "HTML5",
      "JavaScript",
      "TypeScript",
      "WebGL",
      "RxJS",
    ],
  },
  {
    title: "App Development",
    description:
      "Building intuitive and responsive cross platform mobile apps that deliver a polished user experience across both iOS and Android devices.",
    icon: "smartphone",
    skills: [
      "React Native",
      "Flutter",
      "Java",
      "Objective C",
      "Firebase",
      "Ads",
      "IAP",
    ],
  },
  {
    title: "Web Development",
    description:
      "Developing scalable, accessible and responsive websites that combine modern design with optimal performance for businesses and individuals.",
    icon: "computer",
    skills: [
      "React",
      "HTML",
      "CSS",
      "Tailwindcss",
      "JavaScript",
      "Typescript",
      "Node.js",
      "Express",
      "MySql",
    ],
  },
];

export const experience: IWork[] = [
  {
    role: "Senior Software Engineer • Team Lead",
    employer: "Hashcube Software - II",
    duration: "Aug 2020 - Present",
    work: [
      "Continuously improving user-engagement, retention and revenue by Developing and maintaining liveOps • leaderboard • sale • rewarding features",
      "Developed a LiveOps website for product team to create LiveOps events and push to production server with minimal effort : benefits are made events creation simple and visual, removed engineering dependency and saved effort and time",
      "Improving decision making and impact data analysis operations by storing valuable user progress and data of games",
      "Developed reusable modules across games which reduced development time and improved productivity",
      "Participate in planning and scheduling tasks, ensuring timely delivery of milestones and project goals",
      "Conduct regular code reviews and ensure adherence to coding standards and best practices",
      "Contributing to the growth of organization by aligning team goals • improving individual productivity • ensuring on time releases • improving cross functional team communication • Mentoring junior developers",
    ],
  },

  {
    role: "Software Engineer",
    employer: "Hashcube Software - I",
    duration: "Feb 2019 - Jul 2020",
    work: [
      "Developed 2 big games from scratch with cocos2djs framework and shipped to 1 millions+ users on ios, android platforms within 6 months",
      "Implemented animated playable ads which improved campaigns performance",
      "Worked on a 2 facebook instant game features",
      "Improved performance and user experience by fixing top ANRs, Crashes",
      "Reduced loading time • optimized assets - impacted boost in organics and search ranking",
    ],
  },

  {
    role: "HTML5 Game Developer",
    employer: "Educational Initiatives",
    duration: "Jul 2017 - Jan 2019",
    work: [
      "Developed and shipped 3 Ed-Tech based HTML5 games for grade 1 to 8 students",
      "Made learning easy for students by implementing 50+ animated interactive across subjects physics, maths, and english",
      "Developed geometry drawing tool - for grade 2 and 3 students to play around the basic point, lines, triangles and poly shapes",
      "Improved quality and performance of games and interactive by fixing major bugs which improved the avg. session time by 20% and increased product ratings",
    ],
  },
];
