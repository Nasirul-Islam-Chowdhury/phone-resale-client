import React, { useEffect, useState } from 'react';
import { BiTime } from 'react-icons/bi';
import { CgArrowsExpandLeft, CgDollar } from 'react-icons/cg';
import { FaCreativeCommonsBy } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';
import { TiLocation } from 'react-icons/ti';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const MobileCards = ({mobile, i}) => {
  const [isSerllerVerified, setIsSellerVerified] = useState(false);
  useEffect(()=>{
    fetch(`https://phone-resale-server-nine.vercel.app/users/${mobile.sellerEmail}`)
    .then(res=>res.json())
    .then(data=>{
      setIsSellerVerified(data.verified)
    }
    
    )
    .catch(error=>{
      setIsSellerVerified(false)
      console.log(error)})
  },[])
    return (
        <Fade bottom>
        <div className="card card-compact w-80 mx-auto bg-base-100 shadow-xl rounded-md font-primary">
            <figure>
              <img
                className="h-52 w-full object-cover"
                src={mobile.images[0] && mobile.images[0]}
                alt="moible"
              />
            </figure>
            <Link to={`/category/${mobile?.subcategory}/${mobile._id}`} className="card-body">
              <h2 className="card-title ">{mobile?.name}</h2>
              <p> {mobile.description.length > 70 ? <>{mobile.description.slice(0,70)}</> : mobile.description}
               </p>
              <div className="flex justify-between gap-5 items-center my-2">
                <div className="w-24 h-6 rounded-lg   bg-yellow-300 flex justify-center items-center">
                  <p className="text-center text-sm flex items-center">
                    <CgDollar className="w-4 h-4" /> Price: ${mobile?.price}
                  </p>
                </div>
                <div>
                  <p className="flex items-center gap-1">
                    <TiLocation className="w-6 h-6" />
                    {mobile?.location}
                  </p>
                </div>
                <p className="flex items-center gap-1">
                  <FaCreativeCommonsBy className="w-5 h-5" />
                  {mobile.condition}
                </p>
              </div>
              <div className="flex justify-start gap-5">
                <div>
                  <div className="flex items-center gap-1">
                    <RxAvatar className="w-5 h-5" />
                    <p className="font-bold">{mobile.sellerName}</p>
                    {isSerllerVerified && <MdVerified className='text-green-600'></MdVerified>}
                  </div>
                </div>
                <div>
                  <p className="flex items-center gap-1 font-bold">
                    <BiTime className="w-5 h-5" />
                    {mobile.usedYear} Years
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
        </div>
          </Fade>
    );
};

export default MobileCards;