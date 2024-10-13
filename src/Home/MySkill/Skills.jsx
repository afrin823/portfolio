import SKillText from "./SKillText"


function Skills() {

  
    return (
        <div name='skills' className='w-full h-screen text-gray-300 bg-[#12223b] font-sans'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <h1 className='text-4xl font-bold text-center'><SKillText/></h1>
              

            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 my-4'>
                <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                    <div data-aos='zoom-in-up' data-aos-duration='1000'>
                        <img src="https://i.ibb.co.com/brxfNPS/Screenshot-20-removebg-preview.png" className='w-20 mx-auto' alt="html icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                </div>

                <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                    <div data-aos='zoom-in-up' data-aos-duration='1500'>
                        <img src="https://i.ibb.co.com/yn3shrR/Screenshot-21-removebg-preview.png" className='w-20 mx-auto' alt="css icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                </div>

                <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                    <div data-aos='zoom-in-up' data-aos-duration='2000'>
                        <img src="https://banner2.cleanpng.com/20190129/vxi/kisspng-javascript-web-applications-scalable-vector-graphi-1713908481051.webp" className='w-20 mx-auto' alt="javascript icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                </div>

                <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                    <div data-aos='zoom-in-up' data-aos-duration='2500'>

                        <img src="https://i.ibb.co.com/5vW5d9c/Screenshot-23-removebg-preview.png" className='w-20 mx-auto' alt="react icon" />
                        <p className='my-4'>ReactJs</p>
                    </div>
                </div>

                <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                    <div data-aos='zoom-in-up' data-aos-duration='3000'>
                        <img src="https://banner2.cleanpng.com/20180711/iqy/aawpwnuou.webp" className='w-20 mx-auto' alt="github icon" />
                        <p className='my-4'>Github</p>
                    </div>
                </div>

                <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                    <div data-aos='zoom-in-up' data-aos-duration='3500'>

                        <img src="https://cdn.softwarereviews.com/production/logos/offerings/8915/large/logo-vertical.png?1721247774" className='w-20 mx-auto' alt="firebase icon" />
                        <p className='my-4'>Firebase</p>
                    </div>
                </div>

                <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                    <div data-aos='zoom-in-up' data-aos-duration='4000'>

                        <img src="https://i.ibb.co.com/sj60T4D/png-transparent-tailwind-css-hd-logo-thumbnail-removebg-preview.png" className='w-20 mx-auto' alt="tailwind icon" />
                        <p className='my-4'>Tailwind CSS</p>
                    </div>
                </div>

                <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                    <div data-aos='zoom-in-up' data-aos-duration='4500'>

                        <img src="https://i.ibb.co.com/WvZmGMS/Screenshot-24-removebg-preview.png" className='w-20 mx-auto' alt="nodejs icon" />
                        <p className='my-4'>Nodejs</p>
                    </div>
                </div>
            </div>


        </div>
    </div>
    )
}

export default Skills