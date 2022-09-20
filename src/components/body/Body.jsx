import Bg from "../../assets/bg.png"
import JapaneaseGirl from "../../assets/japaneaseGirl.png"

export const Body = () => {
    return (
        <div>
            <div><img src={Bg} alt="background" />
            <div >
            <div className="content-center">
                <img className="object-scale-down h-20 w-96" src={JapaneaseGirl} alt="japan girl" />
            </div>
            <div className="inline-block">
                <h1>Venha fazer parte da nossa caminhada</h1>
                <h2>Com WilsonStreet você caminha para o sucesso!</h2>
                <a href="Cadastar" className="rounded-full py-3 px-6 bg-purple-400">Cadastrar</a>
            </div>
            </div>

            </div>
        </div>
    )
}