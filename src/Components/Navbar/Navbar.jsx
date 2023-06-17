import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../../Contexts/AuthContext";

const Navbar = () => {
  const {user, logOut} = useContext(Auth)
const handleSignout = ()=>{
  logOut()
  .then(()=>{})
  .catch((e)=>console.log(e))
}
  const menuItems = (
    <>
       <li><Link  to='/'>Home</Link></li>
       <li><Link  to='/dashboard'>Dashboard</Link></li>
    </>
  );
  return (
    <div className="bg-[#379389]">
      <div className="navbar container text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu  dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-[#379389] z-50"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">PhoneSwapZone</a>
        </div>
        <div className="navbar-center  hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {
            user?
            <Link className="btn  btn-outline" onClick={handleSignout}>Signout</Link>:
            <Link to='/signin' className="btn  btn-outline">Signin</Link> 
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
