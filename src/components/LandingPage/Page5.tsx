import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Page5 = () => {
    const imageList = [
        "/LandingPage/Page5/i1.jpg",
        "/LandingPage/Page5/i2.jpg",
        "/LandingPage/Page5/i3.jpg"
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // fade out
            setTimeout(() => {
                setCurrentImage(prev => (prev + 1) % imageList.length);
                setFade(true); // fade in
            }, 300); // fade-out duration
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div data-scroll data-scroll-speed={-0.06} className="w-full px-[2%] md:px-[4%] lg:px-[8%] py-16 bg-white rounded-[12px] shadow-[0px_2px_16px] shadow-gray-300">
            <div className="lg:grid lg:grid-cols-2 items-center gap-10">
                <div className="space-y-6 lg:col-span-1">
                    <h2 className="text-[26px] italic" style={{ fontFamily: 'f1, serif' }}>
                        Meet our world-class care experts
                    </h2>
                    <div className="pl-[10%] border-l-1 border-black">
                        <h1 className="text-[26px] md:text-[34px] leading-[1.3] mb-[16px]" style={{ fontFamily: 'f5, serif' }}>
                            A proprietary program,<br />
                            built by expert therapists<br />
                            who understand students.
                        </h1>

                        <p className="text-[16px] text-gray-500 leading-relaxed" style={{ fontFamily: 'f2, serif' }}>
                            All tbh groups are facilitated by licensed, culturally-competent therapists who have experience working with youth, adolescents, and college-aged students. Our proprietary program, rooted in the latest evidence-based therapeutic practices, provides students with a safe space to deal with life’s challenges.
                        </p>
                    </div>
                </div>

                {/* Right Column (image) */}
                <div data-scroll data-scroll-speed={0.05} className="w-full h-full max-lg:mt-[10%] max-lg:h-[70vh] relative lg:col-span-1">
                    <img
                        src="/LandingPage/Page5/Yellow_cover.svg"
                        alt="Therapist Tags"
                        className="w-full h-full z-[1] object-contain absolute top-0 left-0"
                    />
                    <img
                        src={imageList[currentImage]}
                        alt="Therapist Tags"
                        style={{ opacity: fade ? 1 : 0 }}
                        className="w-full h-full z-[0] object-contain transition-opacity duration-500 scale-[0.95] lg:scale-[1.05] absolute top-[-3%] left-0"
                    />
                    <div data-scroll data-scroll-speed={-0.04} className=" absolute top-[50%] left-[50%] z-[3] ">
                        <motion.img
                            initial={{ y: 0 }}
                            animate={{ y: [-5, 0, -5] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            src="/LandingPage/Page5/tag-0.png"
                            alt="Therapist Tags"
                            className="w-[60px] z-[3] sm:w-[100px] h-full object-contain scale-[0.94] lg:scale-[1.05] "
                        />
                    </div>
                    <div data-scroll data-scroll-speed={0.06} className="absolute top-[10%] left-0 z-[3] " >
                        <motion.img
                            initial={{ y: 0 }}
                            animate={{ y: [-8, 0, -8] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            src="/LandingPage/Page5/tag-1.png"
                            alt="Therapist Tags"
                            className="w-[60px] z-[3] sm:w-[100px] h-full object-contain scale-[0.94] lg:scale-[1.05]"
                        />
                    </div>
                    <div data-scroll data-scroll-speed={-0.08} className=" absolute top-[10%] right-0 z-[3] ">
                        <motion.img
                            initial={{ y: 0 }}
                            animate={{ y: [5, 0, 5] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            src="/LandingPage/Page5/tag-2.png"
                            alt="Therapist Tags"
                            className="w-[60px] z-[3] sm:w-[100px] h-full object-contain scale-[0.94] lg:scale-[1.05]"
                        />
                    </div>
                    <div data-scroll data-scroll-speed={0.06} className="absolute top-[80%] right-[10%] z-[3] ">
                        <motion.img
                            initial={{ y: 0 }}
                            animate={{ y: [6, 0, 6] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            src="/LandingPage/Page5/tag-3.png"
                            alt="Therapist Tags"
                            className="w-[60px] z-[3] sm:w-[100px] h-full object-contain scale-[0.94] lg:scale-[1.05] "
                        />
                    </div>
                    <div data-scroll data-scroll-speed={-0.03} className=" absolute top-[80%] left-0 z-[3] ">
                        <motion.img
                            initial={{ y: 0 }}
                            animate={{ y: [-5, 0, -5] }}
                            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                            src="/LandingPage/Page5/tag-4.png"
                            alt="Therapist Tags"
                            className="w-[60px] z-[3] sm:w-[100px] h-full object-contain scale-[0.94] lg:scale-[1.05]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page5;
