import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';

const LayoutHome = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <NavBar/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
};

export default LayoutHome;