import { useAccount } from "../navbar/Navbar"
import Bandeira from "../../assets/bandeira.png"

const cardImages = [
    { card: '../src/assets/luffyCard.png', back: '../src/assets/luffyBack.png' },
    { card: '../src/assets/sunnyCard.png', back: '../src/assets/sunnyBack.png' },
    { card: '../src/assets/zoroCard.png', back: '../src/assets/zoroCard.png' },
    { card: '../src/assets/sanjiCard.png', back: '../src/assets/sanjiBack.png'}
]

export const Card = ({ conta }) => {

    return (
        <div>
            <div className={`bg-[url('${cardImages[conta.cardImage - 1].card}')] bg-no-repeat h-[23rem] w-[40rem] bg-center relative`}>
                <div className="text-2xl wilStreet">WilsonStreet</div>
                <div className="w-16 h-16 absolute bandeira right-0"><img src={Bandeira} alt="" /></div>
                <div className="text-2xl numeroCartao">{conta.numeroCartao}</div>
                <div className="text-2xl validadeCartao">Valid Thru: {conta.validade}</div>
                <div className="text-2xl nomeCard">{conta.cliente.nome}</div>
            </div>
            <div className={`bg-[url('${cardImages[conta.cardImage -1].back}')] bg-no-repeat h-[23rem] w-[40rem] bg-center relative`}>
                <div className="text-2xl absolute cvv">{conta.cvv}</div>
                <div className="absolute bottom-0 text-green-600 text-sm">sac: 0800 727 9988 Deficiência Auditiva ou de Fala: 0800 727 0099 Ouvidoria: 0800 727 99333</div>
            </div>
        </div>
    )
    
}
