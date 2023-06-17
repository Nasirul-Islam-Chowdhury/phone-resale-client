import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../../Pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../../SharedComponents/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
           <Navbar/>
           <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;