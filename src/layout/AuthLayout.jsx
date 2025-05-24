import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const AuthLayout = () => {
   const navigation = useNavigation()
    const isNavigation = Boolean(navigation.location)
  return (
    <div className=" bg-white">
      <header className="sticky backdrop-blur-lg top-0 z-10">
        <Navbar />
      </header>
      {
                isNavigation && <Loading/>
            }
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
