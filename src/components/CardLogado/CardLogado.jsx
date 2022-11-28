import { useAccount } from "../navbar/Navbar"
import Mingo from "../../assets/doflamingo.png"
import { Card } from "../Card/Card"

export const CardLogado = () => {
    const session = useAccount();

    if (!session) {
        return <div>Loading..</div>
    }

    return (
        <div>
            <div>
                <img src={Mingo} alt="Doflamingo" />
            </div>
            <Card conta={session.conta}/>
        </div>
    )
}