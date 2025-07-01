import { useGSAP } from "@gsap/react";
import Button from "../Button";
import gsap from "gsap";
import { motion, useAnimate } from "motion/react";
import { useRef } from "react";

const Page1 = () => {
    const [arrows, animate] = useAnimate();
    const pathRef_1 = useRef(null);
    const pathRef_2 = useRef(null);
    const pathRef_3 = useRef(null);

    const handleAnimate = async () => {
        // Animate stroke drawing first
        await animate(pathRef_1.current, {
            pathLength: 1,
        }, {
            duration: 1.5,
            ease: "easeInOut"
        });

        // Then animate fill
        await animate(pathRef_1.current, {
            fill: "rgba(35, 32, 31, 1)",
        }, {
            duration: 1.5
        });
        await animate(pathRef_2.current, {
            pathLength: 1,
        }, {
            duration: 1.5,
            ease: "easeInOut"
        });
        animate(pathRef_2.current, {
            fill: "rgba(35, 32, 31, 1)",
        }, {
            duration: 1
        });
        await animate(pathRef_3.current, {
            pathLength: 1,
        }, {
            duration: 1.5,
            ease: "easeInOut"
        });
        animate(pathRef_3.current, {
            fill: "rgba(35, 32, 31, 1)",
        }, {
            duration: 1
        });
    };

    useGSAP(() => {
        const gtl = gsap.timeline();

        gtl
            .fromTo(
                ".mental",
                {
                    y: -100,
                    opacity: 0,
                    duration: 1,
                    ease: "elastic.out(1,0.5)",
                },
                {
                    delay: 0,
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "elastic.out(0.8,0.5)",
                },
                'abc'
            )
            .fromTo(
                ".health",
                {
                    y: -100,
                    opacity: 0,
                    duration: 1,
                    ease: "elastic.out(1,0.5)",
                },
                {
                    delay: 0.18,
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "elastic.out(0.8,0.5)",
                },
                'abc'
            ).fromTo(
                ".reimg",
                {
                    y: -100,
                    opacity: 0,
                },
                {
                    y: 0,
                    delay: 0.2,
                    opacity: 1,
                    duration: 1.2,
                    ease: "elastic.out(0.8,0.5)",
                },
                'abc'
            ).fromTo(
                ".for1",
                {
                    y: -100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    delay: 0.24,
                    duration: 1,
                    ease: "elastic.out(0.8,0.5)",
                },
                'abc'
            ).fromTo(
                ".students1",
                {
                    y: -100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    delay: 0.4,
                    ease: "elastic.out(0.8,0.5)",
                },
                'abc'
            ).fromTo(
                ".para_1",
                {
                    y: -100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.6,
                    ease: "elastic.out(0.8,0.5)",
                },
                'abc'
            ).fromTo(
                ".button_1",
                {
                    scale: 0,
                },
                {
                    scale: 1,
                    transformOrigin: 'bottom left',
                    duration: 1.7,
                    delay: 0.8,
                    ease: "elastic.out(0.8,0.5)",
                },
                'abc'
            ).fromTo(
                ".video_1",
                {
                    scale: 0,
                },
                {
                    scale: 1,
                    transformOrigin: 'bottom left',
                    duration: 1.7,
                    delay: 0.8,
                    ease: "elastic.out(0.8,0.5)",
                },
                'abc'
            )
            .fromTo(
                ".video_2",
                {
                    scale: 0,
                },
                {
                    scale: 1,
                    transformOrigin: 'bottom right',
                    duration: 1.7,
                    delay: 1,
                    ease: "elastic.out(0.8,0.5)",
                },
                'abc'
            ).fromTo(
                ".video_3",
                {
                    scale: 0,
                },
                {
                    scale: 1,
                    transformOrigin: 'bottom left',
                    duration: 1.7,
                    delay: 1,
                    ease: "elastic.out(0.8,0.5)",
                    onComplete: () => {
                        handleAnimate(); // ✅ wrapped safely
                    }
                },
                'abc'
            ).fromTo(
                '.live_svg',
                {
                    opacity: 0,
                }, {
                    opacity: 1
                }
            )

        const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });

        tl.fromTo(
            ".a1",
            { y: 0, scale: 1 },
            { y: -200, duration: 2 },
            'sth'
        ).to(
            '.a1', {
            rotate: '20deg',
            duration: 0,
        },
            'sth-=1'
        ).to(
            '.a1', {
            rotate: '0deg',
            duration: 0,
            delay: 2,
        },
            'sth'
        )
            .to(
                ".a1",
                {
                    scale: 0,
                    duration: 1.2,
                    ease: 'elastic.out(0.8,0.5)'
                }
            )
            .to(
                ".a1",
                { y: 0, scale: 1, duration: 0 } // smooth return to original position
            );
    });


    return (
        <div className="lg:grid grid-cols-2 items-center lg:items-start flex flex-col md:px-[100px] px-[20px] py-[26px] text-[#211E1D] overflow-hidden ">
            {/* left */}
            <div className="flex flex-col max-lg:items-center max-lg:text-center col-span-1 gap-[40px] ">
                <div
                    style={{ fontFamily: "f5, sans-serif" }}
                    className="tag_line text-[40px] max-md:text-center md:text-[50px] lg:text-[70px] leading-[1]"
                >
                    <div className="mh">
                        <div className="mental inline-block">Mental &nbsp;</div>
                        <div className="health inline-block">health,</div>
                    </div>
                    <div className="rf">
                        <div className="reimg inline-block">reimagined &nbsp;</div>
                        <div className="for1 inline-block">for</div>
                    </div>
                    <div
                        style={{ fontFamily: "f1, sans-serif" }}
                        className="text-[94px] max-md:top-4 relative students"
                    >
                        <div data-scroll data-scroll-speed={-0.04} className="students1 inline-block">students</div>
                    </div>
                </div>
                <div
                    style={{ fontFamily: "f3, sans-serif" }}
                    className="text-[18px] max-sm:px-[15px] md:text-[24px] max-lg:text-center para_1 lg:pr-[200px] leading-tight whitespace-normal font-[500] text-[rgb(33, 30, 29)] "
                >
                    Helping your students succeed and thrive with the help of licensed
                    therapists and a community of peers. When and where they need it most.
                </div>
                <div className="max-w-[160px] button_1 flex max-md:justify-center max-md:items-center max-md:max-w-full">
                    <Button variant="Filled" className="text-[18px] max-md:max-w-[160px]">
                        Join Now
                    </Button>
                </div>
            </div>
            {/* right  */}
            <div ref={arrows} className="flex flex-col col-span-1 max-md:min-h-[60vh] min-h-[100vh] max-lg:w-[350px] top-10 lg:-top-10 left-0 relative">
                <img src="/star2.svg" alt="" className="absolute live_svg a1 z-[3] w-[4vw] left-[50%] top-[50%]" />
                {/* <img src="/o.svg" alt="" className="absolute live_svg a2 z-[3] w-[4vw] left-[80%] top-[40%]" /> */}
                <img src="/star1.svg" alt="" className="absolute live_svg a3 z-[3] w-[4vw] left-[14%] top-[40%]" />
                <img data-scroll data-scroll-speed={-0.04} src="/live.svg" alt="" className="absolute live_svg a3 z-[3] w-[10vw] max-sm:w-[15vw] right-[30%] md:right-[-10%] lg:right-[20%] top-[10%]" />
                <div className="z-[2] h-[15vw] w-[15vw] absolute top-[25%] md:top-[20%] left-[20%]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="inherit" height="inherit" fill="none">
                        <g transform="translate(100,75)">
                            <motion.path
                                ref={pathRef_1}
                                d="M-19.01,1.55C-25.43,-0.71 -36.68,-5.31 -39.77,-15.25C-42.51,-24.03 -38.42,-32.87 -28.24,-34.70 
                                C-6.20,-38.01 -3.24,-17.31 -10.47,1.82L-12.96,6.77C-19.34,22.75 -39.36,31.85 -54.64,37.31 
                                C-56.10,37.81 -57.55,38.83 -57.10,40.68C-56.38,43.49 -53.26,42.65 -51.21,42.06 
                                C-40.75,39.60 -31.61,34.26 -22.83,28.41C-17.11,24.60 -8.34,13.13 -6.02,7.01L-3.78,1.15 
                                C-1.93,-5.25 -1.74,-11.45 -2.06,-17.71C-2.67,-29.53 -8.24,-36.29 -19.65,-39.06 
                                C-28.90,-41.30 -40.69,-35.80 -44.01,-27.69C-49.89,-9.08 -35.29,2.17 -19.18,6.66 
                                C-15.47,7.69 -10.24,8.10 -5.09,7.33C15.68,4.24 34.69,-13.27 48.39,-29.50 
                                C48.77,-29.95 49.20,-29.86 49.25,-29.16C48.27,-24.84 47.22,-20.53 46.33,-16.19 
                                C45.86,-13.91 46.09,-11.69 48.84,-11.01C51.46,-10.36 53.10,-11.88 53.71,-14.20 
                                C55.64,-21.60 57.35,-29.07 57.18,-36.80C57.08,-41.50 54.82,-43.47 50.26,-42.35 
                                C41.48,-40.19 32.79,-37.69 24.07,-35.28C22.64,-34.89 21.43,-34.04 21.76,-32.28 
                                C22.85,-26.86 38.28,-32.13 42.17,-32.71C43.20,-32.86 43.24,-32.20 42.81,-31.47 
                                C27.81,-19.89 17.38,-3.15 -2.79,1.55C-10.03,3.23 -12.78,3.74 -19.01,1.55Z"
                                stroke="#23201F"
                                strokeWidth={2}
                                fill="rgba(35, 32, 31, 0)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                            />
                        </g>
                    </svg>
                </div>
                <div className="z-[2] h-[15vw] w-[15vw] absolute top-[35%] md:top-[30%] max-md:left-[0%] left-[10%] " >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="300" height="inherit" fill="none">
                        <g transform="translate(100,75)">
                            <motion.path
                                ref={pathRef_2}
                                d="M-66.087,-5.614C-49.13,8.136 -17.904,24.997 3.411,13.094 
                                C11.388,8.383 14.702,5.187 16.962,-3.297 
                                C18.932,-14.217 6.381,-26.737 -4.619,-24.897 
                                C-14.123,-23.312 -15.316,-10.93 -10.308,-4.157 
                                C-6.864,2.473 4.225,10.987 9.621,13.193 
                                C25.201,21.993 41.831,26.433 59.841,24.713 
                                C63.361,24.276 74.948,23.226 74.592,18.643 
                                C74.161,17.303 72.881,17.913 71.941,17.853 
                                C62.426,19.224 52.917,20.107 43.371,18.553 
                                C29.436,16.764 16.371,10.477 4.621,2.723 
                                C-0.603,-1.446 -6.651,-6.708 -7.199,-13.777 
                                C-7.249,-17.747 -5.089,-19.537 -1.139,-18.977 
                                C5.191,-18.057 11.611,-11.847 11.571,-5.757 
                                C10.141,3.14 -1.115,10.446 -9.919,11.002 
                                C-27.107,11.665 -48.075,2.08 -61.409,-8.727 
                                C-56.859,-9.467 -52.029,-10.22 -48.319,-11.747 
                                C-44.609,-13.274 -45.483,-17.51 -49.589,-16.357 
                                C-56.369,-15.147 -63.179,-14.277 -70.099,-14.267 
                                C-74.049,-14.257 -75.539,-12.057 -74.009,-8.537 
                                C-71.219,-2.127 -67.873,3.882 -64.953,10.232 
                                C-64.103,12.082 -62.855,14.706 -60.535,13.676 
                                C-57.985,12.556 -59.473,9.699 -60.373,7.719 
                                C-62.363,3.369 -65.408,-3.13 -66.087,-5.614Z"
                                stroke="#23201F"
                                strokeWidth={2}
                                fill="rgba(35, 32, 31, 0)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                            />
                        </g>
                    </svg>
                </div>
                <div className="z-[2] h-[15vw] w-[15vw] absolute top-[25%] md:top-[20%] max-md:left-[45%] left-[40%] ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="inherit" height="inherit" fill="none">
                        <g transform="translate(100,75)">
                            <motion.path
                                ref={pathRef_3}
                                d="M18.892,39.459 
                                C12.652,24.32 6.514,9.638 -0.888,-4.598 
                                C-8.356,-18.961 -18.613,-30.949 -28.728,-43.211 
                                C-29.454,-44.091 -30.253,-44.958 -30.752,-45.963 
                                C-31.211,-46.886 -31.128,-47.925 -30.26,-48.766 
                                C-29.49,-49.512 -28.781,-49.376 -27.844,-49.042 
                                C-25.989,-48.38 -24.45,-47.336 -23.115,-45.922 
                                C-11.713,-33.844 -0.488,-21.572 5.49,-5.727 
                                C8.449,2.116 12.008,9.687 15.191,17.422 
                                C17.512,23.062 19.421,28.869 22.067,35.281 
                                C24.031,27.69 24.529,20.714 25.605,13.839 
                                C25.704,13.21 25.697,12.547 25.894,11.952 
                                C26.435,10.322 27.175,8.66 29.295,9.137 
                                C31.253,9.577 31.091,11.213 30.951,12.838 
                                C30.166,21.977 28.26,30.954 27.081,40.034 
                                C26.82,42.045 26.889,44.097 26.683,46.117 
                                C26.359,49.289 24.449,50.126 21.658,48.504 
                                C12.888,43.407 4.681,37.349 -4.619,33.151 
                                C-5.84,32.6 -7.503,32.044 -6.68,30.174 
                                C-5.956,28.529 -4.48,28.81 -3.047,29.232 
                                C2.594,30.891 7.948,33.19 12.879,36.404 
                                C14.678,37.577 16.433,38.796 18.892,39.459Z"
                                stroke="#23201F"
                                strokeWidth={2}
                                fill="rgba(35, 32, 31, 0)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }} />
                        </g>
                    </svg>
                </div>
                <div className="video_1 absolute w-[200px] max-sm:left-[10%] max-md:left-[30%] md:w-[400px] ">
                    <video
                        className=" outline-none ring-0 shadow-none m-0 p-0 block"
                        src="/v2.mp4"
                        autoPlay loop playsInline
                    />
                    <div className="absolute bottom-0 h-2 w-full bg-[#F8F4F2]"></div>
                </div>
                <div className="video_2 absolute top-[35%] max-sm:-left-[0%] max-sm:w-[130px] md:top-[35%] md:-left-[20%] w-[150px] md:w-[200px]">
                    <video
                        className="outline-none ring-0 shadow-none m-0 p-0 block"
                        src="/v3.mp4"
                        autoPlay loop playsInline
                    />
                    <div className="absolute bottom-0 h-2 w-full bg-[#F8F4F2]"></div>
                </div>
                <div className="video_3 absolute right-0 top-[35%] max-sm:left-[55%] max-lg:left-[65%] md:top-[35%] max-sm:w-[130px] w-[150px] md:w-[200px]">
                    <video
                        className="outline-none ring-0 shadow-none m-0 p-0 block"
                        src="/v5.mp4"
                        autoPlay loop playsInline
                    />
                    <div className="absolute bottom-0 h-2 w-full bg-[#F8F4F2]"></div>
                </div>
            </div>
        </div>
    );
};

export default Page1;
