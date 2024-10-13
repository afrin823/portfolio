import BannerText from "./BannerText";


const Banner = () => {
    return (
        <div className="hero  text-white  mb-12 mt-0 w-full h-[500px]">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="">
                     <img data-aos="fade-left"
                   src="https://i.ibb.co.com/LnMZrFn/afrin.png" 
                    className="max-w-sm rounded-full shadow-2xl shadow-yellow-200  border-4 border-yellow-400  " />
                </div>
               

{/* text-transparent bg-clip-border bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 */}
                <div data-aos="fade-right">
                    <h1 className="text-3xl font-bold"><BannerText></BannerText></h1>
                  
                    <p className="py-6 ">
                    Front-end developer with expertise in React, specializing in building responsive and high-performance web applications. Skilled in JavaScript, Tailwind CSS, and Next.js, I focus on crafting clean, scalable, and user-friendly interfaces.

 
                    </p>
                    <button className="btn bg-yellow-300 shadow-md shadow-yellow-200
                    ">Download resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;