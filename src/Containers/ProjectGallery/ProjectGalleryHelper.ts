import { IMedia } from "../../Components/MediaCarousel/MediaCarousel";

export interface ILink {
  displayText: string;
  url: string;
}

export interface IProjectData {
  id: number;
  mediaList: IMedia[];
  longDescription: string;
  links: ILink[];
  title: string;
  technologies: string[];
  thumbnail: string;
  shortDescription: string;
}

export const ProjectData: IProjectData[] = [
  {
    id: 1,
    mediaList: [
      {
        type: "VIDEO",
        url: "https://youtube.com/embed/OhG_MD-7fWA",
        caption: "YouTube video for the Workday Chrome Extension",
      },
      {
        type: "IMAGE",
        url: "https://i.imgur.com/RTYmrt9.png",
        caption: "Picture of Workday with the Chrome Extension",
      },
      {
        type: "IMAGE",
        url: "https://i.imgur.com/TK9QL6D.png",
        caption: "Popup information for selected course",
      },
      // {
      //   type: "IMAGE",
      //   url: "https://i.imgur.com/SKon7hA.png",
      //   caption: "Close-up Image of the etension",
      // },
    ],
    links: [
      {
        displayText: "Chrome Web Store",
        url: "https://chromewebstore.google.com/detail/ubc-workday-side-by-side/gonljejijjjmjccdbjokcmmdfmlincmh?hl=en",
      },
      {
        displayText: "GitHub",
        url: "https://github.com/mlool/workday-calendar-extension",
      },
    ],
    title: "UBC Workday Chrome Extension",
    technologies: ["React", "Business Development", "Project Management"],
    shortDescription:
      "A Chrome Extension created to combat Workday's poor UI/UX.  Over 5000 active users",
    longDescription:
      "A Chrome Extension created to combat Workday's poor UI/UX, attracting over 5000 users and a very active discord community!  Adds a handly calendar on the side of Workday.  Very useful for registering courses as there is now easy way to see time conflicts in Workday.   Open source project maintained by a small group of developers.  The extension is created using REACT and Typescript and CSS.  Data from RateMyProf, and UBC Grades, two very popular websites for students to judge whether or not to take a course, has been integrated into the extension using APIs, greatly improving the course registration efficiency of students. ",
    thumbnail: "https://i.imgur.com/HO4w0L2.png",
  },
  {
    id: 2,
    mediaList: [
      {
        type: "VIDEO",
        url: "https://www.youtube.com/embed/MIYOK05I0uc?si=WPDKa8cSp830u83M",
        caption: "YouTube demo of ItinerAI",
      },
      {
        type: "IMAGE",
        url: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/933/555/datas/gallery.jpg",
        caption: "Picture of the website",
      },
    ],
    links: [
      {
        displayText: "ItinerAI Website",
        url: "https://thankful-tree-0ba95a70f.5.azurestaticapps.net/",
      },
      {
        displayText: "Hackathon Page",
        url: "https://devpost.com/software/itinerai",
      },
    ],
    title: "ItinerAI - Microsoft AI Hackathon",
    technologies: ["Azure", "Machine Learning", "Python"],
    shortDescription:
      "A travel app with integrated custom chatbot to create itineraries.  Made with friends for a Microsoft Hackathon",
    longDescription:
      "ItinerAI is a web app designed to make trip planning easier.  We created a custom chabot using Azure's Open AI which can query an Azure Cosmos DB using vector searches to find related locations.  Our app provides a seamless experience by allowing you to effortlessly view your itinerary items on an interactive map, complete with directions. With the help of our intelligent chatbot, you can receive personalized location suggestions and easily add new destinations to your itinerary. Additionally, you have the flexibility to manually rearrange and edit locations, ensuring your travel plans are perfectly tailored to your preferences. This integration makes your journey both enjoyable and efficient, giving you full control over your itinerary with ease.  We used REACT with typescript ad node JS as backend. The frontend is deployed using an Azure Static WebApp, which hosts this node JS server as an Azure Function App. The node server talks to our Container App, which hosts a LangChain agent connected to our Azure Cosmos Mongo DB and the AzureOpenAI agent. The node server is able to take all the information back, update the directions using the google maps API, and then serve the data to the front end.",
    thumbnail:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/933/555/datas/gallery.jpg",
  },
  // {
  //   id: 3,
  //   mediaList: [
  //     {
  //       type: "VIDEO",
  //       url: "https://www.youtube.com/embed/MIYOK05I0uc?si=WPDKa8cSp830u83M",
  //       caption: "YouTube demo of ItinerAI",
  //     },
  //     {
  //       type: "IMAGE",
  //       url: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/933/555/datas/gallery.jpg",
  //       caption: "Picture of the website",
  //     },
  //   ],
  //   links: [
  //     {
  //       displayText: "ItinerAI Website",
  //       url: "https://thankful-tree-0ba95a70f.5.azurestaticapps.net/",
  //     },
  //   ],
  //   title: "ItinerAI - Microsoft AI Hackathon",
  //   technologies: ["Azure", "Machine Learning", "Python"],
  //   shortDescription:
  //     "A cool machine learning project using LangChain.  Created with Friends",
  //   longDescription: "asds",
  //   thumbnail:
  //     "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/933/555/datas/gallery.jpg",
  // },
  // {
  //   id: 4,
  //   mediaList: [
  //     {
  //       type: "VIDEO",
  //       url: "https://www.youtube.com/embed/MIYOK05I0uc?si=WPDKa8cSp830u83M",
  //       caption: "YouTube demo of ItinerAI",
  //     },
  //     {
  //       type: "IMAGE",
  //       url: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/933/555/datas/gallery.jpg",
  //       caption: "Picture of the website",
  //     },
  //   ],
  //   links: [
  //     {
  //       displayText: "ItinerAI Website",
  //       url: "https://thankful-tree-0ba95a70f.5.azurestaticapps.net/",
  //     },
  //   ],
  //   title: "ItinerAI - Microsoft AI Hackathon",
  //   technologies: ["Azure", "Machine Learning", "Python"],
  //   shortDescription:
  //     "A cool machine learning project using LangChain.  Created with Friends",
  //   longDescription: "asds",
  //   thumbnail:
  //     "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/933/555/datas/gallery.jpg",
  // },
  // {
  //   id: 5,
  //   mediaList: [
  //     {
  //       type: "VIDEO",
  //       url: "https://www.youtube.com/embed/MIYOK05I0uc?si=WPDKa8cSp830u83M",
  //       caption: "YouTube demo of ItinerAI",
  //     },
  //     {
  //       type: "IMAGE",
  //       url: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/933/555/datas/gallery.jpg",
  //       caption: "Picture of the website",
  //     },
  //   ],
  //   links: [
  //     {
  //       displayText: "ItinerAI Website",
  //       url: "https://thankful-tree-0ba95a70f.5.azurestaticapps.net/",
  //     },
  //   ],
  //   title: "ItinerAI - Microsoft AI Hackathon",
  //   technologies: ["Azure", "Machine Learning", "Python"],
  //   shortDescription:
  //     "A cool machine learning project using LangChain.  Created with Friends",
  //   longDescription: "asds",
  //   thumbnail:
  //     "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/933/555/datas/gallery.jpg",
  // },
  // {
  //   id: 6,
  //   mediaList: [
  //     {
  //       type: "VIDEO",
  //       url: "https://www.youtube.com/embed/MIYOK05I0uc?si=WPDKa8cSp830u83M",
  //       caption: "YouTube demo of ItinerAI",
  //     },
  //     {
  //       type: "IMAGE",
  //       url: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/933/555/datas/gallery.jpg",
  //       caption: "Picture of the website",
  //     },
  //   ],
  //   links: [
  //     {
  //       displayText: "ItinerAI Website",
  //       url: "https://thankful-tree-0ba95a70f.5.azurestaticapps.net/",
  //     },
  //   ],
  //   title: "ItinerAI - Microsoft AI Hackathon",
  //   technologies: ["Azure", "Machine Learning", "Python"],
  //   shortDescription:
  //     "A cool machine learning project using LangChain.  Created with Friends",
  //   longDescription: "asds",
  //   thumbnail:
  //     "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/933/555/datas/gallery.jpg",
  // },
];
