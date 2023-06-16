import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Auth } from '../../Contexts/AuthContext';
import Loading from '../../SharedComponents/Loading/Loading';
import OrdersRow from '../Myorders/OrdersRow';

const Sellers = () => {
    const [loading, setLoading] = useState(true);
    const { user } = useContext(Auth);
    const { data: sellers = [], isLoading } = useQuery({
      queryKey: ["sellers", user?.email],
      queryFn: async () => {
        if (!user) return [];
        const res = await fetch(
          `http://localhost:7000/sellers`
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
        <div className="overflow-x-auto text-black p-5">
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
    {sellers.map((order, i) =><OrdersRow key={i} i={i} order={order}/> )}
          </tbody>
        </table>
      </div>
    );
};

export default Sellers;