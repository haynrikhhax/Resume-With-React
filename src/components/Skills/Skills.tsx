import React, {FC, useContext} from 'react';
import {ScrollContext} from "@/components/Home/Home";


interface SkillsProps {
}

const Skills: FC<SkillsProps> = () => {
    const sections = useContext(ScrollContext);
    const skills: string[] = [
        "javascript",
        "typescript",
        "node",
        "express",
        "nest",
        "mysql",
        "postgresql",
        "mongo",
        "aws",
        "docker",
        "git",
        "react",
        "next",
        "angular",
        "rxjs",
        "tailwind",
        "sass",
        "bootstrap",
    ]
    return (
        <>
            <div className="pt-40 text-3xl flex flex-col items-center gap-16 justify-center" ref={sections.mySkills}>
                <h1>My <b>Skills</b></h1>
                <div className="pt-4 grid-cols-6 grid grid-rows-2 gap-12">
                    {
                        skills.map((element) => {
                            return (
                                <div
                                    key={element}
                                    className="flex flex-col gap-2 justify-center items-center border-2 border-solid border-black w-44 h-44 hover:scale-125 transition hover:shadow-xl hover:-skew-x-1 hover:-skew-y-1">
                                    <img
                                        className=""
                                        src={(element + '.svg')}
                                        alt={element}
                                    />
                                    {element.charAt(0).toUpperCase() + element.slice(1)}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}


export default Skills;
