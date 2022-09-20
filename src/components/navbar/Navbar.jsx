import Logo from "../../assets/logo.png"

export const Navbar = () => {
    return (
        <div className="bg-purple-500 content-center rounded-b-lg flex justify-center">
            <div className="object-scale-down h-48 w-96"><img src={Logo} alt="logo"/></div>
            <ul> 
                <li className="inline-block p-8"><a href="Vantagens">Vantagens</a></li>
                <li className="inline-block p-8"><a href="Sobre">Sobre</a></li>
                <li className="inline-block p-8"><a href="Cartões">Cartões</a></li>
                <li className="inline-block p-8 rounded-full py-3 px-6 bg-purple-400"><a href="Login">Login</a></li>
                <li className="inline-block p-8 rounded-full py-3 px-6 bg-purple-400"><a href="Cadastrar-se">Cadastrar-se</a></li>
            </ul>
        </div>
    )
}