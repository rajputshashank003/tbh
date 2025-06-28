import { useGSAP } from "@gsap/react";
import Button from "./Button";
import gsap from "gsap";

const Page1 = () => {
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
          transformOrigin: 'bottom left' ,
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
          transformOrigin: 'bottom left' ,
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
          transformOrigin: 'bottom right' ,
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
          transformOrigin: 'bottom left' ,
          duration: 1.7,
          delay: 1,
          ease: "elastic.out(0.8,0.5)",
        },
        'abc'
      );
  });

  return (
    <div className="lg:grid grid-cols-2 flex flex-col md:px-[100px] px-[20px] py-[26px] text-[#211E1D] overflow-hidden ">
      {/* left */}
      <div className="flex flex-col col-span-1 gap-[62px] ">
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
            <div className="students1 inline-block">students</div>
          </div>
        </div>
        <div
          style={{ fontFamily: "f3, sans-serif" }}
          className="text-[24px] max-md:text-center para_1 md:pr-[200px] leading-tight whitespace-normal font-[500] text-[rgb(33, 30, 29)] "
        >
          Helping your students succeed and thrive with the help of licensed
          therapists and a community of peers. When and where they need it most.
        </div>
        <div className="max-w-[160px] button_1 flex max">
          <Button variant="Filled" className="text-[18px] ">
            Join Now
          </Button>
        </div>
      </div>
      {/* right  */}
      <div className="flex flex-col border-4 border-black col-span-1 min-h-[100vh] top-10 lg:-top-10 left-0 relative">
        {/* <img src="/Colleges/c1.svg" alt="" className="border-3 border-black" />
        <img src="/o.svg" alt="" className="border-3 border-black" />
        <img src="/star1.svg" alt="" />
        <img src="/star2.svg" alt="" />
        <img src="/three_arrow.svg" alt="" />
        <img src="/Arrows/arrow1.svg" alt="" />
        <img src="/Arrows/arrow2.svg" alt="" />
        <img src="/Arrows/arrow3.svg" alt="" />
        <img src="/live.svg" alt="" /> */}
        <div className="video_1 absolute w-[200px] max-sm:left-[10%] max-md:left-[30%] md:w-[400px] ">
          <video
            className=" outline-none ring-0 shadow-none m-0 p-0 block"
            src="/v2.mp4" 
            autoPlay loop  playsInline
          />
          <div className="absolute bottom-0 h-2 w-full bg-[#F8F4F2]"></div>
        </div>
        <div className="video_2 absolute top-[20%] max-sm:-left-[10%] max-sm:w-[100px] md:top-[35%] md:-left-[20%] w-[150px] md:w-[200px]">
          <video
            className="outline-none ring-0 shadow-none m-0 p-0 block"
            src="/v3.mp4" 
            autoPlay loop  playsInline
          />
          <div className="absolute bottom-0 h-2 w-full bg-[#F8F4F2]"></div>
        </div>
        <div className="video_3 absolute right-0 top-[20%] md:top-[35%] max-sm:w-[100px]  w-[150px] md:w-[200px]">
          <video
            className="outline-none ring-0 shadow-none m-0 p-0 block"
            src="/v5.mp4" 
            autoPlay loop  playsInline
          />
          <div className="absolute bottom-0 h-2 w-full bg-[#F8F4F2]"></div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
