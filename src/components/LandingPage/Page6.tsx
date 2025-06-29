import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Button from "../Button";
import Navigation from "./Page6/Navigation";
import AnimatedGrids from "./Page6/AnimatedGrids";
gsap.registerPlugin(ScrollTrigger);

const Page6 = () => {
    const par = useRef(null);

    useGSAP(() => {
        const gtl = gsap.timeline({
            scrollTrigger: {
                trigger: par.current,
                start: "top 60%",
                toggleActions: "play none none none",
                // markers: true,
            },
        });

        gtl
        .fromTo(
            ".courses",
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
            ".across",
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
            ".multiple",
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
            ".categories",
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
            '.all123', 
            {
                x: -200,
                opacity: 0,
            }, {
                ease: 'elastic.out(0.8,0.5)',
                opacity: 1,
                x: 0,
                duration: 2,
                stagger: 0.2
            },
            'abc'
        ).fromTo(
            '.grid_items_1',
            { opacity: 0, scale: 0, transformOrigin: "bottom left" },
            { opacity: 1, scale: 1, duration: 0.8,delay: 1, ease: "easeInOut" }, 'abc'
        ).fromTo(
            '.grid_items_2',
            { opacity: 0, scale: 0, transformOrigin: "center" },
            { opacity: 1, scale: 1, duration: 0.8, delay: 1.1, ease: "easeInOut" }, 'abc'
        )
        .fromTo(
            '.grid_items_3',
            { opacity: 0, scale: 0, transformOrigin: "top right" },
            { opacity: 1, scale: 1, duration: 0.8, delay: 1.4, ease: "easeInOut" }, 'abc'
        )
        .fromTo(
            '.grid_items_4',
            { opacity: 0, scale: 0.8, transformOrigin: "top center" },
            { opacity: 1, scale: 1, duration: 0.8, delay: 1.8, ease: "easeInOut" }, 'abc'
        );
    });
    return (
        <div data-scroll data-scroll-speed={0.06} ref={par} className="rounded-[12px] bg-white shadow-[0px_2px_16px] shadow-gray-300 mt-[40px] py-2 px-[16px] min-h-[70vh] ">
            <div className="top flex flex-row justify-between">
            <div
                style={{ fontFamily: "f5, sans-serif" }}
                className="tag_line text-[40px] max-md:text-center md:text-[50px] lg:text-[70px] leading-[1]"
            >
                <div className="mh">
                    <div className="courses inline-block">Courses &nbsp;</div>
                    <div className="across inline-block">Across</div>
                </div>
                <div className="rf">
                    <div className="multiple inline-block">Multiple &nbsp;</div>
                    <div className="categories inline-block">Categories</div>
                </div>
            </div>
            <div className="w-[130px] ">
                <Button variant="Filled">
                    Register
                </Button>
            </div>
            </div>
            <Navigation />
            <AnimatedGrids />
        </div>
    );
};

export default Page6