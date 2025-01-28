import React, {FC, useContext} from 'react';
import {ScrollContext} from "@/components/Home/Home";


interface ContactProps {
}

const Contact: FC<ContactProps> = () => {
    const sectionRefs = useContext(ScrollContext);
    return (
        <>
            <div className="pt-48" ref={sectionRefs.contact}>
                Contact Component
            </div>
        </>
    )
}
export default Contact;
