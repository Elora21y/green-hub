import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <div className=" bg-base-200/80">
      <header className="sticky backdrop-blur-lg top-0 z-10">
        <Navbar />
      </header>
      <main className="relative min-h-[calc(100vh-412px)] ">
      <div className="hidden lg:flex  ">
        <img src="/slide1.jpg" alt="" />
      </div>
         <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AuthLayout;
