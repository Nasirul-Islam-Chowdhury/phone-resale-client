import React, { useEffect, useState } from "react";
import animation from "../../assets/banner-animation.json";
import Lottie from "lottie-react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
  const [search, setSearch] = useState(false);
  const [mobiles, setMobiles] = useState([]);
  const [finalMob, setFinalMob] = useState([]);
  useEffect(() => {
    fetch("https://phone-resale-server.onrender.com/mobiles")
      .then((res) => res.json())
      .then((data) => {
        const finalData = data.filter((d) => d.status !== "sold");
        setMobiles(finalData);
        setFinalMob(finalData);
      });
  }, []);
  const handleSearch = (search) => {
    if (search !== "" && search !== " ") {
      const result = mobiles.filter((mobile) =>
        mobile.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearch(true);
      setFinalMob(result);
    } else {
      setSearch("");
    }
  };
  return (
    <>
      <div  className="text-black container lg:flex justify-between items-center font-primary my-10">
        <div className="lg:w-7/12" data-aos="fade-right">
          <h1 className=" lg:text-6xl text-3xl font-bold lg:leading-tight leading-relaxed">
            Grab the best deal on your old smartphone!
          </h1>
          <h1 className="font-bold text-4xl py-6 text-green-500">
            Instatnt
            <TypeAnimation
              sequence={[
                "  Payment",
                3000,
                "  Pickup",
                3000,
                "  Price",
                () => {},
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h1>
          <p className="mt-10 mb-1 ">
            Let's get started. What are you buying today?
          </p>
          <div className="">
            <div className="inline-flex flex-col justify-center relative text-gray-500">
              <div className="relative">
                <input
                  onChange={(e) => handleSearch(e.target.value)}
                  type="text"
                  placeholder="Enter Device Name"
                  className="input-lg outline-none rounded-md w-full p-5 input-bordered max-w-md  shadow-md"
                />
              </div>
                {search &&
              <ul className="bg-white border border-gray-100 w-full mt-2">
                  {finalMob.map((mobile) => (
                   <Link to={`/category/${mobile.subcategory}/${mobile._id}`}>
                    <li className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                      <svg
                        className="absolute w-4 h-4 left-2 top-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      {mobile.name}
                    </li>
                   </Link>
                  ))}
                {finalMob.length == 0 && "No result found"}
              </ul>
                  }
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="lg:w-5/12">
          <Lottie className="lg:h-full h-96" animationData={animation} loop={true} />
        </div>
      </div>
    </>
  );
};

export default Banner;
