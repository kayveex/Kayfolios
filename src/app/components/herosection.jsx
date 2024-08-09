/* eslint-disable @next/next/no-img-element */
"use client";
import { ArrowFatLineDown, DiscordLogo, GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import Typewriter from 'typewriter-effect';

const HeroSection = () => {

    return (
        <section className="flex flex-row w-full h-[500px]">
            <div className="flex flex-col w-1/2">
                <div id="typing-text-hero" className="mt-[120px]">
                    <h1 className="text-primaryWhite text-4xl font-bold gradient-orange">Hi There, I'm</h1>
                    {/* <h1 className="text-primaryWhite text-4xl font-bold">Kornelius Rhesa</h1> */}
                    <div className="text-primaryWhite text-4xl font-bold">
                        <Typewriter
                            options={{
                                strings: ['Kornelius Rhesa', 'a Web Developer', 'a Project Manager'],
                                autoStart: true,
                                loop: true,
                                pauseFor: 2000, 
                            }}
                        />
                    </div>

                </div>
                <p className="text-secondaryWhite w-[385px] text-md mt-6">
                    For me, coding is the poetry of logic 
                    and creativity.
                </p>
                <div id="button-socmed" className="flex flex-row items-center mt-6">
                    <a href="">
                        <button type="button" className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-primaryYellow text-primaryWhite hover:scale-110 disabled:pointer-events-none ">
                            Download My CV
                            <ArrowFatLineDown size={20} />
                        </button>
                    </a>
                    <div id="socmed-btn" className="flex flex-row gap-2 ml-6 text-primaryYellow">
                        <a className="hover:scale-110" href="">
                            <LinkedinLogo size={28} weight="fill" />
                        </a>
                        <a className="hover:scale-110" href="">
                            <GithubLogo size={28} weight="fill" />
                        </a>
                        <a className="hover:scale-110" href="">
                            <WhatsappLogo size={28} />
                        </a>
                        <a className="hover:scale-110" href="">
                            <DiscordLogo size={28} />
                        </a>
                    </div>

                </div>
            </div>
            <div className="flex flex-col w-1/2 items-center">
                <img className="w-[400px] mt-[40px]" src="/assets/head_pic.png" alt="hero"/>
                <div className="flex flex-row items-center border gap-2 px-10  border-primaryWhite h-[40px]">
                    <div id="dotsquare" className="bg-primaryYellow w-[16px] h-[16px]"></div>
                    <h2 className="text-secondaryWhite">Currently working on <span className="font-bold">Warskul Apps</span></h2>
                </div>
            </div>

        </section>
    );


}

export default HeroSection;