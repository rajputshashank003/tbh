import { motion } from "motion/react";

const Page4 = () => {
    
    return (
        <div data-scroll data-scroll-speed={0.06} className="overflow-hidden bg-white mx-[2%] mb-12">
        <div className="relative h-fit bg-[#FD7E40] pt-16 mt-[1px]  pl-4 ">
            <div className="absolute h-[200px] -top-[15%] rotate-[8deg] bg-[#F8F4F2] w-[120vw] left-[-20%]"></div>
            <h2 className="text-[26px] pt-[10%] md:pt-[5%]" style={{ fontFamily: 'f1, serif' }}>
                Who we help?
            </h2>
            <hr className="border-black/60 my-[36px] w-[98%]" />
            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 items-start">
                <div className="flex flex-col max-lg:pr-[16px] border-black gap-6 pb-2">
                    <div className="bg-white rounded-xl p-6">
                        <h3 className="text-[28px]" style={{ fontFamily: 'f5, serif' }}>
                            K12
                        </h3>
                        <p style={{ fontFamily: 'f3, serif', color: 'rgb(136, 136, 136' }} className="text-[16px] text-gray-700 mt-2 leading-5">
                            We provide the most comprehensive approach to MTSS — helping schools quickly and proactively identify students in need and offer them personalized, targeted interventions. Through our platform, districts can implement data-driven decision making, progress monitoring, and evidence-based supports.
                        </p>
                        <a href="#" style={{ fontFamily: 'f2, serif' }} className="text-[#FD7E40] mt-4 inline-block text-[14px]">Learn more →</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        {["Higher Education", "Families", "Enterprise"].map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center px-5 py-4 bg-[#FD7E40] border border-black rounded-lg text-[28px]"
                                style={{ fontFamily: 'f5, serif' }}
                            >
                                {item}
                                <motion.span
                                    initial={{ y: 0 }}
                                    animate={{ y: [ index == 1 ? 5 : -5, 0, index == 1 ? 5 : -5] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="text-[24px] font-bold bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center">+
                                </motion.span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Image (visible on md and above) */}
                <div className="hidden lg:block items-end relative w-full h-full">
                    <img
                        src="/LandingPage/Page4/i1.png" 
                        alt="Dashboard Visual"
                        className="absolute bottom-0 left-0 w-full object-contain"
                    />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Page4;
