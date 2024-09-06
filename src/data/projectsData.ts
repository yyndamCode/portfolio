import image1 from "@/../public/image(1).jpg";
import { StaticImageData } from "next/image";

export interface Project {
    id: number;
    image: StaticImageData ;
    title: string;
    description: string;
    techStack: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        image: image1,
        title: "Crypto Screener Application",
        description: "I'm Evren Shah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        techStack: "React, TypeScript, Next.js"
    },
    {
        id: 2,
        image: image1,
        title: "E-commerce Platform",
        description: "A complete e-commerce platform that offers all the essential features, including product management, user authentication, and a shopping cart.",
        techStack: "React, Redux, Node.js, Express, MongoDB"
    },
    {
        id: 3,
        image: image1,
        title: "Social Media Dashboard",
        description: "A social media dashboard with integrated analytics and insights for multiple platforms, providing a comprehensive overview of your social presence.",
        techStack: "Vue.js, Vuex, Firebase"
    },
    {
        id: 4,
        image: image1,
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my skills, projects, and experience in web development.",
        techStack: "Gatsby, GraphQL, Styled Components"
    },
    {
        id: 5,
        image: image1,
        title: "Real-Time Chat Application",
        description: "A real-time chat application with multiple chat rooms, private messaging, and notification features.",
        techStack: "React, Socket.io, Node.js, Express"
    },
    {
        id: 6,
        image: image1,
        title: "Weather Forecast App",
        description: "A weather forecast application that provides current and future weather conditions for any location worldwide.",
        techStack: "Angular, TypeScript, OpenWeatherMap API"
    }

    // Diğer projeleri buraya ekleyebilirsiniz
];
