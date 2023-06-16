import React from "react";
import animation from '../../../public/new.json'
import Lottie from "lottie-react";
const Banner = () => {
  return (
    <div className="text-black my-20">
      <div className="container h-full  flex justify-between items-center font-primary">
     <div className="w-3/6">
     <h1  className=" text-5xl font-semibold leading-snug ">
        Grab the best deal on your old smartphone!
      </h1>
     <h1  className="font-bold text-3xl py-6 text-green-500">
       Instatnt Payment
      </h1>
      <p className="py-4">Let's get started. What are you buying today?</p>
      <input type="text" placeholder="Enter Device Name" className="input-lg outline-none rounded-md w-full p-5 input-bordered max-w-md  shadow-xl " />
      <div className="divider w-1/2 text-sm mt-10">Or choose a category below</div>
     </div>
     <div className="w-3/6">
     <Lottie animationData={animation} loop={true} />
     </div>
      </div>
    </div>
  );
};

export default Banner;
