import { useState, useEffect } from "react"

import LoadingPage from "./components/LoadingPage"
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"

import {FaArrowCircleUp} from "react-icons/fa"





const App = () => {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(true)

  
  useEffect( () => {
    setTimeout( () => {
      setLoading(false)
    }, 2000)
  })

  // Funkce pro scroll na začátek stránky
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }

  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      
    })
  }
  
  window.addEventListener('scroll', toggleVisible)
  


    // Funkce pro odeslání e-mailu
    const onEmailClick = () =>{
      window.open("mailto:szkandera.r@seznam.cz?subject=SendMail&body=Description")
    }
  

  
  
 if(loading) { return <LoadingPage /> 
 } else {
  return  <div className="overflow-hidden">
  <div>
    {
      visible && <button className="fixed right-5 bottom-5" onClick={scrollToTop}><FaArrowCircleUp className="text-[40px] text-gray-700" /></button>
    }
  </div>

  
  
  
  <div>
    <Header onEmailClick={onEmailClick} />
  </div>
  <div>
    <AboutMe />
  </div>
  <div>
    <Portfolio />
  </div>
  <div>
    <Footer onEmailClick={onEmailClick} />
  </div>
</div>
 }
}

export default App
