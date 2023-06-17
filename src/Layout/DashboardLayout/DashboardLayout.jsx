import React from 'react';
import NavBar from './../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
const DashboardLayout = () => {
    return (
        <div className='bg-white'>
  <NavBar/>
        <div className="drawer lg:drawer-open container ">
     
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
        <div className="drawer-content">
         
       <Outlet/>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full text-black bg-slate-100">
            {/* Sidebar content here */}
            <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard/sellers'>All Sellers</Link></li>
            <li><Link to='/dashboard/buyers'>All Buyers</Link></li>
            <li><Link to='/dashboard/addProducts'>Add a product</Link></li>
            <li><Link to='/dashboard/mybuyers'>My Buyers</Link></li>
            <li><Link to='/dashboard/myproducts'>My Products</Link></li>
          </ul>
        
        </div>
      </div>
        </div>
    );
};

export default DashboardLayout;