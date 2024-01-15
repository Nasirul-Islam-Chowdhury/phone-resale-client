import Lottie from "lottie-react";
import React from "react";
import animation from '../../assets/buy.json'
const EasyPayment = () => {
  return (
    <div className="container text-black font-primary">
      <div className="flex lg:flex-row flex-col justify-center items-center">
     <div className="lg:w-1/2 w-full">
        <h1 className="lg:text-7xl text-3xl font-semibold leading-normal">Easy Payment System by <span className="text-primary font-bold">Stripe</span></h1>
        <p className="my-6">
        Stripe is easy to use for eCommerce merchants. Also, it's free to use and set up for your business and you'll pay 2.9% + 30 cents per transaction customers make
        </p>
        <p className="my-6">
        Stripe uses AES-256, an industry-leading encryption standard, to secure its transaction communications. While AES-256 can suffer from brute force attacks, the protocol is widely considered one of the most robust encryption standards on the planet.
        </p>
     </div>
      <div  className="lg:w-1/2 w-full" data-aos="fade-zoom">
        <Lottie animationData={animation} loop={true} />
      </div>
      </div>
    </div>
  );
};

export default EasyPayment;
