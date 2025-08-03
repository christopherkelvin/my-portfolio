import React from "react";
import { Element } from "react-scroll";
import Image from "../assets/images/Christopher-1.jpg";
import { TypeAnimation } from "react-type-animation";
import { Link } from "@remix-run/react";
import { socialIcons } from "~/utils/socialIcons";
import { Button } from "./Button";
export const Profile = () => {
  return (
    <Element name="Home">
      <div className="flex p-24">
        <div className="flex p-10 flex-col gap-6">
          <div className="mt-10 text-2xl font-bold">Hi, There</div>
          <div className="flex gap-3 text-4xl font-bold">
            I'm
            <div className="text-[var(--text-color)]">Christopher Kelvin</div>
          </div>
          <div>
            A Software Engineer ,experienced in building complete web and mobile
            applications. I work confidently across frontend (React, Remix,
            Next.js) and backend (NestJS, Laravel, FastAPI) with real-time
            features and responsive design. I also have experience integrating
            APIs, AI tools, and managing scalable projects end-to-end.
          </div>
          <div className="flex gap-8 p-4">
            {socialIcons.map((icon, i) => (
              <Link key={i} to={icon.path}>
                <icon.Icon size={30} color="var(--text-color)" />
              </Link>
            ))}
          </div>
          <div className="flex gap-4">
            <Button className="py-3 px-6 to-[var(--third-color)] text-black">
              Hire Me
            </Button>
            <Button className="py-3 px-4 to-[var(--third-color)] text-black">
              Download CV
            </Button>
          </div>
        </div>
        <img
          src={Image}
          alt="Christopher Photo"
          className="w-[50%] rounded-3xl"
        />
      </div>
    </Element>
  );
};
