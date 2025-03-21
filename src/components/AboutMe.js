import image1 from "../images/prvnipokompresi.webp"
import image2 from "../images/druhy_1pokompresi.webp"
import image3 from "../images/treti_1pokompresi.webp"
import { AsyncImage } from 'loadable-image'
import { Blur } from 'transitions-kit'

const AboutMe = () => {
  return (
    <div id="aboutMe" className="bg-gray-200 min-h-[700px] xl:min-h-[850px] pt-40 sm:mt-96 ">
        <div className="md:w-3/4 mx-auto">
            
            <h2 className="text-xl lg:text-2xl xl:text-3xl text-center border-b border-gray-400 w-[30%] mx-auto pb-2 mb-8 font-bold uppercase ">O mně</h2>
            {/* Text o mně */}
            <div className="w-full mx-auto">
                <p className="text-[14px] md:text-xl lg:text-xl text-center pb-4 mx-4">
                    Jmenuji se <b>Rostislav Szkandera</b> a rád bych se stal <b>Front-end vývojářem </b> 
                    nebo <b>kodérem</b>.
                    Je mi 29 let. Vystudoval jsem Gymnázium v Třinci s maturitou v roce 2014.
                    Od té doby jsem byl zaměstnaný jako skladník, řidič a v současné době jako operátor výroby
                    7 let. I přes to, že jsem se IT odvětví nevěnoval v rámci studia, mám 
                    k němu velmi blízký vztah a snažím se ve svém volném čase neustále prohlubovat své znalosti 
                    samostudiem. V současné době mám základy <b>HTML, CSS (Tailwind), Javascript, Git</b> a především <b>React</b>. S těmito 
                    značkovacími a programovacími jazyky jsem se začal seznamovat v březnu roku 2023. Nejsou mi cizí pojmy jako Node.Js, Next.Js,
                    MongoDB, Typescript, SQL, Postman, Bootstrap atd.  Mými koníčky jsou turistika, počítače a šachy.
                </p>
            </div>
            {/* Moje fotky */}
            <div className="flex flex-col  sm:flex-row justify-center items-center gap-2">
                
                <div className="">
                <AsyncImage
                    src={image1}
                    style={{ width: 300, height: 400}}
                    Transition={Blur}
                    loading="lazy"
                />
                </div>
                
                <div className="">
                <AsyncImage
                    src={image2}
                    style={{ width: 300, height: 400}}
                    Transition={Blur}
                    loading="lazy"
                    
                />
                </div>
                
                <div className="mb-4 sm:mb-0">
                <AsyncImage
                    src={image3}
                    style={{ width: 300, height: 400}}
                    Transition={Blur}
                    loading="lazy"
                />
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutMe
