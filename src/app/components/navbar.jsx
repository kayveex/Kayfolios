/* eslint-disable @next/next/no-img-element */


const Navbar = () => {
    return (
        <section className="flex flex-row w-full h-[75px] py-4 pt-12 items-center ">
            <div className="flex flex-col w-1/2">
                <img className="w-[120px]" src="/assets/upscaledkay.png" alt="kaylogo"></img>
            </div>
            <div className="flex flex-col w-1/2">
                <ul className="hidden md:flex md:flex-row md:gap-4 md:justify-end">
                    <a href="">
                        <li className="text-primaryWhite hover:text-secondaryWhite"><span className="px-2 text-primaryYellow">#</span>home</li>
                    </a>
                    <a href="">
                        <li className="text-primaryWhite hover:text-secondaryWhite"><span className="px-2 text-primaryYellow">#</span>projects</li>
                    </a>
                    <a href="">
                        <li className="text-primaryWhite hover:text-secondaryWhite"><span className="px-2 text-primaryYellow">#</span>skills</li>
                    </a>
                    <a href="">
                        <li className="text-primaryWhite hover:text-secondaryWhite"><span className="px-2 text-primaryYellow">#</span>contact</li>
                    </a>
                </ul>
            </div>

        </section>
    );

}
export default Navbar;

