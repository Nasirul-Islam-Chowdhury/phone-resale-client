import React from "react";
import { Link } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { MdVerified } from "react-icons/md";
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
    subcategory,
  } = card;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl text-black font-primary">
      <figure>
        <img className="w-96 h-80 object-cover" src={images[0]} alt="mobile" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name} ({storage})
        </h2>
        {description.length > 100 ? (
          <p>{description.slice(0, 100)}...</p>
        ) : (
          <p>{description}</p>
        )}
        <div className="flex justify-between items-center">
          {sellerName && (
            <div className="font-semibold text-lg flex gap-2">
              <h3>Seller: </h3>
              <h2 className="font-bold flex items-center gap-2">
                {sellerName} <MdVerified className="w-4 h-4" />
              </h2>
            </div>
          )}
          {usedYear && (
            <h1 className="font-semibold text-lg">years of use: {usedYear}</h1>
          )}
        </div>
        {postDate && (
          <h1 className="font-semibold text-lg">Posted on: {postDate}</h1>
        )}

        {location && (
          <h1 className="flex gap-1 items-center font-semibold">
            <span>
              <TiLocation className="w-6 h-6" />
            </span>{" "}
            {location}
          </h1>
        )}
        <h2 className="card-title">
          <span className="line-through">${previous_price}</span>${price}
        </h2>
        <div className="card-actions justify-end">
          <Link to={`/category/${card.subcategory}/${_id}`}>
            <button className="btn btn-accent btn-outline ">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhonesCard;
