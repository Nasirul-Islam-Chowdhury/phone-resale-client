import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import Loading from "../../SharedComponents/Loading/Loading";
import { Link } from "react-router-dom";

const AdvertisedItems = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["advertise"],
    queryFn: () =>
      fetch(`http://localhost:7000/advertise`).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {products.length>0 && (
        <div className="container text-black font-primary">
          <h2 className="text-2xl font-semibold my-4">Advertised Products</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {products.map((product) => (
              <div
                key={product._id}
                className="card w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img src={product.images[0]} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>{product.description.slice(0, 100)}...</p>
                  <h2 className="card-title">Price: ${product.price}</h2>
                  <div className="card-actions justify-end">
                    <Link
                      to={`/category/${product.subcategory}/${product._id}`}
                      className="btn btn-outline btn-accent"
                    >
                      See Details
                    </Link>
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
