import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from '../../SharedComponents/Loading/Loading'
const Mobiles = () => {
    const [mobiles, setMobiles] = useState([])
     useEffect(()=>{
        fetch("http://localhost:7000/mobiles")
        .then((res) => res.json())
        .then(data=> {
          setMobiles(data)})
     },[])


  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:7000/categories").then((res) => res.json()),
  });
  const handleFilter = (category)=>{
    const filteredmobiles = mobiles.filter(mobile=>mobile.subcategory == category);
    console.log(filteredmobiles)
    setMobiles(filteredmobiles)
  }

  return (
    <div className="container mx-auto text-black">
      <div>
        <form className="mt-3">
          <div className="flex gap-2 items-center">
            <div className="w-1/6">
              <select onClick={(e)=>handleFilter(e.target.value)} className="select select-bordered w-full ">
                <option selected>All categories</option>
                {
                    categories.map(category=>
                        <option key={category._id}>{category.category}</option>
                        
                        )
                }
              </select>
            </div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-3 w-full z-20 text-sm text-gray-900 rounded-lg border-l-gray-50  border-2 outline-none"
                placeholder="Search Apple, Oneplus, Pixel, Xiaomi, samsung ..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5">
        {mobiles.map((mobile, i) => (
          <div key={i} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={mobile.images[0]}
                alt="mobiles"
                className="w-full h-72"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{mobile.name}</h2>
              <p>{mobile.description.slice(0, 100)}....</p>
              <div className="card-actions justify-end">
                <Link
                  to={`/category/${mobile.subcategory}/${mobile._id}`}
                  className="btn btn-accent text-white"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
