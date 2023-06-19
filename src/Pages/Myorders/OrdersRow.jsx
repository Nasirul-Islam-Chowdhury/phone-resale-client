import React from "react";
import { toast } from "react-hot-toast";

const OrdersRow = ({ order, i, setmyOrders, myOrders }) => {
  const handleCancelOrder = (_id) => {
   fetch(`http://localhost:7000/order/${_id}`,{
    method :"DELETE",
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
        <small className="btn btn-sm btn-success">Pay</small>
      </td>
      <td>
        <small
          className="btn btn-sm btn-error"
          onClick={() => handleCancelOrder(order._id)}
        >
          Cancel
        </small>
      </td>
    </tr>
  );
};

export default OrdersRow;
