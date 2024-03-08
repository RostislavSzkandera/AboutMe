import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"




const App = () => {
  
  // Funkce pro odeslání e-mailu
  const onEmailClick = () =>{
    window.open("mailto:szkandera.r@seznam.cz?subject=SendMail&body=Description")
  }

  
  
  return (
    <div className="overflow-hidden">
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
        <Footer />
      </div>
    </div>
  )
}

export default App
