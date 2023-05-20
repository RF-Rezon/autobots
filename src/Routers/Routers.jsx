import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import SingleToyDetails from '../Components/SingleToyDetails/SingleToyDetails';
import Update from '../Components/Update/Update';
import LayoutHome from '../Layout/LayoutHome';
import AddAToy from '../Pages/AddAToy';
import AllToys from '../Pages/AllToys';
import Blogs from '../Pages/Blogs';
import Home from '../Pages/Home';
import MyToys from '../Pages/MyToys';
import PrivateRoute from './PrivateRoute';

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
          element: <PrivateRoute><AddAToy/></PrivateRoute>  
        },
        {
          path: "/alltoys",
          element: <AllToys/>,
          loader: ()=> fetch("http://localhost:3000/getalltoys")
        },
        {
          path: "/alltoys/:id",
          element: <PrivateRoute><SingleToyDetails/></PrivateRoute> ,
          loader: ({params})=> fetch(`http://localhost:3000/getalltoys/${params.id}`)
        },
        {
          path: "/mytoys",
          element: <PrivateRoute><MyToys/></PrivateRoute> ,
          loader: ()=> fetch("http://localhost:3000/getmytoys")
        },
        {
          path: "/mytoys/:id",
          element: <Update/>,
          loader: ({params})=> fetch(`http://localhost:3000/getmytoys/${params.id}`)
        },
        {
          path: "/blogs",
          element: <Blogs/>
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage/>
    }
  ]);


export default router;