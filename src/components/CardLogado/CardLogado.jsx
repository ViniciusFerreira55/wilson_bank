import { useAccount } from "../navbar/Navbar"
import Mingo from "../../assets/doflamingo.png"
import { Card } from "../Card/Card"

export const CardLogado = () => {
    const session = useAccount();

    if (!session) {
        return <div>Loading..</div>
    }

    return (
        <div className="flex py-20">
            <div className="mt-36">
                <img src={Mingo} alt="Doflamingo" />
            </div>
            <div className="ml-96">
            <Card conta={session.conta}/>
            </div>
        </div>
    )
}