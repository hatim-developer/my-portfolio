import { IProject, IService, IWork } from "types";

/// Services Data --------------------
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

/// Experience Data ------------------
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

/// Projects Data --------------------
export const projects: IProject[] = [
  {
    title: "Mahjong Tile Match Quest",
    description:
      "A most fun and amazing puzzle 2D mahjong tile matching game with multiple variations and challenges.",
    thumbnail: "mahjong_quest.png",
    skills: [
      "Typescript",
      "Cocos2d",
      "LiveOps",
      "IAP",
      "Firebase",
      "Ironsource Ads",
      "AJAX",
    ],
    links: [
      {
        type: "play_store",
        address:
          "https://play.google.com/store/apps/details?id=com.hashcube.mahjongfree",
      },
      {
        type: "app_store",
        address:
          "https://apps.apple.com/us/app/mahjong-quest-majong-games/id1227443330",
      },
    ],
  },

  {
    title: "Sudoku Quest",
    description:
      "Sudoku Quest has brain challenging CLASSIC SUDOKU puzzles. Over 2000+ Challenging Levels.",
    thumbnail: "sudoku_quest.png",
    skills: [
      "Javascript",
      "Cocos2d",
      "Daily Puzzle",
      "IAP",
      "Firebase",
      "Applovin ads",
      "AJAX",
    ],
    links: [
      {
        type: "play_store",
        address:
          "https://play.google.com/store/apps/details?id=com.hashcube.sudokuquest",
      },
      {
        type: "app_store",
        address:
          "https://apps.apple.com/us/app/sudoku-quest-color-soduku-game/id671755288",
      },
    ],
  },

  {
    title: "Space Jump - HTML5",
    description:
      "Is a fun and interactive 2D game designed to teach young students the basics of mouse and keyboard interactions.",
    thumbnail: "space_jump.png",
    skills: ["Javascript", "HTML5", "Phaser", "CSS", "jQuery", "XML"],
    links: [],
  },

  {
    title: "Num Jump - HTML5",
    description:
      "Is a fun and interactive 2D game designed to teach young students the basic concepts of addition and subtraction.",
    thumbnail: "num_jump.png",
    skills: ["Javascript", "HTML5", "Phaser", "CSS", "jQuery", "XML"],
    links: [],
  },

  {
    title: "Drone Dash - HTML5",
    description:
      "Is a fun and engaging horizontal multiplayer racing game where students can compete against each other.",
    thumbnail: "drone_dash.png",
    skills: [
      "Javascript",
      "HTML5",
      "Cocos2d",
      "Websocket",
      "Multiplayer",
      "XML",
    ],
    links: [],
  },

  {
    title: "Toy Factory - HTML5",
    description:
      "Is an educational game designed to help young students learn counting by counting toys in a factory setting. ",
    thumbnail: "toy_factory.png",
    skills: ["Javascript", "HTML5", "Phaser", "CSS", "jQuery", "XML"],
    links: [],
  },

  {
    title: "Game-A-Thon Website",
    description:
      "A responsive website for an event hosted in different schools to create excitement among student about our games.",
    thumbnail: "web_game_a_thon.png",
    skills: [
      "HTML5",
      "CSS3",
      "Javascript",
      "Bootstrap",
      "Responsive",
      "jQuery",
      "AWS",
      "Lambda",
      "RDBMS",
    ],
    links: [
      {
        type: "link",
        address: "https://ei-gameathon.mindspark.in/gameathon/index_1.php",
      },
    ],
  },

  {
    title: "LiveOps Manager Website",
    description:
      "A responsive website for management of liveOps events & hosting of tournaments and sales for games from server.",
    thumbnail: "web_liveops.png",
    skills: [
      "React",
      "Typescript",
      "AJAX",
      "HTML",
      "CSS3",
      "AWS",
      "NodeJs",
      "Express",
      "RDBMS",
    ],
    links: [
      {
        type: "link",
        address: "https://mahjong.hashcube.com/event",
      },
    ],
  },
];
