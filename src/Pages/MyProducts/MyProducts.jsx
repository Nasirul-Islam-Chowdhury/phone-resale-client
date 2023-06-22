import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Auth } from "../../Contexts/AuthContext";
import Loading from "../../SharedComponents/Loading/Loading";
import { toast } from "react-hot-toast";

const MyProducts = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Auth);
  const [myProducts, setMyProducts] = useState([])

  const { data = [], isLoading } = useQuery({
    queryKey: ["myProducts", user?.email],
    queryFn: async () => {
      if (!user) return [];
      const res = await fetch(`http://localhost:7000/myProducts?email=${user?.email}`);
      const data = await res.json();
      setLoading(false);
      setMyProducts(data)
      return data;
    },
  });
  if (loading || isLoading) {
    return <Loading />;
  }
  const handleDeleteProducts = (id)=>{
    fetch(`http://localhost:7000/myProduct/${id}`,{
      method :"DELETE",
     })
     .then(res=>res.json())
     .then(data=>{
      const finalProducts = myProducts.filter((device)=>device._id !== id)
      setMyProducts(finalProducts)
     toast.success(`Deleted Successfully`)
     console.log(data)
     })
  }
  const handleAdvertise = (product)=>{
    fetch(`http://localhost:7000/advertise/${product._id}`,{
      method :"PUT",
     })
     .then(res=>res.json())
     .then(data=>{
     toast.success(`Advertised Successfully`)
     })
  }

  return (
    <div className="p-5">
      <h1 className="text-black text-3xl font-primary font-bold mb-4">
        My Products
      </h1>
    
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
               {/* row 1 */}
               {myProducts.map((order, i) => (
             <div key={i} className="card w-96 bg-base-100 shadow-xl text-black">
             <figure><img className="w-96 h-72" src={order.images[0]} alt="Shoes" /></figure>
             <div className="card-body">
               <h2 className="card-title">{order.name}</h2>
               <p>{order.description.slice(0,100)}</p>
              <div className="font-semibold flex justify-between items-center">
              <p >Sale Status: { order.status}</p>
              <p>Price: ${order.price}</p>
              </div>
               <div className="card-actions justify-end mt-5">
                 <button disabled={order.role === "advertised" && order.status === "sold"} onClick={()=>handleAdvertise(order)} className="btn btn-success">{order.role === "advertised" ? "Advertised" : "Advertise"}</button>
                 <button onClick={()=>handleDeleteProducts(order._id)} className="btn btn-error">Delete</button>
               </div>
             </div>
           </div>
            ))}
         </div>
      
    </div>
  );
};

export default MyProducts;
