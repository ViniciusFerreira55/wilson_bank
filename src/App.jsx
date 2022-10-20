// import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TransferencePage } from './components/TransferencePage/TransferencePage'
import { InvestimentPage } from './components/InvestimentPage/InvestimentePage'
import { PixPage } from './components/PixPage/PixPage'
import { CardPage } from "./components/CardsPage/CardPage"
import { LoginPage } from "./components/LoginPage/LoginPage"
import Home from "./components/HomePage/Home"


export const App = () => {
  return(
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transferencia" element={<TransferencePage />} />
      <Route path="/investimento" element={<InvestimentPage />} />
      <Route path="/pix" element={< PixPage/>} />
      <Route path="/card" element={< CardPage />} />
      <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}