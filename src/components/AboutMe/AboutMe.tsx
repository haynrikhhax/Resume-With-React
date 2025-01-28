import React, {FC, useContext} from 'react';
import {ScrollContext} from "@/components/Home/Home";


interface AboutMe {
}

const AboutMe: FC<AboutMe> = () => {
        const sectionRefs = useContext(ScrollContext);
        return (
            <>
                <div className="pt-48" ref={sectionRefs.aboutMe}>
                    <div className="flex justify-around">
                        <div>
                            <img
                                src="boyme.svg"
                            />
                        </div>
                        <div className="flex flex-col justify-start items-start w-[600px] gap-10">
                            <h1 className="text-5xl">About <b>Me</b></h1>
                            <div className="text-zinc-500 flex flex-col gap-5">
                                <p>
                                    I'm a dedicated software engineer specializing in full-stack development with
                                    technologies like Nest.js, React, and Angular. I’m passionate about crafting seamless,
                                    performant applications that merge intuitive user experiences with robust backend
                                    architecture. From clean, maintainable code to delivering end-to-end solutions, I thrive
                                    on bringing ideas to life.
                                </p>
                                <p>
                                    I began my software development journey in 2020, and since then, I've embraced every
                                    opportunity to expand my skills and stay on the cutting edge of technology. Whether it's
                                    building dynamic web applications, scaling APIs, or experimenting with new frameworks, I
                                    approach each project with curiosity and enthusiasm.
                                </p>
                                <p>
                                    When I’m not coding, you’ll find me exploring tech communities, staying inspired by
                                    startup stories, or enjoying a good tech podcast. Feel free to connect with me on <a
                                    href="https://github.com/haynrikhhax/" target="_blank">GitHub</a> or <a
                                    href="https://linkedin.com/in/haynrikh-santrosyan-655096222" target="_blank">LinkedIn</a>—I love sharing
                                    ideas and collaborating on impactful projects!

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
;

export default AboutMe;
