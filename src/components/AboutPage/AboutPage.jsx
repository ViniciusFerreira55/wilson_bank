import { Navbar } from "../navbar/Navbar"
import { Footer } from "../footer/Footer"

export const AboutPage = () => {
    return(
        <div>
        <Navbar/>
        <div className="fundo">
            <div className="container">
                <h1 className="text-8xl ml-60">Sobre Nós</h1>
                <h2 className="text-center text-6xl mr-96">Somos a WilsonStreet um banco que visa o sucesso do nosso cliente, apoiando sempre ideias inovadoras.
                    Com WilsonStreet você avança na estrada do sucesso!!</h2>
            </div>


        </div>
        <Footer/>
        </div>        
    )
}