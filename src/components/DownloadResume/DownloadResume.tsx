'use client';
import React, { FC, useState } from 'react';


interface DownloadResumeProps {}

const DownloadResume: FC<DownloadResumeProps> = () => (
    <div className="hover:invert">
        <a href="HaynrikhSantrosyanResume.pdf" download="HaynrikhSantrosyanResume.pdf" className="flex border border-black rounded bg-black text-white py-4 px-5 gap-2" >
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Resume
            </span>
            <img
                src="download.svg"
                className="h-8 mr-3"
                alt="download"
            />
        </a>
    </div>
);

export default DownloadResume;
