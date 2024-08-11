"use client";

import { ArrowRight } from "@phosphor-icons/react";

const Title = ({ titleName, model }) => {

    if (model === 1) {
        return (
            <>
                <section className="flex flex-row items-center gap-2">
                    <h1 className="text-primaryWhite text-3xl font-bold flex gap-2 whitespace-nowrap">
                        <span className="text-primaryYellow"> # </span> {titleName}
                    </h1>
                    <hr className="border-t-2 border-primaryYellow flex-grow" />
                </section>
            </>
        );
        
    }else if (model === 2) {
        return (
            <>
                <section className="flex flex-row items-center gap-2">
                    <h1 className="text-primaryWhite text-3xl font-bold flex gap-2 whitespace-nowrap">
                        <span className="text-primaryYellow"> # </span> {titleName}
                    </h1>
                    <hr className="border-t-2 border-primaryYellow flex-grow" />
                    <div className="text-primaryWhite flex flex-row hover:underline">
                        <a target="_blank" href="https://github.com/kayveex?tab=repositories" className="text-md" >View All</a>
                        <ArrowRight  size={24} />
                    </div>


                </section>
            </>
        );
        
    }

}

export default Title;

