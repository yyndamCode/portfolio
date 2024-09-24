import image1 from "@/../public/image(1).jpg";
import { StaticImageData } from "next/image";

export interface Project {
    id: number;
    image: StaticImageData ;
    title: string;
    description: string;
    techStack: string;
    gitCode: string;
    livePreviewUrl: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        image: image1,
        title: "Portfolio Website",
        description: "I'am Yhlas. This project is my personal portfolio site where I introduce myself and my skills." +
            " The" +
            " project was created using modern web development technologies and aims to provide a mobile-friendly, fast and impressive user experience. On my portfolio page, I showcase my projects, technical skills and professional background in detail, allowing potential employers and collaborators to get to know me better.",
        techStack: "React, TypeScript, Next.js",
        livePreviewUrl:"https://yhlas-yagageldiyew-gmailcoms-projects.vercel.app/",
        gitCode:"https://github.com/yyndamCode/portfolio"

    },
    {
        id: 2,
        image: image1,
        title: "Exclusive-commerce ",
        description: "A complete e-commerce platform that offers all the essential features, including product management, user authentication, and a shopping cart.",
        techStack: "React, Redux, Node.js, Express, MongoDB",
        livePreviewUrl:"",
        gitCode:"https://github.com/yyndamCode/ecommerce"
    },
    {
        id: 3,
        image: image1,
        title: " Dashboard",
        description: "A social media dashboard with integrated analytics and insights for multiple platforms, providing a comprehensive overview of your social presence.",
        techStack: "html, React.jsx, tailwind css , github",
        livePreviewUrl:"",
        gitCode:"https://github.com/yyndamCode/Dashboard"
    },
    {
        id: 4,
        image: image1,
        title: "Menzil adminka",
        description: "A personal portfolio website showcasing my skills, projects, and experience in web development.",
        techStack: "Gatsby, GraphQL, Styled Components",
        livePreviewUrl:"",
        gitCode:""
    },
    {
        id: 5,
        image: image1,
        title: "Real-Time Chat Application",
        description: "A real-time chat application with multiple chat rooms, private messaging, and notification features.",
        techStack: "React, Socket.io, Node.js, Express",
        livePreviewUrl:"",
        gitCode:""
    },
    {
        id: 6,
        image: image1,
        title: "Weather Forecast App",
        description: "A weather forecast application that provides current and future weather conditions for any location worldwide.",
        techStack: "Angular, TypeScript, OpenWeatherMap API",
        livePreviewUrl:"",
        gitCode:""
    }

    // Diğer projeleri buraya ekleyebilirsiniz
];
