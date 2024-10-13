import { Link } from "react-router-dom";


const PortfolioCard = ({ portfolio }) => {
    const {title, technologies, liveLink, imageUrl} = portfolio;
    return (
        <div>
            <div data-aos="fade-up" className="p-4 shadow-md rounded-md border-2 border-yellow-400 ">
                <div className="card  w-full sm:w-96 shadow-xl">
                    <div className="rounded-md overflow-hidden">
                        <img title="View Apartment"

                            data-aos="fade-up"
                            className="w-full h-48 object-cover hover:bg-sky-700"
                            src={imageUrl}
                            alt="" // Added alt text
                        />
                    </div>
                    <div data-aos="fade-right" className="card-body">
                        <h2 className="text-lg font-bold text-yellow-400">Title: {title}

                        </h2>
                        
                        <h3 className="text-sm  text-yellow-300">Technologies: {technologies}</h3>
                                         
                        <Link to={liveLink}>
                        <button 
                                className="btn bg-yellow-400 w-full  font-medium"
                            >
                               Live Link
                            </button></Link>
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;