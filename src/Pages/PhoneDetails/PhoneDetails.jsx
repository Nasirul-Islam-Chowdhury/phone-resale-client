import React from "react";
import {  useLoaderData } from "react-router-dom";
import OrderModal from "../../SharedComponents/OrderModal/OrderModal";
import { TiLocation } from "react-icons/ti";
import { BiTime } from "react-icons/bi";
import { CgDollar } from "react-icons/cg";
import { RxAvatar } from "react-icons/rx";

const PhoneDetails = () => {
  const data = useLoaderData();
  return (
    <div className="container   text-black ">
      {data.map((d) => (
        <div
          key={d._id}
          className="bg-[#eeeef0] lg:flex rounded-md items-start  my-10 gap-10 lg:p-10 shadow-lg font-primary"
        >
          <div className="lg:w-1/2">
            <div className="w-full">
              <img
                className="w-full lg:h-[600px] h-[300px] rounded-md object-cover"
                src={d.images[0]}
                alt=""
              />
            </div>
          </div>
          <div className="lg:w-1/2 lg:p-0 p-5">
            <h2 className="card-title text-2xl">{d.name}</h2>
            <p className="my-2">{d.description}</p>
            <h2 className="card-title text-2xl mb-2 mt-4">Features:</h2>
            <div className="grid grid-cols-2 gap-1 lg:w-2/3 mb-4">
              <h2>Condition: {d.condition}</h2>
              <h2>Brand: {d.subcategory}</h2>
              {d.storage && <h2>Storage: {d.storage}</h2>}
              {d.model && <h2>Model: {d.model}</h2>}
            </div>

            <div className="my-4">
              <p className="flex items-center gap-2 text-lg">
                <BiTime className="w-6 h-6" /> Published: {d.PostDate? d.PostDate : "Not Found"}
              </p>
              <p className="flex items-center gap-2 text-lg mt-1">
                <TiLocation className="w-6 h-6" /> Locatioin: {d.location? d.location : "Not Found"}
              </p>
              <p className="flex items-center gap-2 text-lg mt-1">
                <CgDollar className="w-6 h-6" /> Original Price: $
                {d.previous_price}
              </p>
              <p className=" w-40 text-center py-1 rounded-xl bg-[#379389] text-white  font-bold mt-4">
               Price:   ${d.price}
              </p>
              <div className="flex justify-start gap-3 my-4 ">
                <div>
                  <RxAvatar className="w-12 h-12" />
                </div>
                <div>
                  <p>Seller: {d.sellerName}</p>
                  <p>Email: {d.sellerEmail}</p>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="my-modal-6" className="btn my-4 px-10">
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
