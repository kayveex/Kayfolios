"use client";
import { DiscordLogo, Envelope } from "@phosphor-icons/react";
import Title from "./small/title";

const ContactSection = () => {

    return (
        <>
            <section className="flex flex-col py-6">
                <Title titleName="Contact" model={1} />
                <div id="container_contact" className="flex flex-row">
                    <div className="flex flex-col w-1/2 py-4">
                        <p className="text-primaryWhite">
                        I’m interested in freelance opportunities. However, if you have other request or question, 
                        don’t hesitate to contact me.
                        </p>
                    </div>
                    <div className="flex flex-col w-1/2 py-4 items-end">
                        <div className="border-primaryWhite border p-6 items-end w-[400px] ">
                            <h3 className="text-primaryWhite text-lg font-bold pb-4">Message Me Here</h3>
                            <div className="flex flex-row gap-2 text-primaryWhite">
                                <DiscordLogo size={20} weight="fill" />
                                <p className="text-md">inikayoo</p>
                            </div>
                            <div className="flex flex-row gap-2 text-primaryWhite">
                                <Envelope size={20} weight="fill" />
                                <p className="text-md">rhesakornelius@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        
        </>
    );

}

export default ContactSection;