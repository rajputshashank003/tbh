const Navigation = () => {

    return (
        <div style={{ fontFamily: 'f3, serif'}} className="flex py-[16px] max-sm:text-[10px] max-md:text-[15px] flex-row items-center gap-[8px] max-sm:justify-center md:gap-[16px] " >
            <div className="all123">
                All
            </div>
            <div className="line1 all123 h-[1px] w-[40px] max-sm:min-w-[8px] max-sm:max-w-[8px] max-sm:h-[8px] max-sm:rounded-full bg-black"></div>
            <div className="science all123">
                Science & Engineering
            </div>
            <div className="line1 all123 h-[1px] w-[40px] max-sm:min-w-[8px] max-sm:max-w-[8px] max-sm:h-[8px] max-sm:rounded-full bg-black"></div>
            <div className="graphic all123">
                Graphic Design
            </div>
            <div className="line1 all123 h-[1px] w-[40px] max-sm:min-w-[8px] max-sm:max-w-[8px] max-sm:h-[8px] max-sm:rounded-full bg-black"></div>
            <div className="sustain all123">
                Sustainability
            </div>
        </div>
    )
}

export default Navigation