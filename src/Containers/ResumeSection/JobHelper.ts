export interface IJob {
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  skills: string[];
  description: string[];
}

export const JobData: IJob[] = [
  {
    company: "Cambio Earth Systems (BGC Engineering)",
    jobTitle: "Fullstack Developer",
    startDate: "May 2023",
    endDate: "Sept 2024",
    skills: [
      "React",
      "C#",
      ".NET",
      "Typescript",
      "SQL",
      "Azure Functions & Service Bus",
      "CSS",
      "Git",
      "CI/CD",
      "Esri ArcGIS",
      "Agile Development",
    ],
    description: [
      "Spearheaded the development of a plethora of fullstack features for the company's geotechnical data management platform, used daily by hundreds of engineers, enhancing their daily operational efficiency and decision-making abilities",
      "Independently developed a plot to display NOAA National Water Model data using ChartJS allowing engineers to easily visualize time-series data integrated with hazard-site specific information",
      "Expanded the 'Admin Tool' UI to allow direct database modifications through Entity Framework, saving hundreds of hours of development time, reducing lead-times, and streamlining multiple processes",
      "Undertook a large refactoring of the internal token system greatly improving the reliability of the application and code quality",
      "Consistently met deadlines for high-priority tickets including urgent requests for clients.",
      "Led a team of developers as the Scrum Master facilitating the Agile process and inspiring collaboration.",
    ],
  },
  {
    company: "Cambio Earth Systems (BGC Engineering)",
    jobTitle: "QA & Test Automation Co-op",
    startDate: "Sept 2022",
    endDate: "May 2023",
    skills: [
      "Python",
      "Azure Pipelines",
      "Selenium",
      "PyTest",
      "Quality Assurance",
      "API Testing",
      "Test Pipeline Stabilization",
    ],
    description: [
      "Independently developed a test automation framework written in python using <strong>PyTest</strong> and <strong>Selenium</strong> which runs nightly on an <strong>Azure Pipeline</strong> to verify and monitor system critical API endpoints and UI workflows",
      "Created and executed test plans using both automated and manual testing methods to verify backend cloud systems consisting of <strong>Azure Function Apps</strong>, <Strong>Service Buses</strong>, and <strong>SQL jobs/databases</strong>",
      "Refactored and updated existing <strong>python automations</strong> to respond to functional changes and to improve code quality and stability",
      "<strong>Co-ordinated 3 production releases</strong> of Cambio's flagship software, keeping track of testing progress and assuring all release deadlines were completed",
    ],
  },
  {
    company: "Cactus Club Cafe",
    jobTitle: "Line & Prep Cook",
    startDate: "Mar 2018",
    endDate: "Sept 2022",
    skills: ["Time Management", "Teamwork", "Leadership"],
    description: [
      "Assisted with training and leading new staff members.",
      "Executed dishes to order with attention to detail and consistency.",
    ],
  },
];
