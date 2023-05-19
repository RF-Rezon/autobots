import React, { useContext } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from './../AuthProvider/AuthProvider';
import Spninner from './../Utils/Spninner';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    
   if (!user) {
       if (loading) {
       return <div>{<Spninner />}</div>;
     }
     return <Navigate state={{ from: location }} to="/login" replace/>;
   } 
   return children;
};

export default PrivateRoute;