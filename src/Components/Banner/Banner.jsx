import React from "react";
import animation from '../../../public/new.json'
import Lottie from "lottie-react";
import { TypeAnimation } from 'react-type-animation';
const Banner = () => {
  return (
    <div className="text-black">
      <div className="container lg:flex justify-between items-center font-primary">
     <div className="lg:w-3/6">
     <h1  className=" lg:text-5xl text-3xl font-semibold">
        Grab the best deal on your
      </h1>
     <h1  className=" lg:text-5xl text-3xl font-semibold mt-5">
         old smartphone!
      </h1>
     <h1  className="font-bold text-4xl py-6 text-green-500">
     Instatnt 
     <TypeAnimation
      sequence={[
        '  Payment', 
        3000, 
        '  Pickup', 
        3000, 
        '  Price',
        () => {
          
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
        
      </h1>
      <p className="py-4">Let's get started. What are you buying today?</p>
      <input type="text" placeholder="Enter Device Name" className="input-lg outline-none rounded-md w-full p-5 input-bordered max-w-md  shadow-xl " />
      <div className="divider w-1/2 text-sm mt-10">Or choose a category below</div>
     </div>
     <div className="lg:w-3/6">
     <Lottie animationData={animation} loop={true} />
     </div>
      </div>
    </div>
  );
};

export default Banner;
