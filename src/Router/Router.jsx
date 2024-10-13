
import {
    createBrowserRouter  
  } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Service from "../Home/Service/Service";
import Portfolio from "../Home/Portfolio/Portfolio";
import AboutMe from "../Home/Aboutme/AboutMe";
import Skills from "../Home/MySkill/Skills";
import Contact from "../Home/Contact/Contact";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/service",
          element: <Service></Service>
        },
        {
          path: "/about",
          element: <AboutMe></AboutMe>
        },
        {
          path: "/skills",
          element: <Skills></Skills>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/project",
          element: <Portfolio></Portfolio>
        },
      ]
    },
  ]);

export default router;