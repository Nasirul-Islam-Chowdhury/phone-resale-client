import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useElements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_stripe_key);
const Payment = () => {
  const orderDetails = useLoaderData();
  return (
    <div className="text-black m-6">
      <h1 className="font-bold text-3xl font-primary ">Payment</h1>
      {orderDetails?.map((order) => (
        <div key={order._id}>
          <h1 className="font-lg text-xl font-primary mt-4">
            Pay ${order.itemPrice} for your order of {order.itemName}
          </h1>
          <div>
            <Elements stripe={stripePromise}>
              <CheckOutForm order={order} />
            </Elements>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Payment;
