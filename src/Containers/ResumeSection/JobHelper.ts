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
    jobTitle: "Web Developer Co-op",
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
      "Spearheaded the development of a plethora of <strong>fullstack</strong> features for the company's geotechnical data management platform, used daily by hundreds of engineers, enhancing their daily operational efficiency and decision-making abilities",
      "Independently developed a plot to display <strong>NOAA National Water Model</strong> data using <strong>ChartJS</strong> allowing engineers to easily visualize time-series data integrated with hazard-site specific information",
      "Expanded the 'Admin Tool' UI to allow direct database modifications through <strong>Entity Framework</strong>, saving hundreds of hours of development time, reducing lead-times, and streamlining multiple processes to meet stakeholder needs",
      "Led a large-scale refactor, creating an intuitive interface that replaced manual code-based feature configuration, saving hundreds of development hours. Collaborated with stakeholders to define and integrate functional and technical requirements",
      "Undertook a major refactor of the internal token system, significantly enhancing application reliability by enabling continued functionality during external service outages, eliminating weekly downtime, and improving code quality and maintainability",
      "Led a team of developers as <strong>Scrum Master</strong>, collaborating with product owners, engineers, and stakeholders to define requirements, ensuring all tickets were aligned with client expectations and delivered to specification",
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
      "Independently developed a test automation framework written in python using <strong>PyTest</strong> and <strong>Selenium</strong> which runs nightly on an <strong>Azure Pipeline</strong> to monitor system-critical apis and microservices reducing lead time by automating failure notification emails to the QA team",
      "Created and executed test plans using both automated and manual testing methods to verify backend cloud systems consisting of <strong>Azure Function Apps</strong>, <Strong>Service Buses</strong>, and <strong>SQL jobs/databases</strong> ensuring reliable system performance and correctness",
      "Refactored and updated existing <strong>python automations</strong> to respond to functional changes and to improve code quality and stability",
      "<strong>Co-ordinated 3 production releases</strong> of Cambio's flagship software, keeping track of testing progress and assuring all release deadlines were completed",
      "Implemented <strong>multi-threading</strong> for API tests, accelerating test execution by 400% and significantly reducing overall runtime.",
      "Built, refactored, and updated python automation tests to respond to functional changes and to improve code maintainability, expanding coverage to 80% of existing microservices, saving hundreds of hours of QA testing capacity.",
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
      "Worked weekends part-time during school and full-time during breaks",
    ],
  },
];
