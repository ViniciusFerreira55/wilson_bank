import { Navbar } from "../navbar/Navbar";
import { Link } from 'react-router-dom'
export const Register = () => {
    return(
        <div>
            <Navbar/>
            <div className="fundo2">
            <div className="ml-36 inline-grid mt-32 ml-96">
                    <ul className="formulario ">
                    <li><input type="text" name="nome" placeholder="Nome" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="text" name="cpf" placeholder="CPF" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="date" name="dataNas" placeholder="Data de nascimento" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="email" name="email"  placeholder="Email" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="password" name="senha" placeholder="senha" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="password" name="confirmar" placeholder="Confirmar Senha" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96"/></li>
                    <li className="text-center"><a className="inline-block p-12 rounded-full py-3 px-6 bg-purple-400 last:ml-5" href="Home"><Link to="/">Cadastrar-se</Link></a></li>
                    </ul>
            </div>
        </div>
        </div>
    )
}