import React, {FC, useContext} from 'react';
import {ScrollContext} from "@/components/Home/Home";


interface ProjectsProps {
}

const Projects: FC<ProjectsProps> = () => {
    const sections = useContext(ScrollContext);
    return (
        <div className="pt-40" ref={sections.projects}>
            Projects Component
        </div>
    )
}

export default Projects;
