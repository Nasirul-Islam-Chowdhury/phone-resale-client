import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#2d857a] text-white pt-16 font-primary">
      <footer className=" container">
        <div className=" lg:flex lg:flex-row flex-col justify-center items-center ">
          <div className="lg:w-1/2">
            <div className="lg:w-4/5 lg:mx-auto">
              <h1 className="text-3xl mb-4 font-bold">
                PhoneSwapZone
              </h1>
              <p>
              To sell a used phone safely, factory reset it to erase personal data, find a reputable platform or store, meet in a public place for the exchange, and accept secure payment methods like cash or a verified payment app.
              </p>
              <p className="mt-10">
              With a massive collection of 4,571+ of Apple phones, users can easily get their desired device within their budget from Bikroy. From 5,000 to 1,00,000; Apple mobiles are listed here to choose from. Browse through your needs and find out the best deals quickly. You can use filter options "minimum" and "maximum" prices to explore the best prices for Apple mobile phones. Price varies based on the condition of the mobile phones.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className=" flex lg:justify-between md:justify-start items-start gap-5 lg:mt-0 mt-10 flex-wrap">
              <div>
                <h3 className="mb-10 text-lg"> Pages</h3>
                <div className="flex flex-col items-start gap-8 text-sm text-[#DDDDDD]">
                  <Link to={"/"}>Home</Link>
                  <Link to={"/mobiles"}>Mobiles</Link>
                  <Link to={"/dashboard"}>Dashboard</Link>
                  <Link to={"/blog"}>Blog</Link>
                  <Link to={"/signin"}>Signin</Link>
                </div>
              </div>
              <div>
                <h3 className="mb-10 text-lg">Links</h3>
                <div className="flex flex-col items-start gap-8 text-sm text-[#DDDDDD]">
                  <p>Privacy Policy</p>
                  <p>How to verify</p>
                  <p>Website Policy</p>
                  <p>Selling Policy</p>
                  <p>Buying Policy</p>

                </div>
              </div>
              <div>
                <h3 className="mb-10 text-lg"> Contact</h3>
                <div className="flex flex-col items-start gap-8 text-sm text-[#DDDDDD]">
                  <div className="flex gap-2">
                    <p>+880 1644113296</p>
                  </div>
                  <div className="flex gap-2">
                    <p>nasirchy252@gmail.com</p>
                  </div>
                  <div className="flex gap-2 ">
                    <p className="w-2/3">
                     Khadimpara 3100
                    </p>
                  </div>
                    <p className="w-2/3">
                    Bangladesh Sylhet
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-8 mt-4">
          <Link to="">
            {/* <img className='h-5 w-3' width={500} height={500} alt='facebook-logo' src={facebook}/> */}
          </Link>
          <Link to="">
            {/* <img className='h-5 w-6' width={500} height={500} alt='twitter-logo' src={twitter}/> */}
          </Link>
          <Link to="">
            {/* <img className='h-8 w-8' width={500} height={500} alt='linkedin-logo' src={linkedin}/> */}
          </Link>
          <Link to="">
            {/* <img className='h-8 w-8' width={500} height={500} alt='instagram-logo' src={insta}/> */}
          </Link>
        </div>


        <form onSubmit={(e)=>{
          e.preventDefault();
          toast.success("You have subscribed to phoneSwapZone")
          }} className="flex lg:w-1/2 w-5/6 mx-auto my-10">
        <input required type="gmail" placeholder="username@gmail.com" className="input bg-white border-gray-400 w-full rounded-e-none" /> 
        <button  className="btn  bg-[#176158]  btn-outline  rounded-s-none">Subscribe</button>
      </form> 


        <div className="footer footer-center p-4  bg-[#176158] text-base-content">
          <aside>
            <p>Copyright © 2024 - All right reserved by Md Nasirul Islam Chowdhury</p>
          </aside>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
