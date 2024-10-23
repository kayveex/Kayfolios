"use client";

import { ArrowRight } from "@phosphor-icons/react";

const Title = ({ titleName, model }) => {
    if (model === 1) {
        return (
            <section className="flex flex-col md:flex-row items-start md:items-center gap-2 w-full">
                <h1 className="text-primaryWhite text-2xl md:text-3xl font-bold flex gap-2 whitespace-nowrap">
                    <span className="text-primaryYellow"> # </span> {titleName}
                </h1>
                <hr className="border-t-2 border-primaryYellow flex-grow w-full md:w-auto" />
            </section>
        );
    } else if (model === 2) {
        return (
            <section className="flex flex-col md:flex-row items-start md:items-center gap-2 w-full">
                <h1 className="text-primaryWhite text-2xl md:text-3xl font-bold flex gap-2 whitespace-nowrap">
                    <span className="text-primaryYellow"> # </span> {titleName}
                </h1>
                <hr className="border-t-2 border-primaryYellow flex-grow w-full md:w-auto" />
                <div className="text-primaryWhite flex flex-row hover:underline">
                    <a target="_blank" href="https://github.com/kayveex?tab=repositories" className="text-sm md:text-md">
                        View All
                    </a>
                    <ArrowRight size={20} />
                </div>
            </section>
        );
    }
};

export default Title;
