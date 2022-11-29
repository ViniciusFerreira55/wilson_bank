import Ace from "../../assets/ace.png"
import { Navbar } from "../navbar/Navbar"
import { Footer } from "../footer/Footer"


export const PagamentoPage = () =>{
    return(
        <div>
            <Navbar/>
            <div>
            <div>
                <img src={Ace} alt="ace" />
            </div>
            </div>        
            <div>
            <Footer/>
            </div>
        </div>
    )
}