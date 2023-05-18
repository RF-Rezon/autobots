import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import LayoutHome from '../Layout/LayoutHome';
import AddAToy from '../Pages/AddAToy';
import AllToys from '../Pages/AllToys';
import Blogs from '../Pages/Blogs';
import Home from '../Pages/Home';
import MyToys from '../Pages/MyToys';

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutHome />,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/addatoy",
          element: <AddAToy/>
        },
        {
          path: "/alltoys",
          element: <AllToys/>
        },
        {
          path: "/blogs",
          element: <Blogs/>
        },
        {
          path: "/mytoys",
          element: <MyToys/>
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage/>
    }
  ]);


export default router;