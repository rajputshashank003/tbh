import InteractiveImage_1 from "../InteractiveImage_1"

const Page2 = () => {
  return (
    <div data-scroll data-scroll-speed={0.01} className="bg-white max-sm:mx-[6vw] min-h-[100vh] md:top-[60px] relative flex flex-col justify-center items-center rounded-[12px] shadow-[0px_0px_10px] shadow-gray-200">
        <div data-scroll data-scroll-speed={0.06} className="relative -top-[80px] w-full">
            <div style={{ fontFamily: 'f1, serif'}} className="text-[22px] md:text-[26px] md:mx-[20%] flex flex-row">
                <span>Trusted by students at over 100 schools:</span>
                <img src="Arrows/arrow3.svg" className="h-[50px] w-[70px] max-md:hidden rotate-[-40deg] " alt="" />
            </div>
            <div className="clg_names mx-[40px] sm:mx-[5%] md:mx-[82px] rounded-[20px] max-md:gap-[5%] max-md:p-[5%] grid justify-center items-center grid-cols-2 md:grid-cols-4 bg-white min-h-[150px] shadow-md shadow-gray-400">
                <div className="grid max-md:h-full max-md:grid-rows-2 md:grid-cols-2 md:col-span-2 justify-center items-center">
                  <img src="/Colleges/c1.svg" className="h-[30px] max-md:w-[15vw] max-sm:w-[40vw] mx-auto" alt="" />
                  <img src="/Colleges/c7.svg" className="h-[30px] max-md:w-[15vw] max-sm:w-[40vw] mx-auto" alt="" />
                </div>
                <div className="grid max-md:h-full max-md:grid-rows-2 md:grid-cols-2 md:col-span-2 justify-center items-center">
                  <img src="/Colleges/c3.svg" className="h-[30px] max-md:w-[15vw] max-sm:w-[40vw] mx-auto" alt="" />
                  <img src="/Colleges/c6.svg" className="h-[30px] max-md:w-[15vw] max-sm:w-[40vw] mx-auto" alt="" />
                </div>
            </div>
        </div>
        <InteractiveImage_1 />
    </div>
  )
}

export default Page2