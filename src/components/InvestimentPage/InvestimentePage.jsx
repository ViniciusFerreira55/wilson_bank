import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import Sanji from "../../assets/sanji.png"
import InvestimentIcon from "../../assets/investimento.png"
import { useAccount } from "../navbar/Navbar";
import Law from "../../assets/law.png"

export const InvestimentPage = () =>{
    const session = useAccount()
    return(
        <div>
            <Navbar/>
            {!session && 
            <>
             <div className="flex">
                <img src={Sanji} alt="Man" className="sanji pl-16"/>
                <div>
                    <img src={InvestimentIcon} alt="transference icon"  className="h-44 w-44 absolute ml-72 "/>
                </div>
                <div className="mt-64 mr-24 text-2xl ml-64 font-mono font-bold">
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
            </>
            }  
            {session &&
            <>
            <div>
            <div>
                <img src={Law} alt="law" />
            </div>
            </div>
            </>
            }         
            <div>
            <Footer/>
            </div>
        </div>
    )
}