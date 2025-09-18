import React, { useContext, useState} from 'react';
import {Auth} from '../../Contexts/AuthContext'
import { FaCartPlus, FaPeopleArrows, FaBox } from 'react-icons/fa';
import Loading from '../../SharedComponents/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import useSeller from '../../Hooks/useSeller';
import useAdmin from '../../Hooks/useAdmin';
const Dashboard = () => {
  const {user} = useContext(Auth);
  const [admin] = useAdmin(user?.email);
  const [seller] = useSeller(user?.email);


  const [myOrders, setmyOrders] = useState([]);
  const [loading, setLoading] = useState(true)

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      if (!user) return [];
      const res = await fetch(`https://phone-resale-server-nine.vercel.app/orders?email=${user?.email}` ,{
        headers:{
          autherization: `bearer ${localStorage.getItem("accessToken")}`
        }
      } );
      const data = await res.json();
      setLoading(false)
      setmyOrders(data);

      return data;
    },
  });

  if ( loading) {
    return <Loading />;
  }









  return (
    <div className='w-5/6 mx-auto text-black mb-10'>
      <h1 className='text-3xl font-semibold font-primary my-8'>Welcome back {user.displayName}</h1>
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

      <div className="col-span-1">
        <div className="bg-slate-100 rounded-lg shadow-md flex justify-start items-center gap-10 px-5 py-10">
          <div>
<FaCartPlus className='w-20 h-20'></FaCartPlus>
          </div>
          <div className='font-bold  font-primary'>
            <p className='text-3xl'>{admin ? '20+' : seller ? '20+' : myOrders.length}</p>
            <p>Total {admin? 'User' : seller ? 'Buyer' : 'Order'}</p>
          </div>
        </div>
      </div>
     
     
   
    </div>
    </div>
  );
};

export default Dashboard;