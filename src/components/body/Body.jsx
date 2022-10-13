import Card from '../../assets/card.png'

export const Body = () => {
    return (
        <div>
            <div>
            <div className="flex flex-col japonesa bg-[url('../src/assets/japaneaseGirl.png')] bg-no-repeat h-[40rem] bg-cover  p-40  text-right text-2xl mt-8">
                <h1>Wilsonstreet</h1>
                <h2>Venha fazer parte dessa caminhada</h2>
                <h3>Com WilsonStreet você </h3>
                <h3>   caminha para o sucesso!</h3>
                <a href="Cadastrar-se" className="inline-block p-12 rounded-full py-3 px-6 bg-purple-400 last:ml-5 w-[12rem] self-end mt-4">Cadastrar-se</a>

            </div>
           
        </div>
        <div>
            <div><h1>Receba cashback e milhas sem anuidade!!</h1></div>
            <div><img src={Card} alt="card" /></div>
            
        </div>
        </div>
    )
}