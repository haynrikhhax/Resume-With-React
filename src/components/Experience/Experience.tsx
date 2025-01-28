import React, {FC, useContext} from 'react';
import {ScrollContext} from "@/components/Home/Home";


interface ExperienceProps {
}

const Experience: FC<ExperienceProps> = () => {
    const sections = useContext(ScrollContext);
    const experience = [
        {
            logUrl: "dealcode.png",
            date: "07.2024 - present",
            companyName: "DealcodeAI",
            title: "Senior Software Engineer",
            description: "Joined the team as a Software Engineer at startup and improved growth, " +
                " tripling ARR to $1.7 million. Designed and developed the complete front-end for the website," +
                " including creating UI designs. Optimized the performance on the Front-end side, speeding it up by 30%." +
                " Implemented a real-time template editor that dynamically generated text based on user input." +
                " Built an AI-powered lead generation dashboard. " +
                " Developed and integrated APIs leveraging OpenAI's capabilities for advanced functionality." +
                " Tech Stack: TypeScript, NestJS, MySQL, AWS, React, TailwindCSS",
            websiteUrl: "https://dealcode.ai",
        },
        {
            logUrl: "milies.svg",
            date: "11.2023 - 07.2024",
            companyName: "Milies",
            title: "Software Egnineer",
            description: "Extended product capabilities by integrating IOT devices, live tracking resulting in whopping 1200% user growth" +
                "Implemented highly functional analytics dashboards with real time data" +
                "Integrated Google Maps into our too and synchronized it with the data coming from the trackers (IOT devices)" +
                "Implemented a feature that synchronizes QR codes with assets in our tool, enabling users to scan a code and instantly access the asset details" +
                "page" +
                "Designed and implemented a pricing model that accurately calculates rental or purchase costs by accounting for daily expenses like fuel," +
                "consumables, and asset usage" +
                "Developed a relational database, ensuring data consistency, scalability, and efficient query performance" +
                "Tech Stack: TypeScript, NestJS, PostgreSQL, AWS, Angular, Bootstrap, RxJS",
            websiteUrl: "https://milies.net",
        },
        {
            logUrl: "optimumpartners.jpg",
            date: "03.2022 - 11.2023",
            companyName: "Optimum Partners",
            title: "Software Egnineer",
            description: "Maintained three ongoing projects related to Forbes.com" +
                "Developed the UI/UX for and underlying logic for a inner tool used by Forbes editors" +
                "Worked on calculation logic for viewer count, likes, and popularity status for each article" +
                "Created an API that handles file compression on upload and efficient resource management" +
                "Tech Stack: TypeScript, NodeJS, ExpressJS, MongoDB, AWS, React, NextJS, MaterialUI, Python/Flask",
            websiteUrl: "https://www.optimumpartners.com",
        },
        {
            logUrl: "",
            date: "01.2021 - 03.2022",
            companyName: "Lost In Sky",
            title: "Junior Software Egnineer",
            description: "API design" +
                "Designed database and it's architecture" +
                "Designed architecture utilizing AWS services to guarantee availability and scalability hosting" +
                "Tech Stack: NodeJS, ExpressJS, PostgreSQL, AWS, NextJS",
            websiteUrl: "https://www.lostinsky.am",
        },
    ]
    return (
        <div className="pt-40 text-3xl text-white flex flex-col items-center gap-16 justify-center"
             ref={sections.experience}>
            <h1> My <b>Experience </b></h1>
            <div className="pt-4 flex flex-col gap-12">
                {experience.map((element) => {
                    return (
                        <div className="px-24" key={element.companyName}>
                            <div
                                className="flex flex-col gap-4 border-solid border-zinc-500 border-2 p-4 rounded w-full">
                                <div className="flex justify-between items-center gap-24">
                                    <div className="flex gap-8 items-center">
                                        <a href={element.websiteUrl} target="_blank" className="flex items-center gap-2">
                                            {element.logUrl && (
                                                <img src={element.logUrl} alt={element.companyName}/>
                                            )}
                                            <h1>{element.companyName}</h1>
                                        </a>
                                        <p className="text-xl">{element.title}</p>
                                    </div>
                                    <p className="text-xl">{element.date}</p>
                                </div>
                                <p className="text-xl">{element.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Experience;
