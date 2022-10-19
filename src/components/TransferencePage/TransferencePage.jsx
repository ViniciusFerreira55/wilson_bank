import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import Man from "../../assets/transferenceMan.png"
import TransIcon from "../../assets/transferencia.png"



export const TransferencePage = () =>{
    return(
        <div>
            <Navbar/>
            <div className="pt-8 flex">
                <img src={Man} alt="Man" className="manTransference"/>
                <div>
                    <img src={TransIcon} alt="transference icon"  className="h-44 w-44 right-0 absolute mr-64"/>
                </div>
                <div className="mt-64 ml-80 text-2xl">
                    <h2>Lorem ipsum dolor sit</h2>
                    <h2>amet, consectetur</h2>
                    <h2>adipiscing elit, sed do</h2>
                    <h2>eiusmod tempor</h2>
                    <h2>incididunt ut labore et</h2>
                    <h2>dolore magna aliqua.</h2>
                    <h2>Ut enim ad minim</h2>
                    <h2>veniam, quis nostrud</h2>
                    <h2>exercitation ullamco</h2>
                    <h2>laboris nisi ut aliquip</h2>
                </div>
            </div>
            <div>
            <Footer/>
            </div>
        </div>
    )
} 