import { useState } from "react";
import View from '../../assets/view.png'
import Hide from '../../assets/hide.png'
import Pix from '../../assets/pix.png'
import Tranferencia from '../../assets/transferencia.png'
import Cartao from '../../assets/cartao.png'
import Investimento from '../../assets/investimento.png'
import { Link } from 'react-router-dom'

export const LogadoBody = () => {
    const [saldo, setSaldo] = useState(100)
    const [image, setImage] = useState(false)
    const aux = '*';

    return (
        <div>
        <div className="bg-indigo-500 flex">
            <div className="alinha-tudo flex-row">
            <div className="text-2xl flex flex-row gap-3 "> Seu Saldo é:
                <button href="" onClick={() => { setImage(!image) }} className="flex flex-row">
                    {image === false ? (<>{aux.repeat(saldo.toString().length)} <img src={Hide} className="w-8 h-8 ml-8"/></>) : (<>{saldo}<img src={View} className="w-8 h-8 ml-8"></img></>)}
                </button>
            </div>
            </div>
        </div>
        <div className="flex flex-row-reverse flex-wrap justify-center items-end">
            <div className="ml-16">
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
                    <img src={Investimento} alt="investimento" className="h-16 w-16"/><h1 className="mt-2 text-5xl ml-2">Pix</h1>
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