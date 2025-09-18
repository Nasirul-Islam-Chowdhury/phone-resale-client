import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const OrdersRow = ({ order, i, setmyOrders, myOrders }) => {
  const handleCancelOrder = (_id) => {
   fetch(`https://phone-resale-server.onrender.com/order/${_id}`,{
    method :"DELETE",
    headers:{
      autherization: `bearer ${localStorage.getItem("accessToken")}`
    }
   })
   .then(res=>res.json())
   .then(data=>{
    const orders = myOrders.filter((order)=>order._id !== _id)
    setmyOrders(orders)
   toast.success(`Your Order ${order.itemName} Deleted Successfully`)
   })
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{order.name}</td>
      <td>{order.itemName}</td>
      <td>{order.email}</td>
      <td>{order.location? order.location : "Not found"}</td>
      <td>
       {order.itemPrice && !order.paid && <Link to={`/dashboard/payment/${order._id}`} className="btn btn-sm btn-info">Pay</Link>}
       {order.itemPrice && order.paid && <small className="btn btn-sm btn-success">paid</small>}
      </td>
      <td>
        <small
          className="btn btn-sm btn-error"
          onClick={() => handleCancelOrder(order._id)}
        >
         {!order.paid? "Cancel" : "Delete"}
        </small>
      </td>
    </tr>
  );
};

export default OrdersRow;
