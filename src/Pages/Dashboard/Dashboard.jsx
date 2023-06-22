import React, { useContext } from 'react';
import {Auth} from '../../Contexts/AuthContext'
import { FaCartPlus, FaPeopleArrows, FaBox } from 'react-icons/fa';
const Dashboard = () => {
  const {user} = useContext(Auth);
  return (
    <div className='w-5/6 mx-auto text-black'>
      <h1 className='text-3xl font-semibold font-primary my-8'>Welcome back {user.displayName}</h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

      <div className="col-span-1">
        <div className="bg-slate-100 rounded-lg shadow-md flex justify-start items-center gap-10 px-5 py-10">
          <div>
<FaCartPlus className='w-20 h-20'></FaCartPlus>
          </div>
          <div className='font-bold  font-primary'>
            <p className='text-3xl'>200+</p>
            <p>Total sell</p>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-slate-100 rounded-lg shadow-md flex justify-start items-center gap-10 px-5 py-10">
          <div>
<FaPeopleArrows className='w-20 h-20'></FaPeopleArrows>
          </div>
          <div className='font-bold  font-primary'>
            <p className='text-3xl'>7200+</p>
            <p>Customers</p>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-slate-100 rounded-lg shadow-md flex justify-start items-center gap-10 px-5 py-10">
          <div>
<FaBox className='w-20 h-20'></FaBox>
          </div>
          <div className='font-bold  font-primary'>
            <p className='text-3xl'>170+</p>
            <p>Products</p>
          </div>
        </div>
      </div>
   
    </div>
    </div>
  );
};

export default Dashboard;