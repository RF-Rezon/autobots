import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { AuthContext } from './../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    
   if (!user) {
     return <Navigate state={{ from: location }} to="/login" replace/>;
   } 
   return children;
};

export default PrivateRoute;