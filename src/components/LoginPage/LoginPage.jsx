import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import Shirohige from "../../assets/Shirohige.png"
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";
const loginApiUrl = 'http://localhost:8000/login/';


export const LoginPage = () =>{
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        const userString = sessionStorage.getItem('user');
        const user = JSON.parse(userString);
        if (!user) {
            console.log('user nao existe no session storage')
            return
        }
        console.log('vc ja esta logado', user)
        navigate('/')
    }, [])

    const logar = () =>{
        const objLogin = {cpf, password}
        const headers = {
            'Content-Type': 'application/json',
          };
        fetch(loginApiUrl, { method: 'POST', headers, body: JSON.stringify(objLogin)})
            .then(res => {
                res.json().then(vv =>{
                    if (vv.cliente) {
                        sessionStorage.setItem('user', JSON.stringify({ user: vv.cliente }));
                        navigate('/')
                        return
                    }
                    
                    console.log('DEU BOMBA')
                })
            })
    }

    return(
        <div>
            <Navbar/>
            <div className="flex ml-60">
                <img src={Shirohige} alt="Shirohige" className="Shirohige ml-36"/>
                <div className="ml-36 inline-grid">
                    <ul className="formulario">
                    <li><input value={cpf} onChange={e=>setCpf(e.target.value)} type="text" placeholder="CPF" name="cpf" className="border-4  p-5 border-indigo-600 h-14 w-96"/></li>
                    <li><input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="senha" name="password" className="border-4  p-5 border-indigo-600 h-14 w-96"/></li>
                    <li className="text-center"><button className="inline-block p-12 rounded-full py-3 px-6 bg-purple-400 last:ml-5" onClick={logar}>Entrar</button></li>
                    </ul>
                </div>
                </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}