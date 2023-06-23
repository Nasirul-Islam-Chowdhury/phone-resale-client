import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loading from '../../SharedComponents/Loading/Loading';
import { Auth } from '../../Contexts/AuthContext';
import OrdersRow from '../Myorders/OrdersRow';
import { toast } from 'react-hot-toast';
import {BsTruck} from 'react-icons/bs'

const Buyers = () => {
    const [loading, setLoading] = useState(true);
    const [buyers, setBuyers] = useState([])
    const { user } = useContext(Auth);
    const { data = [], isLoading } = useQuery({
      queryKey: ["buyers", user?.email],
      queryFn: async () => {
        if (!user) return [];
        const res = await fetch(`http://localhost:7000/buyers`,{
          headers:{
            autherization: `bearer ${localStorage.getItem("accessToken")}`
          }
        });
        const data = await res.json();
        setLoading(false);
        setBuyers(data)
        return data;
      },
    });
    const handleDeleteBuyers = (email)=>{
      fetch(`http://localhost:7000/buyer/${email}`,{
        method :"DELETE",
        headers:{
          autherization: `bearer ${localStorage.getItem("accessToken")}`
        }
       })
       .then(res=>res.json())
       .then(data=>{
        const finalBuyers = buyers.filter((buyer)=>buyer.email !== email)
        setBuyers(finalBuyers)
       toast.success(`Deleted Successfully`)
       console.log(data)
       })
    }
    if (loading || isLoading) {
      return <Loading />;
    }
    return (
  <div className='p-5'>
        <h1 className="text-black text-3xl font-primary font-bold mb-4">All buyers</h1>
          <div className="lg:overflow-x-auto overflow-x-scroll w-full   text-black ">
        <table className="table">
    
          <thead>
            <tr className="text-black">
              <th></th>
              <th>Name</th>
              <th>Email</th>
          
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
          buyers.map((buyer, i)=> <tr key={i}>
            <td>{i+1}</td>
            <td>{buyer.name}</td>
            <td>{buyer.email}</td>
    
            <td><button onClick={()=>handleDeleteBuyers(buyer.email)}  className='btn btn-sm btn-error'>delete</button></td>
          </tr>)
        }
          </tbody>
        </table>
      </div>
  </div>
    );
};

export default Buyers;