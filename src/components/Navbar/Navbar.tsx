import React, {FC, useContext} from 'react';
import Logo from "@/components/Logo/Logo";
import Taskbar from "@/components/Taskbar/Taskbar";
import DownloadResume from "@/components/DownloadResume/DownloadResume";
import {ScrollContext} from "@/components/Home/Home";

interface NavbarProps {
}

const Navbar: FC<NavbarProps> = () => {
    return (
        <nav className="fixed py-6 px-20 w-full z-50 bg-white" >
            <div className="flex flex-wrap items-center justify-between mx-auto">
                <Logo/>
                <Taskbar/>
                <DownloadResume/>
            </div>
        </nav>
    );
}

export default Navbar;
