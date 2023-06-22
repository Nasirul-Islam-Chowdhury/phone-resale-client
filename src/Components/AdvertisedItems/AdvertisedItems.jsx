import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "../../SharedComponents/Loading/Loading";
import { Link } from "react-router-dom";

const AdvertisedItems = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["advertise"],
    queryFn: () =>
      fetch(`http://localhost:7000/advertise`)
      .then((res) => res.json()),

  
  });
  if (isLoading) {
    return <Loading />;
  }
  const finalPro = products.filter(p=> p.status !== "sold");


  return (
    <div>
      {finalPro.length>0 && (
        <div className="container text-black font-primary">
          <h2 className="text-3xl font-semibold lg:p-4 my-8 lg:text-start text-center">Advertised Products</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {finalPro.map((product) => (
              <div
                key={product._id}
                className="card  card-compact lg:w-96 rounded-sm mx-auto shadow-xl"
              >
                <figure>
                  <img className=" h-60 object-cover"  src={product.images[0]} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>{product.description.slice(0, 100)}...</p>
                  <h2 className="card-title">Price: ${product.price}</h2>
                  <div className="card-actions justify-end">
                  <button  className=" w-24 h-8 rounded bg-[#379389] text-white  font-bold mt-4">
                    <Link to={`/category/${product.subcategory}/${product._id}`}>
                      See Details
                    </Link>
                  </button>
                </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertisedItems;
