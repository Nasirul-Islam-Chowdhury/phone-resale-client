import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "../../SharedComponents/Loading/Loading";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
const Categories = () => {
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([]);
  
  useEffect(()=>{
    fetch("https://phone-resale-server.onrender.com/categories")
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
    <div className="container   text-black font-primary my-20">
      {categories && (
        <div data-aos="fade-right">
          <h2 className="text-3xl font-semibold lg:text-start  text-center">
            Browse Categories
          </h2>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 mb-20 mt-10 w-5/6 mx-auto lg:w-full">
            {categories?.map((category) => (
              <div className="hover:shadow-xl" key={category._id}>
                <Link to={`/category/${category.category}`}>
                  <img
                    className="w-full  h-40 border rounded-md"
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
