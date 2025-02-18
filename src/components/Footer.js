import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = ({onEmailClick}) => {
  return (
    <footer>
       
        <div className="flex flex-col justify-center items-center sm:flex-row xl:space-x-11"> 
            <p className="mb-4 sm:mb-2 sm:mr-20">Rostislav Szkandera &#169; 2025</p>
            <a className="mb-2 sm:mr-4 text-gray-500 sm:hover:text-gray-700" href="https://github.com/RostislavSzkandera/" target="_blank" rel="noopener noreferrer"><FaGithub size={25} className="" /></a>
            <a className="mb-2 sm:mr-4 text-gray-500 sm:hover:text-gray-700" href="https://www.linkedin.com/in/rostislav-szkandera-0957a02b8/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={25} className="" /></a>
            <MdEmail onClick={onEmailClick} className="mb-2 sm:mr-4 cursor-pointer text-gray-500 sm:hover:text-gray-700" size={25} />
        </div>
    </footer>
  )
}

export default Footer
