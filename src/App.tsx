import { useEffect } from "react"
import LandingPage from "./Screens/LandingPage"
import AppBar from "./components/AppBar"
import LocomotiveScroll from "locomotive-scroll"

const App = () => {
    useEffect(() => {
        const locomotive = new LocomotiveScroll();
        
        return () => locomotive.destroy();
    }, []);
    
    return (
        <div className="min-h-screen px-[20px] bg-[#F8F4F2] ">
            <AppBar />
            <LandingPage />
        </div>
    )
}

export default App