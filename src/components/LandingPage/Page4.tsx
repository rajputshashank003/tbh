import gsap from "gsap";
import { motion } from "motion/react";
import { useState } from "react";

const Page4 = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        if (openIndex === index) {
            collapseSection(index);
            setOpenIndex(null);
            return;
        }
        if (openIndex !== null) {
            collapseSection(openIndex, () => {
                expandSection(index);
                setOpenIndex(index);
            });
        } else {
            expandSection(index);
            setOpenIndex(index);
        }
    };

    const collapseSection = (index: number, onComplete?: () => void) => {
        const el = document.querySelector(`.expand_option_${index}`) as HTMLElement;
        if (!el) return;
        const gtl = gsap.timeline();

        gtl.to(el, {
            height: 70,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                el.classList.remove("expanded");
                if (onComplete) onComplete();
            }
        });
    };

    const expandSection = (index: number) => {
        const el = document.querySelector(`.expand_option_${index}`) as HTMLElement;
        const content = el?.querySelector(`.expand_para_${index}`) as HTMLElement;
        if (!el || !content) return;

        const startHeight = el.offsetHeight;
        const endHeight = startHeight + content.scrollHeight;
        const gtl = gsap.timeline();
        gtl.to(el, {
            height: endHeight + 20, // extra padding
            duration: 0.5,
            ease: "power2.inOut",
            onStart: () => el.classList.add("expanded"),
        })
        ;
    };

    return (
        <div data-scroll data-scroll-speed={0.06} className="overflow-hidden bg-white mx-[6vw] mb-12">
            <div className="relative h-fit bg-[#FD7E40] pt-16 mt-[1px]  pl-4 ">
                <div className="absolute h-[600px] extra_cut -top-[95%] rotate-[6deg] bg-[#F8F4F2] w-[120vw] left-[-20%]"></div>
                <h2 className="text-[26px] pt-[10%] md:pt-[5%]" style={{ fontFamily: 'f1, serif' }}>
                    Who we help?
                </h2>
                <hr className="border-black/60 my-[36px] w-[98%]" />
                <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 items-start">
                    <div className="flex flex-col max-lg:pr-[16px]  gap-6 pb-2"> 
                        <div className="flex flex-col gap-3">
                            {["K12", "Higher Education", "Families", "Enterprise"].map((item, index) => (
                                <div
                                    onClick={() => handleClick(index)}
                                    key={index}
                                    className={`expand_option_${index} flex flex-col justify-between items-start gap-[16px] px-5 py-4 h-[70px] overflow-hidden bg-[#FD7E40] border border-black rounded-lg text-[28px]`}
                                    style={{ fontFamily: 'f5, serif' }}
                                >
                                    <div className="flex flex-row justify-between w-full">
                                        <span className="max-sm:text-[18px]">{item}</span>
                                        <motion.span
                                            initial={{ y: 0 }}
                                            animate={{ y: [index === 1 ? 5 : -5, 0, index === 1 ? 5 : -5] }}
                                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                            className="text-[24px] cursor-pointer hover:scale-[1.1] duration-200 font-bold bg-white rounded-full w-[40px] h-[40px] flex justify-center items-center"
                                        >
                                            { openIndex !== null && openIndex === index ? '-' : '+' }
                                        </motion.span>
                                    </div>
                                    <div className={`bg-white rounded-xl expand_para_${index}`}>
                                        <p style={{ fontFamily: 'f3, serif', color: 'rgb(136, 136, 136)' }} className=" text-[16px] text-gray-700 mt-2 leading-5 p-2">
                                            We provide the most comprehensive approach to MTSS — helping schools quickly and proactively identify students in need and offer them personalized, targeted interventions. Through our platform, districts can implement data-driven decision making, progress monitoring, and evidence-based supports.
                                        </p>
                                        <a href="#" style={{ fontFamily: 'f2, serif' }} className="text-[#FD7E40] mt-4 inline-block text-[14px] px-2">Learn more →</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:block items-end relative w-full h-full">
                        <img
                            src="/LandingPage/Page4/i1.png"
                            alt="Dashboard Visual"
                            style={{ bottom: openIndex !== null ? '-8%' : 0 }}
                            className="absolute bottom-0 -right-[24%] lg:-right-[28%] w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page4;
