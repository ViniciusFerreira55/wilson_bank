import { useAccount } from "../navbar/Navbar"
import Bandeira from "../../assets/bandeira.png"

export const Card = () => {
    const session = useAccount();
    if (!session) {
        return <div>Loading..</div>
    }
    if (session.conta.cardImage === "1") {
        return (
            <div>
            <div className="bg-[url('../src/assets/luffyCard.png')] bg-no-repeat h-[23rem] w-[40rem] bg-center relative">
                <div className="text-2xl wilStreet">WilsonStreet</div>
                <div className="w-16 h-16 absolute bandeira right-0"><img src={Bandeira} alt="" /></div>
                <div className="text-2xl numeroCartao">{session.conta.numeroCartao}</div>
                <div className="text-2xl validadeCartao">Valid Thru: {session.conta.validade}</div>
                <div className="text-2xl nomeCard">{session.conta.cliente.nome}</div>
            </div>
            <div className="bg-[url('../src/assets/luffyBack.png')] bg-no-repeat h-[23rem] w-[40rem] bg-center relative">
                <div className="text-2xl absolute cvv">{session.conta.cvv}</div>
                <div className="absolute bottom-0 text-green-600 text-sm">sac: 0800 727 9988 Deficiência Auditiva ou de Fala: 0800 727 0099 Ouvidoria: 0800 727 99333</div>
            </div>
            </div>
        )

    }
    else if (session.conta.cardImage === "2"){
        return (
            <div>
            <div className="bg-[url('../src/assets/sunnyCard.png')] bg-no-repeat h-[23rem] w-[40rem] bg-center relative">
                <div className="text-2xl wilStreet">WilsonStreet</div>
                <div className="w-16 h-16 absolute bandeira right-0"><img src={Bandeira} alt="" /></div>
                <div className="text-2xl numeroCartao">{session.conta.numeroCartao}</div>
                <div className="text-2xl validadeCartao">Valid Thru: {session.conta.validade}</div>
                <div className="text-2xl nomeCard">{session.conta.cliente.nome}</div>
            </div>
            <div className="bg-[url('../src/assets/sunnyBack.png')] bg-no-repeat h-[23rem] w-[40rem] bg-center relative">
                <div className="text-2xl absolute cvv">{session.conta.cvv}</div>
                <div className="absolute bottom-0 text-green-600 text-sm">sac: 0800 727 9988 Deficiência Auditiva ou de Fala: 0800 727 0099 Ouvidoria: 0800 727 99333</div>
            </div>
            </div>
        )
    }

    else if (session.conta.cardImage === "3"){
        return (
            <div>
            <div className="bg-[url('../src/assets/zoroCard.png')] bg-no-repeat h-[23rem] w-[40rem] bg-center relative">
                <div className="text-2xl wilStreet">WilsonStreet</div>
                <div className="w-16 h-16 absolute bandeira right-0"><img src={Bandeira} alt="" /></div>
                <div className="text-2xl numeroCartao">{session.conta.numeroCartao}</div>
                <div className="text-2xl validadeCartao">Valid Thru: {session.conta.validade}</div>
                <div className="text-2xl nomeCard">{session.conta.cliente.nome}</div>
            </div>
            <div className="bg-[url('../src/assets/zoroBack.png')] bg-no-repeat h-[23rem] w-[40rem] bg-center relative">
                <div className="text-2xl absolute cvv">{session.conta.cvv}</div>
                <div className="absolute bottom-0 text-green-600 text-sm">sac: 0800 727 9988 Deficiência Auditiva ou de Fala: 0800 727 0099 Ouvidoria: 0800 727 99333</div>
            </div>
            </div>
        )
    }

    else if (session.conta.cardImage === "4"){
        return (
            <div>
            <div className="bg-[url('../src/assets/sanjiCard.png')] bg-no-repeat h-[23rem] w-[40rem] bg-center relative">
                <div className="text-2xl wilStreet">WilsonStreet</div>
                <div className="w-16 h-16 absolute bandeira right-0"><img src={Bandeira} alt="" /></div>
                <div className="text-2xl numeroCartao">{session.conta.numeroCartao}</div>
                <div className="text-2xl validadeCartao">Valid Thru: {session.conta.validade}</div>
                <div className="text-2xl nomeCard">{session.conta.cliente.nome}</div>
                <div className="text-2xl absolute bandeira right-0 bottom-0 visa">VISA</div>
            </div>
            <div className="bg-[url('../src/assets/sanjiBack.png')] bg-no-repeat h-[23rem] w-[40rem] bg-center relative">
                <div className="text-2xl absolute cvv">{session.conta.cvv}</div>
                <div className="absolute bottom-0 text-green-600 text-sm">sac: 0800 727 9988 Deficiência Auditiva ou de Fala: 0800 727 0099 Ouvidoria: 0800 727 99333</div>
            </div>
            </div>
        )
    }

}
