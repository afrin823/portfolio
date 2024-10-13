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
                <article data-aos="fade-right" className="flex flex-col border-2 border-yellow-400 shadow-sm">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <LiaLaptopCodeSolid className="object-cover animate-pulse text-sky-400 w-full h-24" />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <h3 className="flex-1 py-2 text-center text-2xl font-semibold leading-snug">Buy a new home
                        </h3>
                        <p className="text-center">Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.</p>

                    </div>
                </article>
                <article data-aos="fade-down-right" className="flex flex-col border-2 border-yellow-400">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <IoLogoFigma className="object-cover animate-pulse text-sky-400 w-full h-24 py-3" />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <h3 className="py-3 text-center text-2xl font-semibold leading-snug">Sell a home</h3>
                        <p className="text-center">Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.</p>
                    </div>
                </article>
                <article data-aos="fade-up-left" className="flex flex-col border-2 border-yellow-400">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <FaWordpress className="object-cover animate-pulse text-sky-400 w-full h-24" />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <h3 className="text-2xl py-3 text-center font-semibold leading-snug">Rent a home
                        </h3>
                        <p className="text-center">Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.</p>
                    </div>
                </article>

            </div>
        </div>
 </section>


    );
};

export default Service;