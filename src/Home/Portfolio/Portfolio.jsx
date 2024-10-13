import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
    const [partfolios, setPortfolios] = useState([]);

    useEffect(() => {
        fetch('../../../public/portfolio.json')
        .then(res => res.json())
        .then(data => setPortfolios(data))
    }, [])
    return (
        <div>
            <h1 className="text-5xl text-center py-8">Portfolio</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {
                partfolios.map(portfolio => <PortfolioCard 
                    key={portfolio.id}
                    portfolio={portfolio}
                    ></PortfolioCard>)
            }
         </div>

          
        </div>
    );
};

export default Portfolio;