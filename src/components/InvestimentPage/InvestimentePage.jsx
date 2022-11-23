import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import Sanji from "../../assets/sanji.png"
import InvestimentIcon from "../../assets/investimento.png"
import { useAccount } from "../navbar/Navbar";
export const InvestimentPage = () =>{
    const session = useAccount()
    return(
        <div>
            <Navbar/>
            {!session && 
            <>
             <div className="pt-8 flex">
                <img src={Sanji} alt="Man" className="manInvestiment pl-16"/>
                <div>
                    <img src={InvestimentIcon} alt="transference icon"  className="h-44 w-44  iconCoin"/>
                </div>
                <div className="mt-64 mr-24 text-2xl">
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
            <div>
            <Footer/>
            </div>
        </div>
    )
}