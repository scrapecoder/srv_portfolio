import Projectcard from "./projectcard";
import bgcover from '../assets/project-cover.png'
import insta from '../assets/insta.jpg'
import { projectType } from "../types";

const data: projectType[] = [
    {
        "id": 1,
        "name": "Social Media App Clone (Instagram-like)",
        "tech": ["React Native", "Socket", "nodejs", "express"],
        "shortdes": "This app allows users to post photos, interact through comments and likes, and build friend circles through a request system. I implemented real-time chat using WebSocket, ensuring smooth and instantaneous communication between users. Leveraging MongoDB’s flexibility, I designed a scalable data model to manage large datasets effectively, enabling users to experience fast and efficient real-time interactions. Through this project, I was able to combine my expertise in both frontend and backend development, crafting an experience that was not only visually engaging but also technically robust.",
        "github": "https://github.com/scrapecoder/photogram",
        "image": insta,
        "link": ""
    },
    {
        "id": 2,
        "name": "Event management",
        "tech": ["React Native", "Redux", "offline"],
        "shortdes": "developed a calendar event management feature that allows users to effortlessly add, view, and update events. Users can specify event details like titles and descriptions, view events on an intuitive calendar interface, and edit or delete events with ease. Swiping gestures make navigation and event interaction seamless, while built-in validation ensures data consistency. This feature highlights my commitment to creating intuitive and functional user experiences that support reliable data management",
        "github": "https://github.com/scrapecoder/calendar_events",
        "image": bgcover,
        "link": ""
    },
    {
        "id": 3,
        "name": "HLL",
        "tech": ["React Native", "Redux", "Redux Thunk", "Redux Persist", "Firebase", "Restful API", "Visual Studio", "Xcode", "Android Studio"],
        "shortdes": "An app providing sales and service reports of VBD products. Responsible for developing the UI, implementing basic functionality, and conducting unit testing and QA.",
        "github": "",
        "image": bgcover,
        "link": "https://play.google.com/store/apps/details?id=com.hll"
    },
    {
        "id": 4,
        "name": "Whirl – Set Up Your Friends",
        "tech": ["React Native", "Redux", "Redux Thunk", "Firebase", "Twilio", "Restful API", "Visual Studio", "Xcode", "Android Studio"],
        "shortdes": "A social dating app where friends introduce users to new people. Led the project environment setup, developed UI and functionality, and ensured multi-language support.",
        "github": "",
        "image": bgcover,
        "link": "https://apps.apple.com/us/app/whirl-set-up-your/friends/id1659886766"
    },
    {
        "id": 5,
        "name": "ReadClear",
        "tech": ["React Native", "Redux", "Redux Thunk", "AWS", "S3"],
        "shortdes": "An app designed to improve reading for people with brain-related visual difficulties. Created a pixel-perfect UI, optimized performance for slower connections, and conducted unit testing.",
        "github": "",
        "image": bgcover,
        "link": ""
    }
]

// Define the prop type for each component
type SectionProps = {
    sectionRef: React.RefObject<HTMLDivElement>;
};

const Projects: React.FC<SectionProps> = ({ sectionRef }) => {

    return <div ref={sectionRef} className="w-full justify-center text-center py-10">
        <h4 className="text-gray-400 font-semibold text-xs">PORTFOLIO</h4>
        <h4 className="text-white font-sans font-semibold text-xl">Feature <span className="text-cyan-500">projects.</span></h4>
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0 items-center justify-center">
            <div className="w-full">
                {data.map((projectData: projectType, index: number) => <Projectcard key={projectData.id} index={index}  {...{ projectData }} />)}

            </div>
        </div>
    </div>

}

export default Projects;