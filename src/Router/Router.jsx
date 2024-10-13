
import {
    createBrowserRouter  
  } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Service from "../Home/Service/Service";

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
        }
      ]
    },
  ]);

export default router;