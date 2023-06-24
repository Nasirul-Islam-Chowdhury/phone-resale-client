import React, { useContext, useState } from "react";
import { Auth } from "../../Contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../SharedComponents/Loading/Loading";
import OrdersRow from "./OrdersRow";

const Myorders = () => {
  const [myOrders, setmyOrders] = useState([]);
  const { user } = useContext(Auth);
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
    <div className="p-5 w-full overflow-x-auto ">
      <h1 className="text-black text-3xl font-primary font-bold mb-4">
        My Orders
      </h1>
      <div className="lg:w-full md:w-full  w-96 overflow-x-auto text-black ">
        <table className="table overflow-x-scroll">
          <thead>
            <tr className="text-black">
              <th></th>
              <th>Name</th>
              <th>Product Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myOrders?.map((order, i) => (
              <OrdersRow
                key={i}
                i={i}
                order={order}
                myOrders={myOrders}
                setmyOrders={setmyOrders}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myorders;
