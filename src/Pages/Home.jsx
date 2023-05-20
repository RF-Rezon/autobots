import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";
import Carosul from "../Components/Carosul/Carosul";
import Gallery from "../Components/Gallery/Gallery";
import Header from "../Components/Header/Header";
import TabSection from './../Components/TabSection/TabSection';

AOS.init();

const Home = () => {
  return (
    <div>
     <Header/>
     <div className="p-7 my-10 bg-white rounded-lg"><p className="text-gray-800 md:text-4xl text-2xl font-extrabold p-5 my-10 text-center">Toy Gallery</p> <Gallery/></div>
     <div><p className="text-gray-800 md:text-4xl text-2xl font-extrabold p-5 my-10 text-center">In our shop.. (slide down)</p><Carosul/></div>
     <div><p className="text-gray-800 md:text-4xl text-2xl font-extrabold p-5 my-10 text-center">Shop By Category</p><TabSection/></div>

    </div>
  );
};

export default Home;
