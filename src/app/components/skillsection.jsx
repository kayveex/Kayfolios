import Title from "./small/title";

const SkillSection = () => {

    return (
        <>
            <Title titleName="Skills" model={1} />
            <section className="flex flex-row">
                <div className="flex flex-col w-1/4 items-center">
                    <img className="w-[200px] mt-[40px]" src="/assets/leftskill.png" alt="skill"/>
                </div>
                <div className="flex flex-col w-3/4 items-end">
                    <div id="row_one" className="flex flex-row gap-4 py-4">
                        <div className="flex flex-col border border-primaryWhite">
                            <h2 className="text-primaryWhite self-center py-2 px-2">Web Development</h2>
                            <hr className="border-primaryWhite border-t-2 w-full" />
                            <div className="flex flex-col py-2">
                                <ul className="flex flex-row gap-2 px-4">
                                    <li className="text-secondaryWhite">PHP</li>
                                    <li className="text-secondaryWhite">Javascript</li>
                                    <li className="text-secondaryWhite">Laravel</li>
                                </ul>
                                <ul className="flex flex-row gap-2 px-4">
                                    <li className="text-secondaryWhite">NodeJS</li>
                                    <li className="text-secondaryWhite">ReactJS</li>
                                    <li className="text-secondaryWhite">NextJS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col border border-primaryWhite">
                            <h2 className="text-primaryWhite self-center py-2 px-2">Project Management</h2>
                            <hr className="border-primaryWhite border-t-2 w-full" />
                            <div className="flex flex-col py-2">
                                <ul className="flex flex-row gap-2 px-4">
                                    <li className="text-secondaryWhite">Notion</li>
                                    <li className="text-secondaryWhite">Figjam</li>
                                    <li className="text-secondaryWhite">Trello</li>
                                </ul>
                                <ul className="flex flex-row gap-2 px-4">
                                    <li className="text-secondaryWhite">Gitlab</li>
                                    <li className="text-secondaryWhite">Github</li>
                                    <li className="text-secondaryWhite">Git</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col border border-primaryWhite">
                            <h2 className="text-primaryWhite self-center py-2 px-2">Graphic Design</h2>
                            <hr className="border-primaryWhite border-t-2 w-full" />
                            <div className="flex flex-col py-2">
                                <ul className="flex flex-row gap-2 px-4">
                                    <li className="text-secondaryWhite">Figma</li>
                                    <li className="text-secondaryWhite">Canva</li>
                                </ul>
                                <ul className="flex flex-row gap-2 px-4">
                                    <li className="text-secondaryWhite">Photoshop</li>
                                    <li className="text-secondaryWhite">CSPaint</li>
                                </ul>
                            </div>
                        </div>                  
                    </div>
                    <div id="row_two" className="flex flex-row gap-4 py-4">
                        <div className="flex flex-col border border-primaryWhite">
                                <h2 className="text-primaryWhite self-center py-2 px-2">Other</h2>
                                <hr className="border-primaryWhite border-t-2 w-full" />
                                <div className="flex flex-col py-2">
                                    <ul className="flex flex-row gap-2 px-4">
                                        <li className="text-secondaryWhite">HTML</li>
                                        <li className="text-secondaryWhite">CSS</li>
                                        <li className="text-secondaryWhite">Bootstrap 5</li>
                                    </ul>
                                    <ul className="flex flex-row gap-2 px-4">
                                        <li className="text-secondaryWhite">TailwindCSS</li>
                                    </ul>
                                </div>
                        </div>
                        <div className="flex flex-col border border-primaryWhite">
                                <h2 className="text-primaryWhite self-center py-2 px-2">Database Design</h2>
                                <hr className="border-primaryWhite border-t-2 w-full" />
                                <div className="flex flex-col py-2">
                                    <ul className="flex flex-row gap-2 px-4">
                                        <li className="text-secondaryWhite">MySQL</li>
                                        <li className="text-secondaryWhite">XAMPP</li>                                    </ul>
                                    <ul className="flex flex-row gap-2 px-4">
                                        <li className="text-secondaryWhite">PhpMyAdmin</li>
                                        <li className="text-secondaryWhite">Draw.io</li>
                                    </ul>
                                </div>
                        </div>
                        <div className="flex flex-col border border-primaryWhite">
                                <h2 className="text-primaryWhite self-center py-2 px-2">Hosting</h2>
                                <hr className="border-primaryWhite border-t-2 w-full" />
                                <div className="flex flex-col py-2">
                                    <ul className="flex flex-row gap-2 px-4">
                                        <li className="text-secondaryWhite">Cpanel</li>
                                        <li className="text-secondaryWhite">Netlify</li>                                    </ul>
                                    <ul className="flex flex-row gap-2 px-4">
                                        <li className="text-secondaryWhite">Vercel</li>
                                    </ul>
                                </div>
                        </div>

                    </div>
                </div>
            </section>

        
        </>
    );

}

export default SkillSection;