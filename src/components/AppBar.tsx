import { useAppBar } from "../Contexts/UseAppBar"
import AnimateLogo from "./AnimateLogo"
import Button from "./Button"
import MenuCrossIcons from "./MenuCrossIcons";

const AppBar = () => {
    const { handleMenu } = useAppBar();

    return (
        <div style={{ fontFamily: 'f2, sans-serif' }} className="pt-[30px] max-md:flex max-md:justify-center max-md:items-center text-[16px] text-gray-500 grid grid-cols-15" >
            {/* logo */}
            <div style={{ fontFamily: 'f5, sans-serif' }} className="tbh_logo h-[110px] z-[999999] w-[160px] max-md:h-[140px] max-md:w-[190px] relative top-[-8px] border-black col-span-2 flex items-center ">
                {/* <img src="/logo.svg" className="h-[110px] w-[160px] " alt="" /> */}
                <AnimateLogo />
            </div>
            {/* menu items */}
            <div className="flex flex-row gap-[26px] max-md:hidden col-span-9 items-center ">
                <span className="hover:text-zinc-950 cursor-pointer duration-300">Basic Needs</span>
                <span className="hover:text-zinc-950 cursor-pointer duration-300">K12</span>
                <span className="hover:text-zinc-950 cursor-pointer duration-300">Heiger Ed</span>
                <span className="hover:text-zinc-950 cursor-pointer duration-300">Families</span>
                <span className="hover:text-zinc-950 cursor-pointer duration-300">Enterprise</span>
            </div>
            {/* login and join button */}
            <div className="flex flex-row gap-[16px] max-md:hidden col-span-4 justify-center items-center">
                <Button variant="Empty" >
                    Login
                </Button>
                <Button variant="Filled" >
                    Join Now
                </Button>
            </div>
            <div className="z-[999999999] md:hidden bg-white shadow-[0px_0px_16px] shadow-black/30 flex justify-center items-center rounded-full h-[50px] w-[50px] " onClick={handleMenu}>
                <MenuCrossIcons />
            </div>
        </div>
    )
}

export default AppBar