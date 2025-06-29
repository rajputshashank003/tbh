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
                <div className="min-h-screen px-[20px] bg-[#F8F4F2] pb-[60px] ">
                    <AppBar />
                    <SlideMenu/>
                    <LandingPage />
                </div>
            </AppBarProvider>
        </BrowserRouter>
    )
}

export default App