import React, { use } from "react";
import icon from "/favicon.png";
import { Link, NavLink } from "react-router";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => console.log("user log out"))
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/explore-gardeners">Explore Gardeners</NavLink>
      </li>
      <li>
        <NavLink to="/browser-tips">Browse Tips</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/share-garden">Share a Garden</NavLink>
          </li>
          <li>
            <NavLink to="/my-tips">My Tips</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className=" bg-base-100/80 shadow ">
      <div className=" max-w-7xl mx-auto px-2 sm:px-8 xl:px-0 navbar p-0">
        <div className="navbar-start">
          <img src={icon} alt="" className="w-8 sm:w-10 md:w-12" />
          <h3 className="font-bold text-secondary text-xl sm:text-2xl md:text-3xl">
            Green<span className="text-primary">Hub</span>
          </h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 ">{links}</ul>
        </div>
        <div className="navbar-end gap-1 ">
          {user ? (
            <>
            <div className="dropdown">
            <div
              tabIndex={0}
            >
                <img
                src={`${
                  user.photoURL
                    ? user.photoURL
                    : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                }`}
                alt="Profile Pic"
                className="w-12 h-12 rounded-full object-cover cursor-pointer"
                title={`Hi! ${user.displayName}`}
              />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 max-w-54 p-4 shadow-lg right-0 space-y-2 text-center"
            >
              <p className=" text-sm md:text-base">{user.email}</p>
                <Link
                onClick={handleLogout}
                className="btn btn-xs md:btn-sm button-green "
              >
                Logout
              </Link>
            </ul>
          </div>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="btn btn-xs sm:btn-md hover:text-white hover:bg-primary text-primary border border-primary bg-white "
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-xs sm:btn-md button-green"
              >
                Register
              </Link>
            </>
          )}
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
