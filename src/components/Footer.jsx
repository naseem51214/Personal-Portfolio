import React from "react";
import { FaHeart } from "react-icons/fa6";

import {
  FaFacebook,
  // FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  
} from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
             <a href="https://www.linkedin.com/in/naseem-ali-1073a8166?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"> <FaLinkedinIn size={24} /></a>
             <a href="https://web.telegram.org/" target="_blank"><FaTelegramPlane size={24} /></a>
            <a href="https://www.facebook.com/naseem.soomro.33?mibextid=ZbWKwL" target="_blank"><FaFacebook size={24} /></a>
             <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank"><FaInstagram size={24} /></a>
            </div>
            
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;