import { Navbar, useAccount } from '../navbar/Navbar'
import { Body } from '../body/Body'
import { Footer } from '../footer/Footer'
import { LogadoBody } from '../LogadoBody/LogadoBody';

const Home = () => {
  const session = useAccount();
  return(
    <div>
    <Navbar />
    {session &&
    <LogadoBody />
    }
    {!session &&
    <Body />
    }
    <Footer/>
    </div>
  )
}

export default Home;