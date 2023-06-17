import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loading from '../../SharedComponents/Loading/Loading';
import { Auth } from '../../Contexts/AuthContext';
import OrdersRow from '../Myorders/OrdersRow';

const Buyers = () => {
    const [loading, setLoading] = useState(true);
    const { user } = useContext(Auth);
    const { data: buyers = [], isLoading } = useQuery({
      queryKey: ["buyers", user?.email],
      queryFn: async () => {
        if (!user) return [];
        const res = await fetch(
          `http://localhost:7000/buyers`
        );
        const data = await res.json();
        setLoading(false);
        return data;
      },
    });
    if (loading || isLoading) {
      return <Loading />;
    }
    return (
  <div className='p-5'>
        <h1 className="text-black text-3xl font-primary font-bold mb-4">All buyers</h1>
          <div className="overflow-x-auto text-black ">
        <table className="table">
    
          <thead>
            <tr className="text-black">
              <th></th>
              <th>Name</th>
              <th></th>
              <th>Email</th>
              <th></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
    {buyers.map((order, i) =><OrdersRow key={i} i={i} order={order}/> )}
          </tbody>
        </table>
      </div>
  </div>
    );
};

export default Buyers;