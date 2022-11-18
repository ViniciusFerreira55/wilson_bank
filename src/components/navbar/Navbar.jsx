import Logo from "../../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import { useEffect } from "react";


export const useUser = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userString = sessionStorage.getItem('user');
        try {
            const _User = JSON.parse(userString);
            setUser(_User)
        } catch (err) {
            
        }
    }, [])

    return user;
}

export const useLogoff = () => {
    const navigate = useNavigate()

    return {
        logoff: () => {
            sessionStorage.removeItem('user')
            navigate('/login')
        }
    }
}

export const Navbar = () => {
    const session = useUser();
    const { logoff } = useLogoff();

    return (
        <div className="place-content-evenly bg-purple-500 content-center rounded-b-lg flex justify-center">
            <div className="object-scale-down h-20 w-96"><img className="h-auto w-screen" src={Logo} alt="logo"/></div>
            <ul>
                {session &&
                <>
                <li className="inline-block p-8">Bem-Vindo {session.user.nome}</li>
                </>
                } 
                <li className="inline-block p-8"><Link to="/">Home</Link></li>
                <li className="inline-block p-8"><Link to="/about">Sobre</Link></li>
                <li className="inline-block p-8"><Link to="/card">Cartões</Link></li>
                {!session && 
                <>
                    <li className="inline-block ">
                        <a className="p-12 rounded-full py-3 px-6 bg-purple-400" href="Login">
                            <Link to="/login">Login</Link>
                        </a>
                    </li>
                    <li className="inline-block">
                        <a className=" p-12 rounded-full py-3 px-6 bg-purple-400 last:ml-5" href="Register">
                            <Link to='/register'>Cadastrar-se</Link>
                        </a>
                    </li>
                </>
                }
                {session && 
                <>

                    <li className="inline-block ">
                        <button onClick={logoff} className="p-12 rounded-full py-3 px-6 bg-purple-400">Sair</button>
                    </li>
                </>
                }
            </ul>
        </div>
    )
}