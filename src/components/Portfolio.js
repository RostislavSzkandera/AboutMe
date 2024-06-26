import project from "../images/novyprojekt.png"
import project2 from "../images/movieapp.png"
import project3 from "../images/todoapp.png"
import project4 from "../images/osobe.png"


const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-[700px]">
        <div id="portfolio" className="w-full md:w-1/2 mx-auto pt-20 text-center">
            <div>
                <h2 className="text-xl lg:text-2xl xl:text-3xl text-center border-b border-gray-400 w-[30%] mx-auto pb-2 mb-8 font-bold uppercase">Portfolio</h2>
                <p className="pb-4 mx-2 text-[14px] md:text-xl lg:text-xl">
                    Zde mám čtyři projekty z poslední doby.
                    Všechno je vytvořeno v Reactu. Snažím se aby, vše bylo responzivní.
                    Projekty jsem styloval pomocí tailwindu.
                    Hlavní a nejnovější projekt, je upgrade mého minulého projektu o filmech.
                    
                </p>
            </div>
            {/* První projekt */}
            <div className="flex flex-col  mb-4 mx-4 border-b border-gray-400 pb-4">
                <div>
                    <img className="" src={project} alt="" />
                </div>
                <div className="bg-blue-200">
                    <h2 className="font-bold mt-2 mb-2">Databáze filmů Upgrade</h2>
                    <p className="mb-4 mx-4">Toto je můj nejnovější projekt v Reactu. Mám ho i na své doméně s hostingem od firebase.
                    Na tomto webu se můžete přihlásit a přihlášený uživatel má další možnosti co může dělat, jako přidávat, mazat filmy nebo
                    komentovat. Backend je vytvořen s firebase.
                    </p>
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <p className="pt-4 text-xl sm:text-xl md:text-2xl pb-8"><a className="bg-blue-400 p-2 rounded-xl text-white border border-white sm:hover:bg-blue-500" href="https://www.szkandera-portfolio.cz/" target="_blank" rel="noopener noreferrer" >Náhled</a></p>
                        <p className="pt-4  text-xl sm:text-xl md:text-2xl pb-8"><a className="bg-blue-400 p-2 rounded-xl text-white border border-white sm:hover:bg-blue-500" href="https://github.com/RostislavSzkandera/Movies-Database" target="_blank" rel="noopener noreferrer" >GitHub Kód</a></p>          
                    </div>
                </div>
            </div>

            {/* Druhý projekt */}
            <div className="flex flex-col  mb-4 mx-4 border-b border-gray-400 pb-4">
                <div>
                    <img className="" src={project2} alt="" />
                </div>
                <div className="bg-blue-200">
                    <h2 className="font-bold mt-2 mb-2">Databáze filmů</h2>
                    <p className="mb-4 mx-4">Toto je vícestránkový web na kterém můžete přidávat a odebírat filmy, je napojen na databázi Firebase</p>
                    <p className="pt-4 mx-4 text-xl sm:text-xl md:text-2xl pb-8"><a className="bg-blue-400 p-2 rounded-xl text-white border border-white sm:hover:bg-blue-500" href="https://github.com/RostislavSzkandera/Database" target="_blank" rel="noopener noreferrer" >GitHub Kód</a></p>     
                </div>
            </div>
            {/* Třetí projekt */}
            <div className=" flex flex-col  mb-4 mx-4 border-b border-gray-400 pb-4">
                <div>
                    <img className="" src={project3} alt="" />
                </div>
                <div className="bg-blue-200">
                    <h2 className="font-bold mt-2 mb-2">TodoApp</h2>
                    <p className="mb-4 mx-4">TodoAppka, která pracuje s úložištěm local storage</p>
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <p className="pt-4 text-xl sm:text-xl md:text-2xl pb-8"><a className="bg-blue-400 p-2 rounded-xl text-white border border-white sm:hover:bg-blue-500" href="https://todoapp-szkandera.netlify.app/" target="_blank" rel="noopener noreferrer" >Náhled</a></p>
                        <p className="pt-4  text-xl sm:text-xl md:text-2xl pb-8"><a className="bg-blue-400 p-2 rounded-xl text-white border border-white sm:hover:bg-blue-500" href="https://github.com/RostislavSzkandera/React-Todoapp" target="_blank" rel="noopener noreferrer" >GitHub Kód</a></p>          
                    </div>
                </div>
            </div>
            {/* Čtvrtý projekt */}
            <div className=" flex flex-col  mb-4 mx-4 border-b border-gray-400 pb-4">
                <div>
                    <img className="" src={project4} alt="" />
                </div>
                <div className="bg-blue-200">
                    <h2 className="font-bold mt-2 mb-2">Web o sobě</h2>
                    <p className="mb-4 mx-4">Toto je web, který jsem vytvořil hlavně kvůli prezentace svých ostatních projektů</p>
                    <p className="pt-4 mx-4 text-xl sm:text-xl md:text-2xl pb-8"><a className="bg-blue-400 p-2 rounded-xl text-white border border-white sm:hover:bg-blue-500" href="https://github.com/RostislavSzkandera/AboutMe" target="_blank" rel="noopener noreferrer" >GitHub Kód</a></p>     
                </div>
            </div>
        
        
        </div>
    </div>
  )
}

export default Portfolio
