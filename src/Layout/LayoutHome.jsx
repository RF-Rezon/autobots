import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import Spninner from "../Utils/Spninner";

const LayoutHome = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    <Spninner />
  } else {
    return (
      <div>
        <div className="max-w-7xl mx-auto">
          <NavBar />
          <Outlet />
          <Footer />
        </div>
      </div>
    );
  }
};

export default LayoutHome;
