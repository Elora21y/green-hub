import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Tooltip as ReactTooltip } from "react-tooltip";
import NavLogo from "../NavLogo";
import ShareTheme from "../ShareTheme";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Successfully log out"))
      .catch((error) => toast.error(error));
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/browser-tips">Browse Tips</NavLink>
      </li>
      <li>
        <NavLink to="/explore-gardeners">Explore Gardeners</NavLink>
      </li>
      {user && 
       
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
       
      }
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-green-200/50 shadow max-w-[2600px] mx-auto z-10">
      <div className=" max-w-7xl mx-auto px-2 sm:px-8 xl:px-0 navbar p-0 ">
        <NavLogo/>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 text-secondary">{links}</ul>
        </div>
        <div className="navbar-end gap-1 ">
          {user ? (
            <>
              <div className="dropdown">
                <div tabIndex={0}>
                  <img
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                    }
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover cursor-pointer"
                    data-tooltip-id="user-tooltip"
                    data-tooltip-content={`Hi! ${user?.displayName || "Guest"}`}
                    data-tooltip-place="bottom"
                  />
                  <ReactTooltip
                    id="user-tooltip"
                    place="bottom"
                    style={{
                      backgroundColor: "#4caf50",
                      color: "white",
                      fontWeight: "500",
                    }}
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 max-w-54 p-4 shadow-lg right-0 space-y-2 text-center"
                >
                  <p className=" text-sm">{user.email}</p>
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
                className="btn btn-xs border-2 sm:btn-md hover:text-white hover:bg-primary text-primary border-primary bg-transparent shadow-none"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-xs sm:btn-md button-green shadow-none"
              >
                Register
              </Link>
            </>
          )}

          <ShareTheme/>
          {/* menubar */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm lg:hidden hover:bg-transparent hover:border-0"
            >
              <HiOutlineMenuAlt3 size={20} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content rounded-box z-20 mt-3 w-40 p-2 shadow right-0  bg-base-100"
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
