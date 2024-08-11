

const QuotesSection = () => {
    
    return (
        <>
            <section className="flex flex-col py-16">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row border px-4 py-8  w-fit h-[50px] items-center  border-primaryWhite">
                        <p className="text-primaryWhite italic">"If you quit when you suck, you'll suck forever."</p>
                    </div>
                </div>
                <div className="flex flex-col items-center pl-[327px]">
                    <div className="flex flex-row border border-t-0 px-4 py-4  w-fit h-[50px] items-center  border-primaryWhite">
                        <p className="text-primaryWhite">- Mori Calliope</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default QuotesSection;