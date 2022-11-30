import { useState } from "react";
import View from '../../assets/view.png'
import Hide from '../../assets/hide.png'
import Pix from '../../assets/pix.png'
import Tranferencia from '../../assets/transferencia.png'
import Cartao from '../../assets/cartao.png'
import Investimento from '../../assets/investimento.png'
import { Link } from 'react-router-dom'
import { useAccount } from "../navbar/Navbar";
import Limite from "../../assets/limit.png"
import Pagamento from "../../assets/pagamento.png"
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
                <h1 className=" bg-cyan-100 text-center text-9xl bg-opacity-70 font-mono font-bold rounded-lg">Seja bem-vindo {session.conta.cliente.nome}</h1>
            </div>
        <div className="bg-cyan-500 flex">
            <div className="alinha-tudo flex-row mt-16">
            <div className="text-5xl flex flex-row gap-3 mb-20 ml-52 font-bold font-mono"> Seu Saldo é: R$
                <button href="" onClick={() => { setImage(!image) }} className="flex flex-row">
                    {image === false ? (<>{aux.repeat(session.conta.saldo.toString().length)} <img src={Hide} className="w-8 h-8 ml-8" alt="olho"/></>) : (<>{session.conta.saldo}<img src={View} className="w-8 h-8 ml-8" alt="olho2"></img></>)}
                </button>
                <div>Agencia: {session.conta.agencia}</div>
                <div>Numero da Conta: {session.conta.numeroConta}</div>
            </div>
            </div>
        </div>
        <div className="flex flex-row-reverse flex-wrap justify-center items-end h-84">
            <div className="ml-16 mt-16  py-20">
                <div className="flex justify-center  border-2 border-cyan-400 mb-10">
                    <Link to="/pix">
                    <img src={Pix} alt="pix" className="h-16 w-16"/><h1 className="mt-2 text-5xl ml-2">Pix</h1>
                    </Link>
                </div>
                <div className="flex justify-center mt-8 border-2 border-cyan-400">
                    <Link to="/transferencia">
                    <img src={Tranferencia} alt="transferencia" className="h-16 w-16"/><h1 className="mt-2 text-5xl ml-2">Transferência</h1>
                    </Link>
                </div>
                <div className="flex justify-center mt-8 border-2 border-cyan-400">
                    <Link to="/pagamento">
                    <img src={Pagamento} alt="transferencia" className="h-16 w-16"/><h1 className="mt-2 text-5xl ml-2">Pagamento</h1>
                    </Link>
                </div>

            </div>
            <div className="mr-16 py-20">
            <div className="flex justify-center mt-8 border-2 border-cyan-400">
                <Link to="/investimento">
                    <img src={Investimento} alt="investimento" className="h-16 w-16"/><h1 className="mt-2 text-5xl ml-2">Investimento</h1>
                </Link>
                </div>
            <div className="flex justify-center mt-8 border-2 border-cyan-400">
                <Link to="/card"><img src={Cartao} alt="Cartao" className="h-16 w-16"/><h1 className="mt-2 text-5xl ml-2">Cartão</h1></Link>
                </div>
            <div className="flex justify-center mt-8 border-2 border-cyan-400">
                <Link to="/limit"><img src={Limite} alt="limite" className="h-16 w-16"/><h1 className="mt-2 text-5xl ml-2">Limite</h1></Link>
                </div>
            </div>
            </div>
        </div>
    )
}
