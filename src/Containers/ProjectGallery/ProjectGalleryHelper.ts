import { Icon } from "../../Components/Chip/Chip.tsx";
import { IMedia } from "../../Components/MediaCarousel/MediaCarousel";

export interface ILink {
  displayText: string;
  url: string;
  icon?: Icon;
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
        icon: Icon.WEBSITE,
      },
      {
        displayText: "GitHub",
        url: "https://github.com/mlool/workday-calendar-extension",
        icon: Icon.github,
      },
    ],
    title: "UBC Workday Chrome Extension",
    technologies: [
      "React",
      "Project Management",
      "TypeScript",
      "HTML/CSS",
      "Bussiness Development",
      "APIs",
    ],
    shortDescription:
      "A Chrome Extension created to combat Workday's poor UI/UX.  Over 5000 active users and a growing community.",
    longDescription:
      "A Chrome Extension created to combat Workday's poor UI/UX, attracting over 5000 users and a very active discord community!  Adds a handy calendar on the side of Workday.  Very useful for registering courses as there is now an easy way to see time conflicts in Workday.   Open source project maintained by a small group of developers.  The extension is created using REACT and Typescript and CSS.  Data from RateMyProf, and UBC Grades, two very popular websites for students to judge whether or not to take a course, has been integrated into the extension using APIs, greatly improving the course registration efficiency of students. ",
    thumbnail: "https://i.imgur.com/nsyuHtF.png",
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
        displayText: "Hackathon Page",
        url: "https://devpost.com/software/itinerai",
        icon: Icon.WEBSITE,
      },
    ],
    title: "ItinerAI - Microsoft AI Hackathon (Top 10)",
    technologies: [
      "Azure",
      "Python",
      "Machine Learning",
      "React",
      "Docker",
      "Github Actions",
      "CI/CD Workflow",
    ],
    shortDescription:
      "A travel app with integrated custom chatbot to create itineraries.  Made with friends for a Microsoft Hackathon (Top 10 Project)",
    longDescription:
      "ItinerAI is a web app designed to make trip planning easier.  We created a custom chabot using Azure's Open AI which can query an Azure Cosmos DB using vector searches to find related locations.  Our app provides a seamless experience by allowing you to effortlessly view your itinerary items on an interactive map, complete with directions. With the help of our intelligent chatbot, you can receive personalized location suggestions and easily add new destinations to your itinerary. Additionally, you have the flexibility to manually rearrange and edit locations, ensuring your travel plans are perfectly tailored to your preferences. This integration makes your journey both enjoyable and efficient, giving you full control over your itinerary with ease.",
    thumbnail: "https://i.imgur.com/xhePixJ.png",
  },
  {
    id: 3,
    mediaList: [
      {
        type: "IMAGE",
        url: "https://user-images.githubusercontent.com/89222842/169706361-704ac905-502d-4a1d-b550-7f3210375979.png",
        caption: "Picture of the game",
      },
      {
        type: "IMAGE",
        url: "https://user-images.githubusercontent.com/89222842/169706366-9099ad91-ac62-4e66-83a9-0dd2fde57bf5.png",
        caption: "Custom shop UI",
      },
      {
        type: "IMAGE",
        url: "https://user-images.githubusercontent.com/89222842/169706487-86e326fb-19f1-40ff-8ec1-11d62836486a.png",
        caption: "Animated main menu screen",
      },
    ],
    links: [
      {
        displayText: "Github",
        url: "https://github.com/StashC/Space-Survival-Game",
        icon: Icon.github,
      },
    ],
    title: "Space Survival Game",
    technologies: ["Unity", "C#", "Game Dev"],
    shortDescription:
      "A 2D video game made from scratch in Unity using C# for my grade 10 personal project winning first place in my high school.",
    longDescription:
      "A game I made in Grade 10 for my high school passion project, recieving first place in my school's project fair. I spent 5 months creating a videogame and documenting the process for my IB Middle Years Program personal project. This game was inspired by Brackey's 2d Game Development series on YouTube.  All of the game assets were created using Adobe PhotoShop",
    thumbnail: "https://i.imgur.com/R9ZLXPV.png",
  },
];
