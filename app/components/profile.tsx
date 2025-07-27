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
      <div
        className="flex relative flex-row max-lg:flex-col bg-blue-400/30 w-[70%] p-8 max-lg:p-5 rounded-lg shadow-lg overflow-hidden mt-44 max-md:w-[90%] max-md:p-2"
        data-aos="fade-up"
      >
        <img
          src={Image}
          alt="Christopher Kelvin Mndeme photo"
          className="h-72 w-72 rounded-full cursor-pointer max-lg:h-40 max-lg:w-40 max-lg:mb-5 max-md:h-20 max-md:w-20 max-md:mb-3"
          data-aos="fade-right"
        />
        <div
          className="flex flex-col justify-center items-start ml-8 max-lg:absolute max-lg:left-40 max-lg:top-20 max-md:left-16 max-md:top-3"
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-bold max-lg:text-xl max-md:text-md">
            Christopher Kelvin Mndeme{" "}
          </h1>
          <p className="text-lg font-serif max-md:text-md">
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
          <p className="text-sm text-gray-500  mt-3 max-lg:hidden">
            I am a passionate and results-driven Full Stack Developer with
            hands-on experience in building complete web and mobile applications
            from scratch. I work confidently across both frontend and backend
            technologies, implementing real-time features, interactive user
            interfaces, and fully responsive design. I specialize in integrating
            third-party APIs, leveraging AI tools for smarter functionality, and
            managing scalable, high-performance projects from conception to
            deployment. My approach blends clean code, user-centric design, and
            modern development practices to deliver seamless digital
            experiences.
          </p>
          <div className="flex gap-5 mt-14 w-full justify-center -ml-7 max-lg:hidden">
            {socialIcons.map((item, i) => (
              <Link
                to={item.path}
                className="text-blue-600 border-solid border-t-4 border-b-4 border-blue-600 animate-bounce transition-colors rounded-full h-12 w-16 flex items-center justify-center"
              >
                <item.Icon size={item.size} color={item.color} />
              </Link>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500  mt-3 lg:hidden" data-aos="fade-up">
          I am a passionate and results-driven Full Stack Developer with
          hands-on experience in building complete web and mobile applications
          from scratch. I work confidently across both frontend and backend
          technologies, implementing real-time features, interactive user
          interfaces, and fully responsive design. I specialize in integrating
          third-party APIs, leveraging AI tools for smarter functionality, and
          managing scalable, high-performance projects from conception to
          deployment. My approach blends clean code, user-centric design, and
          modern development practices to deliver seamless digital experiences.
        </p>
      </div>
    </Element>
  );
};
