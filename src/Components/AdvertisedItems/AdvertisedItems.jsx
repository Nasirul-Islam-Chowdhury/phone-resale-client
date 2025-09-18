import { useQuery } from "@tanstack/react-query";
import React, { Profiler, useEffect, useState } from "react";
import Loading from "../../SharedComponents/Loading/Loading";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
const AdvertisedItems = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["advertise"],
    queryFn: () =>
      fetch(`https://phone-resale-server-nine.vercel.app/advertise`)
      .then((res) => res.json()),

  
  });
  if (isLoading) {
    return <Loading />;
  }
  const finalPro = products.filter(p=> p.status !== "sold");
  return (
    <div>
      {finalPro.length>0 && (
        <div data-aos="fade-right" className="container text-black font-primary">
          <h2 className="text-3xl font-semibold lg:p-4 my-8 lg:text-start text-center">Advertised Products</h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {finalPro.map((product) => (
              <div
                key={product._id}
                className="card  card-compact  max-w-[25rem] xl:max-w-[20rem] w-full rounded-sm mx-auto shadow-xl"
              >
                <figure>
                  <img className=" h-60 w-full object-cover"  src={product.images[0]} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p title={product.description}>{product.description.slice(0, 100)}...</p>
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
