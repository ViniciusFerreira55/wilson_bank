import { useAccount } from "../navbar/Navbar"
import Bandeira from "../../assets/bandeira.png"

const cardImages = [
    { card: '/sunnyCard.png', back: '/sunnyBack.png' },
    { card: '/luffyCard.png', back: '/luffyBack.png' },
    { card: '/zoroCard.png', back: '/zoroBack.png' },
    { card: '/sanjiCard.png', back: '/sanjiBack.png'}
]

export const Card = ({ conta }) => {

    return (
        <div>
            <div style={{ backgroundImage: `url(${cardImages[Number(conta.cardImage) - 1].card})`}} className='bg-no-repeat h-[23rem] w-[40rem] bg-center relative'>
                <div className="text-2xl wilStreet">WilsonStreet</div>
                <div className="w-16 h-16 absolute bandeira right-0"><img src={Bandeira} alt="" /></div>
                <div className="text-2xl numeroCartao">{conta.numeroCartao}</div>
                <div className="text-2xl validadeCartao">Valid Thru: {conta.validade}</div>
                <div className="text-2xl nomeCard">{conta.cliente.nome}</div>
            </div>
            <div style={{ backgroundImage: `url(${cardImages[Number(conta.cardImage) - 1].back})`}} className="bg-no-repeat h-[23rem] w-[40rem] bg-center relative mt-24">
                <div className="text-2xl absolute cvv">{conta.cvv}</div>
                <div className="absolute bottom-0 text-green-600 text-sm">sac: 0800 727 9988 Deficiência Auditiva ou de Fala: 0800 727 0099 Ouvidoria: 0800 727 99333</div>
            </div>
        </div>
    )
    
}
