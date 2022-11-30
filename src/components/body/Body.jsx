import Card from '../../assets/card.png'
import IconCard from '../../assets/cartao.png'
import IconPix from '../../assets/pix.png'
import IconInvestimento from '../../assets/investimento.png'
import IconTransferencia from '../../assets/transferencia.png'
import { Link } from 'react-router-dom'
import Luffy from '../../assets/luffyCard.png'
export const Body = () => {
    return (
        <div className='bg-slate-200 z-20'>
            <div >
            <div className="flex flex-col bg-[url('../src/assets/luffy.png')] bg-no-repeat h-[60rem] bg-cover  p-40  ">
                <div className='mt-60 bg-slate-100 text-center text-4xl bg-opacity-70 font-mono font-bold rounded-lg' >
                <h1 className='text-cyan-800'>Wilsonstreet</h1>
                <h2>Venha fazer parte dessa caminhada</h2>
                <h3>Com WilsonStreet você </h3>
                <h3  className='mt-30text-center text-4xl '>   caminha para o sucesso!</h3>
                <a href="Cadastrar-se" className="inline-block p-12 rounded-full py-3 px-6 bg-cyan-400	last:ml-5 w-[20rem] self-end mt-4 "><Link to="/register">Cadastrar-se</Link></a>
                </div>
            </div>
           
        </div>
        <div className='conheca'>
            <div className='mb-20 text-center ml-10 text-3xl font-mono font-bold '>
            <div className=' pl-8 pt-8 flex'><h1>Conheça o cartão com os melhores benefícios</h1></div>
            <div className=' pl-8 pt-8'><h1>Receba cashback e milhas sem anuidade!!</h1></div>
            <a href="Cadastrar-se" className="inline-block p-12 rounded-full py-3 px-6  bg-cyan-400 last:ml-5  self-end mt-4 text-2xl"><Link to="/card">Saiba mais</Link></a>
            </div>
            
            <div className='float-right pr-60'><img src={Luffy} alt="card" className='h-80 w-90'/></div>
        </div>
        <div className='conheca2'>
            <div className='text-2xl mb-20 text-center mt-20 font-mono font-bold'><h1 className='text-4xl'>Nossos Serviços Mais Utilizados</h1></div>
                <div className='img'>
                    <Link to="/card"><img src={IconCard} alt="cartao"/></Link>
                    <Link to="/pix"><img src={IconPix} alt="pix"/></Link>
                    <Link to="/investimento"><img src={IconInvestimento} alt="investimento"/></Link>
                    <Link to="/transferencia"><img src={IconTransferencia} alt="transferencia"/></Link>
                </div>
        </div>
        {/* <div className='mb-20'></div> */}
        </div>
    )
}