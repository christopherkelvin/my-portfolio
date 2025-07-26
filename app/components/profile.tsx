import React from "react";
import { Element } from "react-scroll";
import Image from "../assets/images/Christopher-1.jpg";
import { TypeAnimation } from "react-type-animation";
import { Link } from "@remix-run/react";
import { socialIcons } from "~/utils/socialIcons";
export const Profile = () => {
  console.log(socialIcons);
  return (
    <Element name="Home" className="flex items-center justify-center ">
      <div className="flex flex-row  bg-blue-400/30 w-[50%] p-4 rounded-lg shadow-lg overflow-hidden mt-44">
        <img
          src={Image}
          alt="Christopher Kelvin Mndeme photo"
          className="h-72 w-72 rounded-full cursor-pointer"
          data-aos="fade-right"
        />
        <div
          className="flex flex-col justify-center items-start ml-8 "
          data-aos="fade-up"
          data-aos-duration="5000"
        >
          <h1 className="text-4xl font-bold">Christopher Kelvin Mndeme </h1>
          <p className="text-lg font-serif">
            I am a{""}
            <TypeAnimation
              sequence={[
                " Full Stack Developer",
                2000,
                " Frontend Developer",
                2000,
                " Backend Developer",
                2000,
                " Mobile app Developer",
                2000,
                " Software Engineer",
                2000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
              className="font-outfit"
            />
          </p>
          <p className="text-sm text-gray-500 w-[80%] mt-3 ">
            I am a Full Stack Developer experienced in building complete web and
            mobile applications. I work confidently across frontend and backend
            with real-time features and responsive design. I also have
            experience integrating APIs, AI tools, and managing scalable
            projects end-to-end.
          </p>
          <div className="flex gap-5 mt-14">
            {socialIcons.map((item, i) => (
              <Link
                to={item.path}
                className="text-blue-600 border border-blue-600 animate-bounce transition-colors rounded-full h-10 w-10 flex items-center justify-center"
              >
                <item.Icon size={item.size} color={item.color} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};
