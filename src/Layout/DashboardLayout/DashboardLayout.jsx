import React, { useContext } from "react";
import NavBar from "./../../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import {
  FaPeopleArrows,
  FaCartArrowDown,
  FaPeopleCarry,
  FaBox,
} from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";
import { Auth } from "../../Contexts/AuthContext";
import useAdmin from "../../Hooks/useAdmin";
import useSeller from "../../Hooks/useSeller";
import { BsTruck } from "react-icons/bs";

const DashboardLayout = () => {
  const { user } = useContext(Auth);
  const [admin] = useAdmin(user?.email);
  const [seller] = useSeller(user?.email);
console.log(seller)
  return (
    <div className="bg-white">
      <NavBar />
      <div className="drawer lg:drawer-open  ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          <div className="text-end">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-accent text-white m-1 btn-sm drawer-button lg:hidden text-end"
            >
              See Menu
            </label>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-black bg-[#E6E5E6]">
            <div className="flex items-center gap-3">
              <div>
                <FcBusinessman className="w-14 h-14 p-1 rounded-full bg-slate-200" />
              </div>
              <div>
                <h1 className="font-primary font-bold text-xl">
                  {user?.displayName.slice(0, 16)}
                </h1>
                <p className="text-sm hover:underline">View Profile</p>
              </div>
            </div>
            {!seller && !admin && (
              <li>
                <Link
                  className="flex items-center gap-2 mt-10"
                  to="/dashboard/orders"
                >
                  <BsTruck className="w-6 h-6" />
                  <h3 className="text-lg font-normal font-primary">
                    My orders
                  </h3>
                </Link>
              </li>
            )}
            {seller && (
              <li>
                <Link
                  className="flex items-center gap-2 mt-10"
                  to="/dashboard/addProducts"
                >
                  <FaCartArrowDown className="w-6 h-6" />
                  <h3 className="text-lg font-normal font-primary">
                    Add a product
                  </h3>
                </Link>
              </li>
            )}
            {seller && (
              <li>
                <Link
                  className="flex items-center gap-2 "
                  to="/dashboard/mybuyers"
                >
                  <FaPeopleCarry className="w-6 h-6" />
                  <h3 className="text-lg font-normal font-primary">
                    My Buyers
                  </h3>
                </Link>
              </li>
            )}
            {seller && (
              <li>
                <Link to="/dashboard/myProducts">
                  <FaBox className="w-6 h-6" />
                 <h3 className="text-lg font-normal font-primary"> My Products</h3>
                </Link>
              </li>
            )}
            {admin && (
              <li>
                <Link
                  className="mt-10 flex items-center gap-2"
                  to="/dashboard/sellers"
                >
                  <IoIosPeople className="w-6 h-6" />
                  <h3 className="text-lg font-normal font-primary">
                    All sellers
                  </h3>
                </Link>
              </li>
            )}
            {admin && (
              <li>
                <Link
                  className="flex items-center gap-2"
                  to="/dashboard/buyers"
                >
                  <FaPeopleArrows className="w-6 h-6" />
                  <h3 className="text-lg font-normal font-primary">
                    All Buyers
                  </h3>
                </Link>
              </li>
            )}
            <li>
              <hr className="text-black" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
