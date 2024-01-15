import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/AllRoutes/AllRoutes";
import { Toaster } from "react-hot-toast";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(`${import.meta.env.VITE_stripe_key}`);
import { loadStripe } from "@stripe/stripe-js";

const App = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster position="top-center" />
      </Elements>
    </div>
  );
};

export default App;
