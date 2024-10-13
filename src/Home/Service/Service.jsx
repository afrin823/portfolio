import { LiaLaptopCodeSolid } from "react-icons/lia";
import ServiceText from "./ServiceText";
import { IoLogoFigma } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";


const Service = () => {
  
    return (
        <section className="py-6 sm:py-12">
        <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center py-3">
                <h2 data-aos="fade-left" className="text-4xl animate-bounce font-bold "><ServiceText></ServiceText>
                </h2>
                <p className="text-2xl font-bold text-yellow-400">My Services</p>
             
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                <article data-aos="fade-right" className="flex flex-col border-2 p-2 border-yellow-400 shadow-sm">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <LiaLaptopCodeSolid className="object-cover animate-pulse text-yellow-400 w-full h-24" />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <h3 className="flex-1 py-2 text-center text-2xl font-semibold leading-snug">FRONT-END DEVELOPER
                        </h3>
                        <p className="text-center">I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.</p>

                    </div>
                </article>
                <article data-aos="fade-down-right" className="flex flex-col p-2 border-2 border-yellow-400">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <IoLogoFigma className="object-cover animate-pulse text-yellow-400 w-full h-24 py-3" />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <h3 className="py-3 text-center text-2xl font-semibold leading-snug">Design Skills</h3>
                        <p className="text-center">Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability.</p>
                    </div>
                </article>
                <article data-aos="fade-up-left" className="flex flex-col border-2 p-2 border-yellow-400">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <FaWordpress className="object-cover animate-pulse text-yellow-400 w-full h-24" />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <h3 className="text-2xl py-3 text-center font-semibold leading-snug">WordPress Developer
                        </h3>
                        <p className="text-center">Passionate WordPress Developer with a track record of creating over 630+ websites. I find joy in crafting user-friendly, customizable sites</p>
                    </div>
                </article>

            </div>
        </div>
 </section>


    );
};

export default Service;