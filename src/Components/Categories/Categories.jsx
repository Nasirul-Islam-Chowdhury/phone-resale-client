import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "../../SharedComponents/Loading/Loading";
import { Link } from "react-router-dom";

const Categories = () => {
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    fetch("https://phone-resale-server-nine.vercel.app/categories")
    .then(res=>res.json())
    .then(data=>{
      setLoading(false)
      setCategories(data)
    })
  },[])


  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container text-black font-primary my-20">
      {categories && (
        <div>
          <h2 className="text-3xl font-semibold lg:text-start  text-center">
            Browse Categories
          </h2>
          <div className="flex lg:flex-row flex-col items-center gap-5 mb-20 mt-10">
            {categories?.map((category) => (
              <div className="hover:shadow-xl" key={category._id}>
                <Link to={`/category/${category.category}`}>
                  <img
                    className="lg:w-full w-60 h-40 border rounded-md"
                    src={category.img}
                    alt=""
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
