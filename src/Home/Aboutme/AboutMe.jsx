import AboutText from "./AboutText";

const AboutMe = () => {
    return (
       <div>
       <div className="bg-base-800  text-center">
           <h2 data-aos="fade-up" className="text-3xl animate-bounce  mx-auto font-bold "><AboutText/>
           </h2>

       </div>
       <section className="">
           <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between ">
               
               <div className="flex  items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-aos="fade-right">
                   <img src="https://i.ibb.co.com/YNtpFwP/Whats-App-Image-2024-01-20-at-11-53-58-59f7e45c-removebg-preview.png" alt="" className="object-contain rounded-lg border-2 shadow-2xl shadow-yellow-200 border-yellow-400 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
               </div>
               <div data-aos="fade-left" className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left" >
                   <h1 className="text-5xl font-bold leading-none sm:text-4xl">About me Details
                   </h1>
                   <p className="mt-6 mb-8 text-lg text-white text-justify sm:mb-12">Afrin is a talented and driven web developer with a strong foundation in front-end and back-end technologies. With over a year of experience, they excel in HTML, CSS, JavaScript, and modern frameworks like React and Node.js. Afrin has successfully completed numerous MERN-stack projects, showcasing their proficiency in MongoDB, Express, and CRUD operations. <br />
                  
                   </p>

               </div>
           </div>
       </section>
   </div>
    );
};

export default AboutMe;