import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOutForm = ({order}) => {
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [cardError, setCardError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [proccessing, setProccessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    fetch("https://phone-resale-server-nine.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
         "content-type": "application/json",
         autherization: `bearer ${localStorage.getItem("accessToken")}`
    },
      body: JSON.stringify({order}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [order]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    if (!stripe || !elements) {
      return;
    }
    if (proccessing) {
      return <Loading />;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProccessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: order.name,
            email: order.email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
 
    if (paymentIntent.status === "succeeded") {
      const payment = {
        price: order.itemPrice,
        transactionId: paymentIntent.id,
        orderId: order._id,
        name : order.name,
      };
      fetch(`https://phone-resale-server-nine.vercel.app/payments`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            autherization: `bearer ${localStorage.getItem("accessToken")}`
          },
          body: JSON.stringify(payment),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setSuccess(`Congrats! your payment completed`);
            setTransactionId(paymentIntent.id);
          }
      
        });
    }
    setProccessing(false);
  };
  return (
    <>
      <form className="lg:w-96 my-7" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
        className="btn btn-accent px-8 my-8"
          type="submit"
          disabled={!stripe || !clientSecret || proccessing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-300">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-400">{success}</p>
          <p>
            Your transaction id:{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckOutForm;
