import React from "react";
import { Link } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { MdVerified } from "react-icons/md";
import { Fade } from "react-reveal";
import { CgDollar } from "react-icons/cg";
import { FaCreativeCommonsBy } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { BiTime } from "react-icons/bi";
const PhonesCard = ({ card }) => {
  const {
    name,
    previous_price,
    price,
    usedYear,
    storage,
    images,
    location,
    _id,
    description,
    sellerName,
    postDate,
    condition,
    subcategory,
  } = card;
  return (
    <Fade bottom>
      { card &&    <div className="text-black card card-compact w-80 mx-auto bg-white shadow-xl rounded-md font-primary ">
              <figure>
                <img
                  className="h-52 w-full object-cover"
                  src={images[0]}
                  alt="Shoes"
                />
              </figure>
              <Link to={`/category/${subcategory}/${_id}`} className="card-body bg-white">
                <h2 className="card-title ">{name}</h2>
                <p>{description.slice(0, 70)}.....</p>
                <div className="flex justify-between gap-5 items-center my-2">
                  <div className="w-24 h-6 rounded-lg   bg-yellow-300 flex justify-center items-center">
                    <p className="text-center text-sm flex items-center">
                      <CgDollar className="w-4 h-4" /> Price: ${price}
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-1">
                      <TiLocation className="w-6 h-6" />
                      {location}
                    </p>
                  </div>
                  <p className="flex items-center gap-1">
                    <FaCreativeCommonsBy className="w-5 h-5" />
                    {condition}
                  </p>
                </div>
                <div className="flex justify-start gap-5">
                  <div>
                    <div className="flex items-center gap-1">
                      <RxAvatar className="w-5 h-5" />
                      <p className="font-bold">{sellerName}</p>
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center gap-1 font-bold">
                      <BiTime className="w-5 h-5" />
                      {usedYear} Years
                    </p>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className=" w-24 h-8 rounded bg-[#379389] text-white  font-bold mt-4">
                    <p>
                      See Details
                    </p>
                  </button>
                </div>
              </Link>
          </div>}
            </Fade>
  );
};

export default PhonesCard;
