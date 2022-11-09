import { useState } from "react";
import { Navbar } from "../navbar/Navbar";

export const Register = () => {
    const urlApi = 'http://127.0.0.1:8000'
    const [nome, setNome] = useState('')
    const [cfp, setCpf] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [foto, setFoto] = useState('')

    const validarCadastro = () => {
        console.log(senha)
        console.log(confirmarSenha)
        if (senha != confirmarSenha){
            return console.log('zimbas')
        }

        cadastrar()
        
    } 

    const cadastrar = () => {

        console.log("Enviar pra api...")
        const objCliente = {nome: nome, cfp: cfp, dataNascimento: dataNascimento, email: email, senha: senha, foto: foto}
        const headers = {
            'Content-Type': 'application/json',
          };
        fetch(urlApi + '/clientes/', { method: 'POST', headers, body: objCliente}).then(res => res.json()).then(dd =>{ 
            console.log(dd)
        })
    }

    return(
        
        <div>
            <Navbar/>
            <div className="fundo2">
            <div className="ml-36 inline-grid mt-32 ml-96">
                    <ul className="formulario ">
                    <li><input type="text" onChange={e => setNome(e.target.value)} name="nome" placeholder="Nome" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="text" onChange={e => setCpf(e.target.value)} name="cpf" placeholder="CPF" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="date" onChange={e => setDataNascimento(e.target.value)} name="dataNas" placeholder="Data de nascimento" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="email" onChange={e => setEmail(e.target.value)} name="email"  placeholder="Email" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="password" onChange={e => setSenha(e.target.value)} name="senha" placeholder="senha" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="password"  onChange={e => setConfirmarSenha(e.target.value)}  name="confirmar" placeholder="Confirmar Senha" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96"/></li>
                    <li><input type="file" onChange={e => setFoto(e.target.value)} name="photo" placeholder="Photo" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96"/></li>
                    <li className="text-center"><a className="inline-block p-12 rounded-full py-3 px-6 bg-purple-400 last:ml-5"><button onClick={validarCadastro}>Cadastrar-se</button></a></li>
                    </ul>
            </div>
        </div>
        </div>
    )
}