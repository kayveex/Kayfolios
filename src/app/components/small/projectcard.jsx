/* eslint-disable @next/next/no-img-element */
"use client";

import { CaretRight } from "@phosphor-icons/react";

const ProjectCard = ({ projectData }) => {

    return (
        <>
        <div className="flex flex-col bg-transparent border hover:scale-110 min-h-full shadow-sm border-primaryWhite ">
            <img
                className="w-full h-[300px] object-cover"
                src={projectData.image}
                alt="Card Image"
            />
            <div className="p-4 md:p-5">
                <h3 className="text-lg font-semibold text-primaryWhite">
                {projectData.name}
                </h3>
                <p className="mt-1 text-sm text-secondaryWhite">
                    {projectData.description}
                </p>
                <a
                className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium border border-primaryYellow bg-transparent text-primaryWhite  disabled:opacity-50 disabled:pointer-events-none"
                href={projectData.url}
                >
                Check Repo
                <CaretRight size={24} />
                </a>
            </div>
        </div>

            

        </>
    );

}

export default ProjectCard;