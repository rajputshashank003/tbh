const Page3 = () => {
    return (
        <div data-scroll data-scroll-speed={0.09} className="md:grid max-sm:mx-[6vw] md:grid-cols-2 md:gap-[26px] py-[5%] px-[2%] bg-white mt-[20px] rounded-[12px] shadow-[0px_0px_10px] shadow-gray-200 overflow-hidden flex flex-col lg:mx-[15%] md:mx-[8%] mx-[2%] ">
            <div className="col-span-1 relative h-full w-full">
                <div className="absolute right-0 h-full w-4 max-sm:w-8 border-2 border-white bg-white z-[2]"></div>
                <video src="/LandingPage/Page3/v1.mp4" autoPlay muted loop className="h-full object-cover z-[1] w-full"></video>
                <div className="absolute bottom-0 w-full h-4 max-sm:h-8 border-2 border-white bg-white z-[2]"></div>
            </div>
            <div className="col-span-1">
                <div style={{ fontFamily: 'f1, serif' }} className="text-[26px]">
                    Hear what our students have to say
                </div>
                <div style={{ fontFamily: 'f5, serif' }} className="text-[24px] mb-[20%] pl-[10%] mt-[20px] border-l-1 border-black/50">
                    It was so nice to get to know my teammates and talk about what we’re all going through. tbh really helped me deal with my anxiety and pressure to please other people. Also, the sessions were so real. No BS.
                </div>
                <div className="h-[50px] items-center flex flex-row gap-[16px] pt-[5%] relative bottom-0 " >
                    <img className="h-full w-[100px]" src="/LandingPage/Page3/Stanford.svg" />
                    <div className="h-full w-[1px] bg-black"></div>
                    <div style={{ fontFamily: 'f2, serif'}} className="">
                        <div className="text-[#FF7E3E]">
                            Jeanne K.
                        </div>
                        <div style={{ fontFamily: 'f3, serif'}} className="">
                            Student at Stanford
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page3