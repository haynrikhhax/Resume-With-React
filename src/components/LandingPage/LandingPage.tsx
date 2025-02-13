import React, {FC, useContext} from 'react';
import {ScrollContext} from "@/components/Home/Home";


interface LandingPage {
}

const LandingPage: FC<LandingPage> = () => {
        const sectionRefs = useContext(ScrollContext);
        return (
            <>
                <div className="flex justify-around pt-48" ref={sectionRefs.landingPage}>
                    <div className="px-20 w-[600px]">
                        <div className="py-4 flex flex-col items-center w-max justify-start gap-4 ">
                            <h1 className="text-3xl text-left w-full">
                                Hello I’am <b>Haynrikh Santrosyan.</b>
                            </h1>
                            <h1 className="text-3xl text-left w-full">
                                <b>Full Stack</b> Developer
                            </h1>
                            <h1 className="text-3xl text-left w-full">
                                Based in <b>Yerevan, Armenia</b>
                            </h1>
                        </div>
                        <div className="py-4 text-zinc-500">
                            <p>
                                With over three years of full-stack development experience,
                                I specialize in building scalable and efficient applications using React,
                                Next.js, Angular 18+, TypeScript, and NestJS. My expertise includes designing RESTful APIs,
                                developing relational and NoSQL databases, and leveraging AWS services for cloud-based
                                solutions.
                            </p>
                        </div>
                        <div className="flex gap-8 py-2">
                            <a href="https://www.linkedin.com/in/haynrikh-santrosyan-655096222/" target="_blank">
                                <div
                                    className="border-2 border-black rounded bg-white p-4 hover:invert hover:duration-300 transition ease-in-out delay-150">
                                    <img
                                        className=""
                                        src="linkedinLogo.svg"
                                        alt="LinkedIn Logo"
                                    />
                                </div>
                            </a>
                            <a href="https://github.com/haynrikhhax" target="_blank">
                                <div
                                    className="border-2 border-black rounded bg-white p-4 hover:invert hover:duration-300 transition ease-in-out delay-150">
                                    <img
                                        src="githubLogo.svg"
                                        alt="Github Logo"
                                    />
                                </div>
                            </a>
                            <a href="https://www.facebook.com/haynrikh.santrosyan" target="_blank">
                                <div
                                    className="border-2 border-black rounded bg-white p-4 hover:invert hover:duration-300 transition ease-in-out delay-150">
                                    <img
                                        src="facebookLogo.svg"
                                        alt="Facebook Logo"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                    <img
                        className=""
                        src="boybanner.svg"
                        alt="banner"
                    />
                </div>
            </>
        )
    }
;

export default LandingPage;
