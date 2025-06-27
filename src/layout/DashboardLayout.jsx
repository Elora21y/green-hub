import React from "react";
import { NavLink, Outlet, useNavigation } from "react-router";
import NavLogo from "../NavLogo";
import ShareTheme from "../ShareTheme";
import Loading from "../components/Loading";

const DashboardLayout = () => {
    const navigation = useNavigation()
    const isNavigation = Boolean(navigation.location)
  return (
    <div className="drawer lg:drawer-open max-w-[1800px]  mx-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  ">
        {/* navbar */}
        <div className="navbar bg-base-300 w-full  lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <NavLogo />
          <div className=" absolute right-10">
            <ShareTheme />
          </div>

        </div>
        {/* Page content here */}
        {
                isNavigation && <Loading/>
            }
        <div className="px-4 sm:px-8 my-10 lg:my-14">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side pt-5">
        <NavLogo />
        <div className=" absolute hidden lg:flex top-8 right-10">
          <ShareTheme />
        </div>
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4 gap-3">
          {/* Sidebar content here */}
          <li>
                  <NavLink to="browser-tips">All Garden Tips</NavLink>
                </li>
          <li>
            <NavLink to="share-garden">Share a Garden Tips</NavLink>
          </li>
          <li>
            <NavLink to="my-tips">My Tips</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
