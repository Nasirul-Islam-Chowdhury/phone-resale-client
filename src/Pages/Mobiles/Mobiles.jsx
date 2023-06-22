import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgDollar } from "react-icons/cg";
import Loading from "../../SharedComponents/Loading/Loading";
import { TiLocation } from "react-icons/ti";
import { FaCreativeCommonsBy } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { BiTime } from "react-icons/bi";
import Fade from "react-reveal/Fade";

const Mobiles = () => {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [finalMob, setFinalMob] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/mobiles")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        const finalData = data.filter(d=> d.status !== "sold");
        setMobiles(finalData);
        setFinalMob(finalData);
      });
  }, []);

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:7000/categories").then((res) => res.json()),
  });

  const handleFilter = (category) => {
    if (category === "All categories") {
      return setFinalMob(mobiles);
    }
    const filteredmobiles = mobiles.filter(
      (mobile) => mobile.subcategory == category
    );
    setLoading(false);
    setFinalMob(filteredmobiles);
  };
  const handleSerch = (search) => {
    if (search !== " ") {
      const result = mobiles.filter((mobile) =>
        mobile.name.toLowerCase().includes(search.toLowerCase())
      );
      setLoading(false);
     setFinalMob(result);
    }
    
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container  text-black">
      <div>
        <form className="mt-3">
          <div className="flex lg:flex-row flex-col-reverse gap-2 lg:items-center">
            <div className="lg:w-1/6 w-1/2">
              <select defaultValue={"All categories"}
                onClick={(e) => handleFilter(e.target.value)}
                className="select select-bordered w-full "
              >
                <option >All categories</option>
                {categories.map((category) => (
                  <option key={category._id}>{category.category}</option>
                ))}
              </select>
            </div>
            <div className="relative w-full">
              <input
                onChange={(e) => handleSerch(e.target.value)}
                type="search"
                id="search-dropdown"
                className="block bg-slate-100 p-3 w-full z-20 text-sm text-gray-900  border-1 outline-none"
                placeholder="Search Apple, Oneplus, Pixel, Xiaomi, samsung ..."
                required
              />
              <div className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#379389]  border border-blue-700focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#379389] ">
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
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-5 px-20">
        {finalMob.map((mobile, i) => (
       
          <Fade  key={i} bottom>
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
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
