import React, {FC, useContext, useState} from 'react';
import {ScrollContext} from "@/components/Home/Home";

interface TaskbarProps {
}

const Taskbar: FC<TaskbarProps> = () => {
    ``
    const sections = useContext(ScrollContext);
    const handleScroll = (section: any) => {
        sections[section]?.current.scrollIntoView({behavior: "smooth", top: 0});
    };
    const tabs = [
        {
            data: "mySkills",
            title: "Skills"
        },
        {
            data: "experience",
            title: "Experience"
        },
        {
            data: "aboutMe",
            title: "About Me"
        },
        {
            data: "projects",
            title: "Projects"
        },
        {
            data: "contact",
            title: "Contact"
        },
    ]
    return (
        <div className="flex items-center gap-8">
            {
                tabs.map((element) => {
                        return (
                            <button onClick={() => handleScroll(element.data)}  key={element.data}>
                                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                                    {element.title}
                                </span>
                            </button>
                        )
                    }
                )
            }
        </div>
    )
};

export default Taskbar;
