import Button from "./Button"

const AppBar = () => {
    return (
        <div style={{ fontFamily: 'f2, sans-serif' }} className="pt-[30px] text-[16px] text-gray-500 grid grid-cols-15" >
            {/* logo */}
            <div style={{ fontFamily: 'f5, sans-serif' }} className="tbh_logo relative top-[-8px] border-black col-span-2 flex items-center ">
                <img src="/logo.svg" className="h-[110px] w-[160px] " alt="" />
            </div>
            {/* menu items */}
            <div className="flex flex-row gap-[26px] col-span-9 items-center ">
                <span className="hover:text-zinc-950 cursor-pointer duration-300">Basic Needs</span>
                <span className="hover:text-zinc-950 cursor-pointer duration-300">K12</span>
                <span className="hover:text-zinc-950 cursor-pointer duration-300">Heiger Ed</span>
                <span className="hover:text-zinc-950 cursor-pointer duration-300">Families</span>
                <span className="hover:text-zinc-950 cursor-pointer duration-300">Enterprise</span>
            </div>
            {/* login and join button */}
            <div className="flex flex-row gap-[16px] col-span-4 justify-center items-center">
                <Button variant="Empty" >
                    Login
                </Button>
                <Button variant="Filled" >
                    Join Now
                </Button>
            </div>
        </div>
    )
}

export default AppBar