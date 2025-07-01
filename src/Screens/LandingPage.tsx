import Page1 from "../components/LandingPage/Page1"
import Page2 from "../components/LandingPage/Page2"
import Page3 from "../components/LandingPage/Page3"
import Page4 from "../components/LandingPage/Page4"
import Page5 from "../components/LandingPage/Page5"
import Page6 from "../components/LandingPage/Page6"

const LandingPage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />   
            <Page6 />
        </div>
    )
}

export default LandingPage