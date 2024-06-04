import React from "react";
import pic from "../../public/hero.avif";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandNodejs } from "react-icons/tb";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            {/* <span>Welcome to my feed</span> */}
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello I'm a </h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                // typedRef={setTyped}
                strings={["Developer","Programmer","Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop = {true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            Welcome to my portfolio! My name is Naseem and I am MERN stack developer, I design and build innovative web applications using MongoDB, Express.js, React, and Node.js. My expertise lies in creating efficient data storage solutions, fast server-side logic, seamless user experiences, and high-performance servers.
            </p>
            <br />
            {/* social media */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className=" space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/login" target="_blank">
                    <BsLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                  <a href="https://www.facebook.com/naseem.soomro.33?mibextid=ZbWKwL" target="_blank">
                    <FaFacebookSquare className="text-2xl cursor-pointer" />
                  </a>

                  </li>
                  <li>
                  <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank">
                    <FaInstagramSquare className="text-2xl cursor-pointer" />
                  </a>

                  </li>
                  <li>
                  <a href="https://web.telegram.org/" target="_blank">
                    <FaTelegramPlane className="text-2xl cursor-pointer" />
                  </a>

                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 rounded-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 rounded-full border-[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 rounded-full border-[2px]" />
                  <TbBrandNodejs className="text-xl md:text-3xl hover:scale-110 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 md:order-2">
            <img src={pic} className="rounded-3xl object-cover  md:w-[350px] md:h-[350]" alt="" />
          </div>
        </div>
      </div>
      
      <hr />
    
    </>
  );
}

export default Home;
