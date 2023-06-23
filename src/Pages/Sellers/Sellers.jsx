import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Auth } from "../../Contexts/AuthContext";
import Loading from "../../SharedComponents/Loading/Loading";
import OrdersRow from "../Myorders/OrdersRow";
import { toast } from "react-hot-toast";

const Sellers = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Auth);
  const [sellers, setSellers] = useState([]);
  const { data = [], isLoading } = useQuery({
    queryKey: ["sellers", user?.email],
    queryFn: async () => {
      if (!user) return [];
      const res = await fetch(`http://localhost:7000/sellers`,{
        headers:{
          autherization: `bearer ${localStorage.getItem("accessToken")}`
        }
      });
      const data = await res.json();
      setSellers(data)
      setLoading(false);
      return data;
    },
  });

  const handleDeleteSeller = (email)=>{
    fetch(`http://localhost:7000/seller/${email}`,{
      method :"DELETE",
      headers:{
        autherization: `bearer ${localStorage.getItem("accessToken")}`
      }
     })
     .then(res=>res.json())
     .then(data=>{
      const finalSellers = sellers.filter((seller)=>seller.email !== email)
      setSellers(finalSellers)
     toast.success(`Deleted Successfully`)
     console.log(data)
     })
  }
  if (loading || isLoading) {
    return <Loading />;
  }



  return (
    <div className="p-5">
      <h1 className="text-black text-3xl font-primary font-bold mb-4">
        All sellers
      </h1>
      <div className="overflow-x-auto text-black">
        <table className="table">
          <thead>
            <tr className="text-black">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  <button className="btn btn-sm btn-success">Verify</button>
                </td>
                <td>
                  <button onClick={()=>handleDeleteSeller(seller.email)} className="btn btn-sm btn-error">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sellers;
