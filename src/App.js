import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio"


const App = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <Header />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Portfolio />
      </div>
    </div>
  )
}

export default App
