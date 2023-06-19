import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import OrderModal from "../../SharedComponents/OrderModal/OrderModal";
import { TiLocation } from "react-icons/ti";
import {  FaPhoneAlt } from "react-icons/fa";


const PhoneDetails = () => {
  const data = useLoaderData();
  return (
    <div className="container  bg-base-100   text-black min-h-[600px]">
      {data.map((d) => (
        <div key={d._id} className="flex rounded-md shadow-xl  my-10 gap-10">
          <div className="w-1/2 ">
            <div className="">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "mobile",
                    isFluidWidth: true,
                    src: d.images[0],
                    srcSet: d.images[0],
                
                  },
                  largeImage: {
                    isFluidWidth: true,
                    src: d.images[0],
                    width: 1000,
                    height: 1800,
                  },
                  enlargedImageContainerStyle: {
                    zIndex: "1",
                  },
                }}
              />
            </div>
          </div>
          <div className="w-1/2 p-5">
            <h2 className="card-title text-2xl">{d.name}</h2>
            <p className="my-4">{d.description}</p>
            <h2 className="card-title text-2xl mb-2">Features:</h2>
            <div className="grid grid-cols-2 gap-3 w-2/3">
              <h2>Condition: {d.condition}</h2>
              <h2>Brand: {d.subcategory}</h2>
         {d.storage &&  <h2>Storage: {d.storage}</h2>}
        {d.model  &&  <h2>Model: {d.model}</h2>}
            </div>
            <h2 className="text-2xl font-bold my-2">Priceing: </h2>
         
         <div className="grid grid-cols-2 gap-3 items-center w-full">
         <h2>
              Original Price:
              <span className="font-bold"> ${d.previous_price}</span>
            </h2>
          {d.price &&  <h2 className="my-2">
              Resale Price: <span className="font-bold"> ${ d.price}</span>
            </h2>}
           {d.location &&
            <h1 className="flex gap-1 items-center">
              <span><TiLocation className="w-6 h-6"/></span> {d.location}
            </h1>}
            {d.number && <h1 className="flex gap-1 items-center">
              Number: <span><FaPhoneAlt className="w-4 h-4"/></span> {d.number}
            </h1>}
            {d.postDate && <h1 className="flex gap-1 items-center">
              Posted Date:  {d.postDate}
            </h1>}
           
         </div>
           
            <div>
              <label htmlFor="my-modal-6" className="btn my-4">
                Order Now
              </label>
              <OrderModal data={d} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhoneDetails;
