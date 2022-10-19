import Card from '../../assets/card.png'
import IconCard from '../../assets/cartao.png'
import IconPix from '../../assets/pix.png'
import IconInvestimento from '../../assets/investimento.png'
import IconTransferencia from '../../assets/transferencia.png'

export const Body = () => {
    return (
        <div>
            <div>
            <div className="flex flex-col japonesa bg-[url('../src/assets/japaneaseGirl.png')] bg-no-repeat h-[40rem] bg-cover  p-40  text-right text-2xl">
                <h1>Wilsonstreet</h1>
                <h2>Venha fazer parte dessa caminhada</h2>
                <h3>Com WilsonStreet você </h3>
                <h3>   caminha para o sucesso!</h3>
                <a href="Cadastrar-se" className="inline-block p-12 rounded-full py-3 px-6 bg-purple-400 last:ml-5 w-[12rem] self-end mt-4">Cadastrar-se</a>

            </div>
           
        </div>
        <div className='conheca'>
            <div>
            <div className='text-2xl pl-8 pt-8 flex'><h1>Conheça o cartão com os melhores benefícios</h1></div>
            <div className='text-xl pl-8 pt-8'><h1>Receba cashback e milhas sem anuidade!!</h1></div>
            <a href="Cadastrar-se" className="inline-block p-12 rounded-full py-3 px-6 bg-purple-400 last:ml-5  self-end mt-4">Saiba mais</a>
            </div>
            
            <div className='float-right pr-60'><img src={Card} alt="card" className='h-44 w-64'/></div>
        </div>
        <div className='pt-10'>
            <div className='text-2xl mb-20 text-center'><h1>Nossos Serviços Mais Utilizados</h1></div>
                <div className='img'>
                    <a href="a"><img src={IconCard} alt="cartao"/></a>
                    <a href="a"><img src={IconPix} alt="pix"/></a>
                    <a href="a"><img src={IconInvestimento} alt="investimento"/></a>
                    <a href="a"><img src={IconTransferencia} alt="transferencia"/></a>
                </div>
        </div>
        <div className='mb-20'></div>
        </div>
    )
}