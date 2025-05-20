import React from "react";
import icon from "/favicon.png";
import { Link, NavLink } from "react-router";
import { HiMenuAlt1, HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to='/explore-gardeners'>Explore Gardeners</NavLink>
      </li>
      <li>
        <NavLink to='/browser-tips'>Browse Tips</NavLink>
      </li>
      <li>
        <NavLink to='/share-garden'>Share a Garden</NavLink>
      </li>
      <li>
        <NavLink to='/my-tips'>My Tips</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar p-0 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <img src={icon} alt="" className="w-8 sm:w-10 md:w-12" />
          <h3
            href="/"
            className="font-bold text-secondary text-lg sm:text-2xl md:text-3xl"
          >
            Green<span className="text-primary">Hub</span>
          </h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>
        <div className="navbar-end gap-1">
          <Link
            to="/login"
            className="btn btn-xs sm:btn-md hover:text-white hover:bg-primary text-primary border border-primary "
          >
            Login
          </Link>
          <Link to="/register" className="btn btn-xs sm:btn-md button-green">
            Register
          </Link>
          {/* menubar */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm lg:hidden "
            >
              <HiOutlineMenuAlt3 size={20} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow right-0"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
