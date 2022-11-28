import { useState } from "react";
import View from '../../assets/view.png'
import Hide from '../../assets/hide.png'
import Pix from '../../assets/pix.png'
import Tranferencia from '../../assets/transferencia.png'
import Cartao from '../../assets/cartao.png'
import Investimento from '../../assets/investimento.png'
import { Link } from 'react-router-dom'
import { useAccount } from "../navbar/Navbar";

export const LogadoBody = () => {
    const session = useAccount();
    const [image, setImage] = useState(false)
    const aux = '*';

    if (!session) {
        return <div>Loading..</div>
    }

    return (  
        <div>
            <div className="bg-[url('../src/assets/zunisha.jpg')] bg-no-repeat h-[40rem] bg-cover">
                <h1 className="text-9xl">Seja bem-vindo {session.conta.cliente.nome}</h1>
            </div>
        <div className="bg-indigo-500 flex">
            <div className="alinha-tudo flex-row mt-16">
            <div className="text-2xl flex flex-row gap-3 "> Seu Saldo é: R$
                <button href="" onClick={() => { setImage(!image) }} className="flex flex-row">
                    {image === false ? (<>{aux.repeat(session.conta.saldo.toString().length)} <img src={Hide} className="w-8 h-8 ml-8" alt="olho"/></>) : (<>{session.conta.saldo}<img src={View} className="w-8 h-8 ml-8" alt="olho2"></img></>)}
                </button>
                <div>Agencia: {session.conta.agencia}</div>
                <div>Numero da Conta: {session.conta.numeroConta}</div>
            </div>
            </div>
        </div>
        <div className="flex flex-row-reverse flex-wrap justify-center items-end">
            <div className="ml-16 mt-16">
                <div className="flex justify-center mt-8 border-2 border-indigo-400">
                    <Link to="/pix">
                    <img src={Pix} alt="pix" className="h-16 w-16"/><h1 className="mt-2 text-5xl ml-2">Pix</h1>
                    </Link>
                </div>
                <div className="flex justify-center mt-8 border-2 border-indigo-400">
                    <Link to="/transferencia">
                    <img src={Tranferencia} alt="transferencia" className="h-16 w-16"/><h1 className="mt-2 text-5xl ml-2">Transferência</h1>
                    </Link>
                </div>

            </div>
            <div className="mr-16">
            <div className="flex justify-center mt-8 border-2 border-indigo-400">
                <Link to="/investimento">
                    <img src={Investimento} alt="investimento" className="h-16 w-16"/><h1 className="mt-2 text-5xl ml-2">Investimento</h1>
                </Link>
                </div>
            <div className="flex justify-center mt-8 border-2 border-indigo-400">
                <Link to="/card"><img src={Cartao} alt="Cartao" className="h-16 w-16"/><h1 className="mt-2 text-5xl ml-2">Cartão</h1></Link>
                </div>
            </div>
            </div>
        </div>
    )
}
