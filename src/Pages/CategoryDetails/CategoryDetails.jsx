import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import PhonesCard from "../../Components/PhonesCard/PhonesCard";


const CategoryDetails = () => {
  const categoryDetails = useLoaderData();
  return (
 
    <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10">
      {categoryDetails.map((details) => (
        <PhonesCard key={details._id} card={details} />
      ))}
    </div>
   
 
  );
};

export default CategoryDetails;
