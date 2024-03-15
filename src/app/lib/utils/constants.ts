export const PRIMARY_COLOR: string = "#2c2c2c";
export const SECONDARY_COLOR: string = "#3a4b57";
export const TERTIARY_COLOR: string = "#ffd700";
export const OFF_WHITE_COLOR: string = "#f5f5f5";

export interface ExperienceObject {
  company: string;
  logo: string;
  title: string;
  description: string[];
  startDate: Date;
  endDate: Date | "Present";
}

export let experiences: ExperienceObject[] = [
  {
    company: "Taphouse Games LLC",
    logo: "/assets/logos/taphouse.png",
    title: "Founder, Game Developer, Freelance Developer",
    description: [
      "Provide specialized skills using full tech stack on contractual basis, combining creativity with technical expertise to assist clients in accomplishing their web development objectives while adhering to budget and timeline limitations",
      "Developing top-down game using Godot game engine and GDscript, with demo available on <a href='https://store.steampowered.com/app/2320890/Midnight_at_the_Disco/' class='text-tertiary hover:underline' target='_blank' rel='noopener noreferrer'>Steam</a>",
      "Working on wide range of tasks including networking, pathfinding with steering behaviors and AI with behavior trees",
    ],
    startDate: new Date(2021, 5),
    endDate: "Present",
  },
  {
    company: "SoFi",
    logo: "/assets/logos/sofi.png",
    title: "Senior Software Engineer",
    description: [
      "Contributed engineering expertise in development of front-facing web application used by thousands",
      "Developed and designed both front-end and back-end system architectures",
      "Worked closely with large team of engineers, designers, project managers and marketers to ensure system met all requirements",
    ],
    startDate: new Date(2016, 1),
    endDate: new Date(2021, 5),
  },
  {
    company: "Geomonkey Inc/ Skyyfish",
    logo: "/assets/logos/skyyfish.jpg",
    title: "Software Engineer",
    description: [
      "Assisted in design and development of ground control system for drones",
      "Developed highly responsive and multi-platform app in Java, HTML, CSS, and Javascript",
    ],
    startDate: new Date(2015, 4),
    endDate: new Date(2016, 0),
  },
  {
    company: "University of Montana",
    logo: "/assets/logos/um.jpg",
    title: "Game Designer/Programmer, iOS developer",
    description: [
      "Designed and implemented educational game using Unity, which is available on <a href='https://store.steampowered.com/app/686660/The_Mice_of_Riddle_Place_The_Incident_of_Izzy_Ramirez/' class='text-tertiary hover:underline' target='_blank' rel='noopener noreferrer'>Steam</a>",
      "Developed educational iPad application in Swift, Objective-C, xCode, and Core Data",
      "Worked with small team of artists and programmers",
    ],
    startDate: new Date(2013, 8),
    endDate: new Date(2015, 4),
  },
];

export let education: ExperienceObject = {
  company: "University of Montana",
  logo: "/assets/logos/um.jpg",
  title: "Bachelor of Science: Computer Science",
  description: [],
  startDate: new Date(2011, 4),
  endDate: new Date(2015, 11),
};
