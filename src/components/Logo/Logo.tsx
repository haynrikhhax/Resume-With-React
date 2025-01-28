import React, {FC, useContext} from 'react';
import {ScrollContext} from "@/components/Home/Home";


interface LogoProps {
}

const Logo: FC<LogoProps> = () => {
    const sections = useContext(ScrollContext);
    const handleScroll = (section: any) => {
        sections[section]?.current.scrollIntoView({behavior: "smooth", top: 0});
    };
    return (
        <a className="flex items-center cursor-pointer" onClick={() => handleScroll("landingPage")}>
            <img
                src="logo.svg"
                className="h-8 mr-3"
                alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Haynrikh Santrosyan
        </span>
        </a>
    )
};

export default Logo;
