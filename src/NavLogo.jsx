import React from 'react';
import icon from "/favicon.png";
import { Link } from 'react-router';

const NavLogo = () => {
    return (
        <Link to='/'
        className="navbar-start">
          <img src={icon} alt="" className="w-8 sm:w-10 md:w-12" />
          <h3 className="font-bold text-secondary text-xl sm:text-2xl md:text-3xl">
            Green<span className="text-primary">Hub</span>
          </h3>
        </Link>
    );
};

export default NavLogo;