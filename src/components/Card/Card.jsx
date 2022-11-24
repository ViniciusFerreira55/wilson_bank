import { useAccount } from "../navbar/Navbar"

export const Card = () => {
    const session = useAccount();
    if (!session) {
        return <div>Loading..</div>
    }
    if (session.conta.cardImage === "3") {
        return (
            <div className="bg-[url('../src/assets/luffyCard.png')] bg-no-repeat h-[23rem] w-[40rem] bg-center">
                <div className="text-orange-400 text-2xl">WilsonStreet</div>
            </div>
        )

    }
}
