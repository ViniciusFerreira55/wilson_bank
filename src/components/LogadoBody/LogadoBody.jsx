import { useState } from "react";
import { useEffect } from "react";
import View from '../../assets/view.png'
import Hide from '../../assets/hide.png'



export const LogadoBody = () => {
    const [saldo, setSaldo] = useState(100)
    const [image, setImage] = useState(false)
    const aux = '*';

    return (
        <div className="bg-indigo-500 flex">
            <div className="alinha-tudo flex-row">
            <div className="text-2xl flex flex-row gap-3 "> Seu Saldo é:
                <button href="" onClick={() => { setImage(!image) }} className="flex flex-row">
                    {image === false ? (<>{aux.repeat(saldo.toString().length)} <img src={Hide} className="w-8 h-8 ml-8"/></>) : (<>{saldo}<img src={View} className="w-8 h-8 ml-8"></img></>)}
                </button>
            </div>
            </div>

        </div>
    )
}