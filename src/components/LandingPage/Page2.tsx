import InteractiveImage_1 from "../InteractiveImage_1"

const Page2 = () => {
  return (
    <div data-scroll data-scroll-speed={0.01} className="bg-white max-sm:mx-[40px] min-h-[100vh] md:top-[60px] relative flex flex-col justify-center items-center rounded-[12px] shadow-[0px_0px_10px] shadow-gray-200">
        <div data-scroll data-scroll-speed={0.06} className="relative -top-[80px] w-full">
            <div style={{ fontFamily: 'f1, serif'}} className="text-[26px] md:mx-[20%] flex flex-row">
                <span>Trusted by students at over 100 schools:</span>
                <img src="Arrows/arrow3.svg" className="h-[50px] w-[70px] max-md:hidden rotate-[-40deg] " alt="" />
            </div>
            <div className="clg_names mx-[40px] sm:mx-[5%] md:mx-[82px]rounded-[20px] max-sm:gap-[0px] gap-[16px]  bg-white min-h-[150px] shadow-md flex flex-row max-sm:flex-row justify-around items-center shadow-gray-400 bg">
                <div className="lg:flex-row flex-col gap-[26px] flex ">
                  <img src="/Colleges/c1.svg" className="h-[30px] max-md:w-[15vw] max-sm:w-[40vw]" alt="" />
                  <img src="/Colleges/c2.svg" className="h-[30px] max-md:w-[15vw] max-sm:w-[40vw]" alt="" />
                </div>
                <div className="lg:flex-row flex-col gap-[26px]flex">
                  <img src="/Colleges/c3.svg" className="h-[30px] max-md:w-[15vw] max-sm:w-[40vw]" alt="" />
                  <img src="/Colleges/c4.svg" className="h-[30px] max-md:w-[15vw] max-sm:w-[40vw]" alt="" />
                </div>
                <img src="/Colleges/c5.svg" className="h-[30px] max-lg:hidden max-lg:w-[10vw] max-sm:w-[30vw]" alt="" />
            </div>
        </div>
        <InteractiveImage_1 />
    </div>
  )
}

export default Page2