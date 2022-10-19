import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import Shirohige from "../../assets/Shirohige.png"

export const LoginPage = () =>{
    return(
        <div>
            <Navbar/>
            <div className="pt-8 flex">
                <img src={Shirohige} alt="Shirohige" className="Shirohige ml-36"/>
                <div className="ml-36 inline-grid">
                    <ul>
                    <li><input type="text" className="border-4 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="text" className="border-4 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="text" className="border-4 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="text" className="border-4 border-indigo-600 h-14 w-96"/></li>
                    <li className="inline-block p-12 rounded-full py-3 px-6 bg-purple-400 last:ml-5"><a href="Cadastrar-se">Cadastrar-se</a></li>
                    </ul>
                </div>
                </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}