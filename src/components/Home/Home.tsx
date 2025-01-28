"use client"
import React, {FC, createContext, useState, useContext, useEffect, useRef} from 'react';
import Navbar from "@/components/Navbar/Navbar";
import LandingPage from "@/components/LandingPage/LandingPage";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import AboutMe from "@/components/AboutMe/AboutMe";
import Contact from "@/components/Contact/Contact";

interface HomeProps {
}

export const ScrollContext = createContext<any>(null);

const Home: FC<HomeProps> = () => {
    const sections = {
        aboutMe: useRef(null),
        landingPage: useRef(null),
        mySkills: useRef(null),
        experience: useRef(null),
        projects: useRef(null),
        contact: useRef(null),
    }

    return (<div className="flex flex-col">
            <ScrollContext.Provider value={sections}>
                <div className="navbar">
                    <Navbar/>
                </div>
                <div className="landingPage h-dvh">
                    <LandingPage/>
                </div>
                <div className="skills h-dvh">
                    <Skills/>
                </div>
                <div className="experience h-[160dvh] bg-black">
                    <Experience/>
                </div>
                <div className="aboutMe h-dvh">
                    <AboutMe/>
                </div>
                <div className="projects h-dvh bg-black">
                    <Projects/>
                </div>
                <div className="projects h-dvh">
                    <Contact/>
                </div>
            </ScrollContext.Provider>
        </div>
    )
};

export default Home;
