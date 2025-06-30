import { useEffect } from "react"
import LandingPage from "./Screens/LandingPage"
import AppBar from "./components/AppBar"
import LocomotiveScroll from "locomotive-scroll"
import { BrowserRouter } from "react-router-dom"
import SlideMenu from "./components/SlideMenu"
import { AppBarProvider } from "./Contexts/UseAppBar"

const App = () => {
    useEffect(() => {
        const locomotive = new LocomotiveScroll();
        return () => locomotive.destroy();
    }, []);
    
    return (
        <BrowserRouter>
            <AppBarProvider>
                <div className="bg-[#F8F4F2] flex justify-center items-center flex-col">
                    <div className="min-h-screen max-w-[1400px] px-[20px]  pb-[60px] ">
                        <AppBar />
                        <SlideMenu/>
                        <LandingPage />
                    </div>
                </div>
            </AppBarProvider>
        </BrowserRouter>
    )
}

export default App