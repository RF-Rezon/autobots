import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import FrontPage from '../Components/FrontPage/FrontPage';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import LayoutHome from '../Layout/LayoutHome';

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutHome />,
      children:[
        {
          path: "/",
          element: <FrontPage/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage/>
    }
  ]);


export default router;