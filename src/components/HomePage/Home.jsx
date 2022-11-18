import { Navbar } from '../navbar/Navbar'
import { Body } from '../body/Body'
import { Footer } from '../footer/Footer'
import { useState } from "react"
import { useEffect } from "react";

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
    <>
    <div>sim</div>
    </>
    }
    {!session &&
    <Body />
    }
    <Footer/>
    </div>
  )
}

export default Home;