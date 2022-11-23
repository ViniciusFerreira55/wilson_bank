import { Navbar } from "../navbar/Navbar"
import { Footer } from "../footer/Footer"
import Marco from "../../assets/marco.png"
import CardIcon from "../../assets/cartao.png"
import { useAccount } from "../navbar/Navbar"
import Mingo from "../../assets/doflamingo.png"
import { useState } from "react"
import { useEffect } from "react"

export const CardPage = () => {
    const session = useAccount();
    const [card, setCard] = useState('');

    useEffect(() => {
        // if (session.conta.cardImage === "1") {
        //     setCard("luffyCard.png")
        // }
        // else if (session.conta.cardImage === "2") {
        //     setCard("zoroCard.png")
        // }
        // else if (session.conta.cardImage === "3") {
        //     setCard("sanjiCard.png")
        // }
        // else if (session.conta.cardImage === "4") {
        //     setCard("sunnyCard.png")
        // }
        console.log(session)
    })

    return (
        <div>
            <Navbar />
            {!session &&
                <>
                    <div className="pt-8 flex center">
                        <div>
                            <img src={CardIcon} alt="card icon" className="h-44 w-44 absolute ml-72" />
                        </div>
                        <div className="mt-64 ml-60 text-2xl">
                            <h2>Lorem ipsum dolor sit</h2>
                            <h2>amet, consectetur</h2>
                            <h2>adipiscing elit, sed do</h2>
                            <h2>eiusmod tempor</h2>
                            <h2>incididunt ut labore et</h2>
                            <h2>dolore magna aliqua.</h2>
                            <h2>Ut enim ad minim</h2>
                            <h2>veniam, quis nostrud</h2>
                            <h2>exercitation ullamco</h2>
                            <h2>laboris nisi ut aliquip</h2>
                        </div>

                        <img src={Marco} alt="marco" className="CardGirl" />
                    </div>
                </>
            }
            {session &&
                <>
                    <div>
                        <div>
                            <img src={Mingo} alt="Doflamingo" />
                        </div>
                        <div className={`bg-[url(../src/assets/${card}')] bg-no-repeat h-[40rem]`}>
                            <h1 className="text-9xl">Seja bem-vindo {session.conta.cliente.nome}</h1>
                        </div>
                    </div>
                </>
            }
            <div>
                <Footer />
            </div>
        </div>
    )
}