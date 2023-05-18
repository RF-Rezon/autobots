import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import FrontPage from '../Components/FrontPage/FrontPage';
import LayoutHome from '../Layout/LayoutHome';

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutHome />,
      children:[
        {
          path: "/",
          element: <FrontPage/>
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage/>
    }
  ]);


export default router;