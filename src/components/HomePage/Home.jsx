import { Navbar } from '../navbar/Navbar'
import { Body } from '../body/Body'
import { Footer } from '../footer/Footer'
import { useState } from "react"
import { useEffect } from "react";
import { LogadoBody } from '../LogadoBody/LogadoBody';
export const useUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
      const userString = sessionStorage.getItem('user');
      try {
          const _User = JSON.parse(userString);
          setUser(_User)
      } catch (err) {
          
      }
  }, [])

  return user;
}

const Home = () => {
  const session = useUser();
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