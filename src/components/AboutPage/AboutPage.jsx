import { Navbar } from "../navbar/Navbar"
import { Footer } from "../footer/Footer"

export const AboutPage = () => {
    return(
        <div>
        <Navbar/>
        <div className="fundo">
            <div className="container font-mono font-bold ">
                <div >
                <h1 className="text-8xl ml-36 opacity-0">Sobre Nós</h1>
                <h1 className="text-center text-7xl pr-96  mr-40 text-cyan-800">Sobre Nós</h1>
                <h2 className="text-center text-4xl pr-96 mt-40 mr-40">Somos a WilsonStreet um banco que visa o sucesso do nosso cliente, apoiando sempre ideias inovadoras.
                    Com WilsonStreet você avança na estrada do sucesso!!</h2>
                    </div>
            </div>


        </div>
        <Footer/>
        </div>        
    )
}