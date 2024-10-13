import AboutMe from "./Aboutme/AboutMe";
import Banner from "./Banner";
import Contact from "./Contact/Contact";
import Skills from "./MySkill/Skills";

import Portfolio from "./Portfolio/Portfolio";
import Service from "./Service/Service";


const Home = () => {
   
    return (
        <div>
        
           <Banner></Banner>
           <AboutMe></AboutMe>
        <Skills></Skills>
           <Service></Service>
          <Portfolio></Portfolio>
       <Contact></Contact>

        </div>
    );
};

export default Home;