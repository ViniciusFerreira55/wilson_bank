import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import Shirohige from "../../assets/Shirohige.png"

export const LoginPage = () =>{
    return(
        <div>
            <Navbar/>
            <div className="flex ml-60">
                <img src={Shirohige} alt="Shirohige" className="Shirohige ml-36"/>
                <div className="ml-36 inline-grid">
                    <ul className="formulario">
                    <li><input type="text" placeholder="Nome" className="border-4 p-5 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="text" placeholder="CPF" className="border-4  p-5 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="text" placeholder="Email" className="border-4 p-5 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="text" placeholder="Telefone" className="border-4  p-5 border-indigo-600 h-14 w-96"/></li>
                    <li className="text-center"><a className="inline-block p-12 rounded-full py-3 px-6 bg-purple-400 last:ml-5" href="Cadastrar-se">Cadastrar-se</a></li>
                    </ul>
                </div>
                </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}