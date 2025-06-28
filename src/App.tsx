import LandingPage from "./Screens/LandingPage"
import AppBar from "./components/AppBar"

const App = () => {
    return (
        <div className="min-h-screen px-[20px] bg-[#F8F4F2] ">
            <AppBar />
            <LandingPage />
        </div>
    )
}

export default App