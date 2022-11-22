import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

export const Register = () => {
    const urlApi = 'http://127.0.0.1:8000'
    const [nome, setNome] = useState('')
    const [cfp, setCpf] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [objetoClient, setObjetoClient] = useState({})
    const navigate = useNavigate();
    const numeroContaR = (Math.floor(Math.random() * 100000)+"-"+Math.floor(Math.random() * 10)).toString();
    const numeroAgenciaR = (Math.floor(Math.random() * 10000)).toString();
    // const [foto, setFoto] = useState('')
    // const [data, setData] = useState({
    //     title: "",
    //     description: "",
    //     image_url: "",
    // });

    const validarCadastro = () => {
        console.log(senha)
        console.log(confirmarSenha)
        if (senha !== confirmarSenha) {
            return console.log('zimbas')
        }

        cadastrar()

    }

    // const handleImageChange = (e) => {
    //     let newData = { ...data };
    //     newData["image_url"] = e.target.files[0];
    //     setData(newData);
    //     setFoto( e.target.files[0])
    //     console.log(newData);
    // };

    const cadastrar = () => {

        console.log("Enviar pra api...")

        // let form_data = new FormData();
        // form_data.append("foto", foto);
        // form_data.append("nome", nome);
        // form_data.append("cpf", cfp);
        // form_data.append("data_nascimento", dataNascimento);
        // form_data.append("email", email);
        // form_data.append("password", senha);
        // form_data.append("foto", foto);
        // console.log(form_data)
        

        const objCliente = { nome, cpf: cfp, data_nascimento: dataNascimento, email, password: senha }
        const headers = {
            'Content-Type': 'application/json',
        };

        const objConta = { cliente: objCliente, numeroConta: numeroContaR, agencia: numeroAgenciaR, tipo: 'C', saldo: 2500.00 }
        fetch(urlApi + '/conta/', { method: 'POST', headers, body: JSON.stringify(objConta) }).then(res => res.json()).then(dd => {
            console.log(dd)
        })

        navigate('/')
    }

    return (

        <div>
            <Navbar />
            <div className="fundo2">
                <div className="inline-grid mt-32 ml-96">
                    <form className="formulario list-none">
                        <h1>Nome</h1>
                        <li><input type="text" onChange={e => setNome(e.target.value)} name="nome" placeholder="Wilson" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96" /></li>
                        <h1>CPF</h1>
                        <li><input type="text" onChange={e => setCpf(e.target.value)} name="cpf" placeholder="12345678912" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96" /></li>
                        <h1>Data de Nascimento</h1>
                        <li><input type="date" onChange={e => setDataNascimento(e.target.value)} name="dataNas" placeholder="Data de nascimento" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96" /></li>
                        <h1>Email</h1>
                        <li><input type="email" onChange={e => setEmail(e.target.value)} name="email" placeholder="jonas@gmail.com" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96" /></li>
                        <h1>Senha</h1>
                        <li><input type="password" onChange={e => setSenha(e.target.value)} name="senha" placeholder="123456" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96" /></li>
                        <h1>Confirmar Senha</h1>
                        <li><input type="password" onChange={e => setConfirmarSenha(e.target.value)} name="confirmar" placeholder="123456" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96" /></li>
                        {/* <h1>Foto</h1>
                    <li><input type="file" onChange={(e) => {handleImageChange(e)}}  name="photo" placeholder="Photo" className="border-4 mb-4 p-5 border-indigo-600 h-14 w-96"/></li> */}
                        <li className="text-center"><a className="inline-block p-12 rounded-full py-3 px-6 bg-purple-400 last:ml-5"><button type="button" onClick={validarCadastro}>Cadastrar-se</button></a></li>
                    </form>
                </div>
            </div>
        </div>
    )
}