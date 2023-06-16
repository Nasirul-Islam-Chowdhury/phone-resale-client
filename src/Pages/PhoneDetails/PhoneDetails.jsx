import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import OrderModal from "../../SharedComponents/OrderModal/OrderModal";

const PhoneDetails = () => {
  const data = useLoaderData();
  return (
    <div className="container  bg-base-100   text-black">
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
              <h2>Brand: {d.brand}</h2>
              <h2>Storage: {d.storage}</h2>
              <h2>Model: {d.model}</h2>
            </div>
            <h2 className="text-2xl font-bold my-2">Priceing: </h2>
            <h2>
              Previous Price:{" "}
              <span className="font-bold">${d.previous_price}</span>
            </h2>
            <h2 className="my-2">
              Selling Price: <span className="font-bold">${d.price}</span>
            </h2>

            <div>
              <label htmlFor="my-modal-6" className="btn">
                open modal
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
