import React from "react";
import { GoDotFill } from "react-icons/go";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
        Hello, My Name is Naseem, I'm a passionate MERN Stack developer with a strong foundation in building modern, user-friendly web applications. I leverage the power of MongoDB, Express.js, React.js, and Node.js to create efficient and scalable solutions.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          BS (Computer Science), Sukkur IBA University, 2023,

        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Certifications
        </h1>
        <span>
        Full Stack Web Development from <u><a href="https://fullstackopen.com/en/" target="_blank">fullstackopen</a></u>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          <div className="flex gap-1">
          <GoDotFill className=" w-8 mt-1 text-green-600" />
          <p>Artificial Intelligence Trainer, The Benazir Bhutto Shaheed Youth Development Program (BBSYDP), 12-2023 to 03-24, My responsibity was how to star freelance after learning AI short course</p>
          </div>
          <div className="flex gap-1">
          <GoDotFill className="w-5 mt-1 text-green-600"/>
          <p>Web Developer, Fiverr, 2023, I provide Web service Front-End as well as Back-End</p>
          </div>
  
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          Fully-Funded Scholarship, OGDCL, 2018, Sukkur IBA University
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
        I am a passionate MERN Stack developer committed to building exceptional web applications through collaboration and innovation. My mission is to bridge the gap between technical expertise and user needs, creating intuitive and engaging experiences that drive value for businesses and their customers.
        </p>
      </div>
    </div>
  );
}

export default About;