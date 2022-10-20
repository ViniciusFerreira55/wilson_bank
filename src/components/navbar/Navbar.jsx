import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div className="place-content-evenly bg-purple-500 content-center rounded-b-lg flex justify-center">
            <div className="object-scale-down h-20 w-96"><img className="h-auto w-screen" src={Logo} alt="logo"/></div>
            <ul> 
                <li className="inline-block p-8"><Link to="/">Home</Link></li>
                <li className="inline-block p-8"><Link to="/about">Sobre</Link></li>
                <li className="inline-block p-8"><Link to="/card">Cartões</Link></li>
                <li className="inline-block "><a className="p-12 rounded-full py-3 px-6 bg-purple-400" href="Login">Login</a></li>
                <li className="inline-block"><a className=" p-12 rounded-full py-3 px-6 bg-purple-400 last:ml-5" href="Cadastrar-se"><Link to='/login'>Cadastrar-se</Link></a></li>
            </ul>
        </div>
    )
}