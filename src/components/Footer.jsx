import React from "react";
import icon from "/favicon.png";
import { IoLogoYoutube } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#1B4332] mt-10 py-6 lg:py-10 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Left - Logo & Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <img src={icon} alt="GreenHub Logo" className="w-10" />
            <h3 className="font-bold text-primary text-2xl">GreenHub</h3>
          </div>
          <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
          <p className="flex items-center gap-2">
            <MdMarkEmailUnread /> support@greenhub.com
          </p>
          <p className="flex items-center gap-2">
            <IoLocationSharp /> Dhaka, Bangladesh
          </p>
        </div>

        {/* Middle - Terms & Social */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Terms</h2>
            <p>
              <a href="#">Privacy Policy</a>
            </p>
            <p>
              <a href="#">Terms of Service</a>
            </p>
            <p>
              <a href="#">Cookies</a>
            </p>
          </div>
         <div>
          <h2 className="text-xl font-bold mb-2">Social</h2>
           <div className="flex gap-3 pt-2 social">
            <a href="https://www.facebook.com/elora.yasmin.21" target="_blank">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/ajanta__elora/" target="_blank">
              <FaInstagram size={20} />
            </a>
            <a href="https://github.com/Elora21y" target="_blank">
              <BsGithub size={20}  />
            </a>
            <a href="https://www.youtube.com/@elora256" target="_blank">
              <IoLogoYoutube size={20} />
            </a>
          </div>
         </div>
          
          <p className="text-sm pt-3">
            © {new Date().getFullYear()} All rights reserved by Green Hub
          </p>
        </div>

        {/* Right - Contact Form */}
        <div>
          <h3 className="font-bold text-primary text-2xl mb-3">
            Connect With Us
          </h3>
          <form className="flex flex-col ">
            <div className="space-y-2">
              <input
                type="text"
                className="input focus:outline-0 focus:border-0 text-secondary bg-white"
                placeholder="Your Name"
              />
              <br />
              <input
                type="email"
                className="input focus:outline-0 focus:border-0 text-secondary bg-white"
                placeholder="Email"
              />
              <textarea
                className="textarea  focus:outline-0 focus:border-0 text-secondary block bg-white"
                placeholder="Message"
              ></textarea>
              <button type="button" className="btn bg-primary text-white hover:bg-[#70d66c] border-0">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
