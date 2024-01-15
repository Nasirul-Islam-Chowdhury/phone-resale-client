import React from "react";
import { Link } from "react-router-dom";

const Prepareyourself = () => {
  return (
    <div className="container font-primary ">
      <div  data-aos="zoom-in" className=" bg-primary rounded-lg text-white font-semibold py-14 lg:px-20  px-5 text-center">
        <h1 className="lg:text-7xl text-4xl leading-10">
          Preare yourself & let’s explore The the mobile world
        </h1>
        <p className="my-4 lg:text-2xl">
          we have many speclal offers especialy for you.
        </p>
        <Link to="/mobiles">
          <button className="btn btn-outline px-20 my-10">Explore</button>
        </Link>
      </div>
    </div>
  );
};

export default Prepareyourself;
