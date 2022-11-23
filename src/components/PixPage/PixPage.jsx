import { Navbar } from "../navbar/Navbar"
import { Footer } from "../footer/Footer"
import PixIcon from "../../assets/pix.png"
import Kizaru from "../../assets/kizaru.png"
import { useAccount } from "../navbar/Navbar"
export const PixPage = () =>{
    const session = useAccount()
    return(
        <div>
            <Navbar/>
            {!session &&
            <>
            <div className="pt-8 flex">
            <div>
                <img src={PixIcon} alt="Pix icon"  className="h-44 w-44 absolute ml-72"/>
                </div>
            <div className="mt-64 ml-60 text-2xl">
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
                
                <img src={Kizaru} alt="PixGirl" className="PixGirl"/>
            </div>
            </>
            }            
            <div>
                <Footer/>
            </div>
        </div>
    )
}