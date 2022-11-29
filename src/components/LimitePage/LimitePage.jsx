import { Navbar } from "../navbar/Navbar"
import { Footer } from "../footer/Footer"
import Nami from "../../assets/nami.png"
export const LimitePage = () => {
    return(
        <div>
        <Navbar/>
        <div>
        <div>
            <img src={Nami} alt="ace" />
        </div>
        </div>        
        <div>
        <Footer/>
        </div>
    </div>
    )
}