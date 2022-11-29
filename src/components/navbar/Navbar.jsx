import Logo from "../../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import { useEffect } from "react";
import Swal from 'sweetalert2'
/** @typedef {object} session
 * @property {object} conta
 * @property {string} conta.numeroConta
 * @property {string} conta.agencia
 * @property {string} conta.tipo
 * @property {number} conta.saldo
 * @property {object} conta.cliente
 * @property {string} conta.cliente.nome
 * @property {string} conta.cliente.cpf
 * @property {string} conta.cliente.data_nascimento
 * @property {string} conta.cliente.email
 * @property {string} conta.cliente.data_cadastro
 * @property {string} conta.cliente.password
 * @property {string} conta.numeroCartao
 * @property {string} conta.validade
 * @property {string} conta.cvv
 * @property {string} conta.cardImage
 */

/**
 * 
 * @returns { session }
 */
export const useAccount = () => {
    const [account, setAccount] = useState();

    useEffect(() => {
        const accString = sessionStorage.getItem('conta');
        try {
            const _account = JSON.parse(accString);
            setAccount(_account)
        } catch (err) {
            
        }
    }, [])

    return account;
}

export const useLogoff = () => {
    const navigate = useNavigate()

    return {
        logoff: () => {
            sessionStorage.removeItem('conta')
            Swal.fire({
                title: 'Saindo',
                text: 'Até mais',
                icon: 'success',
                confirmButtonText: 'Continuar'
              })
            navigate('/login')
        }
    }
}

export const Navbar = () => {
    const session = useAccount();
    const { logoff } = useLogoff();

    return (
        <div className="place-content-evenly bg-purple-500 content-center rounded-b-lg flex justify-center">
            <div className="object-scale-down h-20 w-96"><img className="h-auto w-screen" src={Logo} alt="logo"/></div>
            <ul>
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