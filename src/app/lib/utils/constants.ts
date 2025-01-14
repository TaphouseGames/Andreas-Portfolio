export const PRIMARY_COLOR: string = "#2c2c2c";
export const SECONDARY_COLOR: string = "#3a4b57";
export const TERTIARY_COLOR: string = "#ffd700";
export const OFF_WHITE_COLOR: string = "#f5f5f5";

export interface ExperienceObject {
  company: string;
  logo: string;
  title: string;
  description: string[];
  startDate?: Date; // Optional, if using dateRanges instead
  endDate?: Date | "Present"; // Optional, if using dateRanges instead
  dateRanges?: { start: Date; end: Date | "Present" }[]; // Array of date ranges
}

export let experiences: ExperienceObject[] = [
  {
    company: "SoFi",
    logo: "/assets/logos/sofi.png",
    title: "Senior Software Engineer",
    description: [
      "Enhanced system efficiency and scalability by developing and designing both front-end and back-end architectures",
      "Facilitated successful project delivery by collaborating closely with large team of engineers, designers, and project managers",
      "Improved communication between front-end and back-end systems by developing and implementing RESTful APIs",
      "Played key role in adoption of best practices in test automation and unit testing, ensuring high standards of quality and reliability",
      "Rejoined SoFi in August 2024, continuing to drive impactful improvements",
    ],
    dateRanges: [
      { start: new Date(2016, 1), end: new Date(2021, 5) },
      { start: new Date(2024, 7), end: "Present" },
    ],
  },
  {
    company: "Taphouse Games LLC",
    logo: "/assets/logos/taphouse.png",
    title: "Game Developer, Freelance Developer",
    description: [
      "Delivered web development projects on time and within budget, leveraging full tech stack to meet client objectives, including the successful launch of <a href='https://www.memorycollect.com/' class='text-tertiary hover:underline' target='_blank' rel='noopener noreferrer'>MemoryCollect.com</a>",
      "Released game on <a href='https://store.steampowered.com/app/2320890/Midnight_at_the_Disco/' class='text-tertiary hover:underline' target='_blank' rel='noopener noreferrer'>Steam</a> with positive reviews",
      "Enhanced game functionality and user experience by implementing complex features such as shaders, and AI with behavior trees",
    ],
    startDate: new Date(2021, 5),
    endDate: "Present",
  },
  {
    company: "Geomonkey Inc/ Skyyfish",
    logo: "/assets/logos/skyyfish.jpg",
    title: "Software Engineer",
    description: [
      "Improved user experience through development of highly responsive, multi-platform app in Java, HTML, CSS, and JavaScript",
      "Enhanced system usability by contributing to the design and development of a ground control system",
      "Increased software reliability and performance through hands-on testing with real drones in a simulated work environment",
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
      "Developed iPad application using OSX/iOS native code, which was utilized in classrooms to teach kids about history",
      "Fostered effective collaboration within small team of artists and programmers",
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
