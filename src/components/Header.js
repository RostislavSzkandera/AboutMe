
import { Link } from "react-scroll"
import { useState } from "react"


import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import image from "../images/image0.jpeg"

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { AsyncImage } from 'loadable-image'
import { Blur } from 'transitions-kit'



const Header = ({onEmailClick}) => {
    const [showNav, setShowNav] = useState(true)

// Funkce pro otevření mobilního menu
    const menuHandler = () => {
        setShowNav(!showNav)
        }

    
   


  return (
    <div id="nav">
        <div>
            {/* Menu pro PC */}
            <nav className="bg-gray-100 fixed w-full h-16 flex flex-row justify-between items-center font-bold z-40">
                <h2 className="text-sm ml-4 p-2">Szkandera</h2>
                <ul className="hidden md:flex flex-row uppercase tracking-wider">
                    <li><Link className="mr-4 p-2 cursor-pointer hover:bg-gray-400 hover:rounded-xl" to="nav"  smooth duration={1000}>Domů</Link></li>
                    <li><Link className="mr-4 p-2 cursor-pointer hover:bg-gray-400 hover:rounded-xl" to="aboutMe" smooth duration={1000}>O mně</Link></li>
                    <li><Link className="mr-4 p-2 cursor-pointer hover:bg-gray-400 hover:rounded-xl" to="portfolio" smooth duration={1000}>Portfolio</Link></li>
                </ul>

                {/* Zobrazení ikony menu */}
                <div className="block mr-4 cursor-pointer md:hidden">
                    {showNav? <GiHamburgerMenu size={25} onClick={menuHandler} /> : <AiOutlineClose size={25} onClick={menuHandler} /> }
                </div>
                
            </nav>



            {/* Menu pro mobilní zařízení */}
            <nav className={showNav? "fixed left-[-100%] w-[100%] h-[100%]  ease-in-out duration-1000" : "bg-white border border-white fixed left-0 top-0 w-[100%] h-[100%] uppercase ease-in-out  duration-1000 z-20  md:hidden " }>
                <ul className="flex flex-col space-y-12 mt-80 uppercase tracking-wider font-bold ">
                    <li className="border-b border-black w-full text-center mx-auto pb-2"><Link onClick={menuHandler} className="cursor-pointer"  to="nav" smooth duration={1000}>Domů</Link></li>
                    <li className="border-b border-black w-full text-center mx-auto pb-2"><Link onClick={menuHandler} className="cursor-pointer"  to="aboutMe" smooth duration={1000}>O mně</Link></li>
                    <li className="border-b border-black w-full text-center mx-auto pb-2"><Link onClick={menuHandler} className="cursor-pointer"  to="portfolio" smooth duration={1000}>Portfolio</Link></li>
                    
                </ul>
            </nav>

        </div>

        
        
        
        
        {/* Úvodní strana */}
        <div className="bg-blue-900 flex flex-col justify-center items-center h-[900px] sm:h-[500px] mx-auto ">
            <div className="flex flex-col w-full sm:w-[600px] h-[700px] sm:h-[400px] sm:flex sm:flex-row mt-[98px] px-8 sm:px-0">
                <div className="w-[300px] h-1/2 sm:w-1/2 sm:h-[500px] mx-auto">
                <AsyncImage
                    src={image}
                    style={{ width: 300, height: 400}}
                    Transition={Blur}
                />
                        

                </div>

                <div className="bg-blue-900 w-[300px] sm:bg-white sm:text-blue-900 sm:w-1/2 sm:p-4 sm:text-left p-4 sm:pl-8 text-white font-bold mx-auto mt-12 sm:mt-0 ">
                    <h2 className="text-xl text-center  border-b border-white sm:border-b sm:border-blue-900 mb-4 pb-2">Ahoj !</h2> 
                    <p className="border-b border-white sm:border-b sm:border-blue-900 pb-2">Jmenuji se Rosťa a chci se stát front-end vývojářem. Můžete si zde přečíst o mně bližší informace. 
                                                                                                Na těchto stránkách chci s vámi sdílet své projekty.
                                                                                                Pokud byste měli zájem o spolupráci, budu rád když mne kontaktujete.
                    </p>
                    <p className="text-center border-b border-white sm:border-b sm:border-blue-900 mt-2 pb-2">
                        <ul className="uppercase">
                            <li>html</li>
                            <li>css</li>
                            <li>react</li>
                            <li>javascript</li>
                            <li>tailwind</li>    
                        </ul>
                    </p>
                </div>
            </div>
        </div>

        {/* Kontaktní patička na úvodní straně */}
        <div className="h-20 text-white  bg-blue-900 text-center sm:h-32 max-w-[600px] flex flex-row justify-center items-center mx-auto ">
            <a className="mt-8 sm:mt-16" href="https://github.com/RostislavSzkandera/" target="_blank" rel="noopener noreferrer"><FaGithub size={25} className="sm:hover:text-gray-400" /></a>
            <a className="mt-8 sm:mt-16 ml-4" href="https://www.linkedin.com/in/rostislav-szkandera-0957a02b8/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={25} className="sm:hover:text-gray-400" /></a>
            <MdEmail onClick={onEmailClick} className="mt-8 sm:mt-16 cursor-pointer sm:hover:text-gray-400 ml-4" size={25} />
        </div>
    </div>



  )
}

export default Header
