import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Auth } from "../../Contexts/AuthContext";
import Loading from "../../SharedComponents/Loading/Loading";
import OrdersRow from "../Myorders/OrdersRow";

const MyProducts = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Auth);
  const { data: myProducts = [], isLoading } = useQuery({
    queryKey: ["myProducts", user?.email],
    queryFn: async () => {
      if (!user) return [];
      const res = await fetch(
        `http://localhost:7000/myProducts?email=${user?.email}`
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
    <div className="p-5">
      <h1 className="text-black text-3xl font-primary font-bold mb-4">
        My Products
      </h1>
    
         <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5">
               {/* row 1 */}
               {myProducts.map((order, i) => (
             <div className="card  w-full bg-base-100 shadow-xl text-black">
             <figure><img className="w-full h-72" src={order.images[0]} alt="Shoes" /></figure>
             <div className="card-body">
               <h2 className="card-title">{order.name}</h2>
               <p>{order.description.slice(0,100)}</p>
              <div className="font-semibold flex justify-between items-center">
              <p >Sale Status: { order.status ? order.status : "Available"}</p>
              <p>Price: ${order.price}</p>
              </div>
               <div className="card-actions justify-end mt-5">
                 <button className="btn btn-success">Advertise</button>
                 <button className="btn btn-error">Delete</button>
               </div>
             </div>
           </div>
            ))}
         </div>
      
    </div>
  );
};

export default MyProducts;
