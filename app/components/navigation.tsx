import { Link } from "react-scroll";
import { navigationItems } from "~/constants/navigationItems";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Button } from "./Button";
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed flex justify-between w-full bg-[var(--third-color)] z-20 md:border-b">
      <div className="font-sans text-2xl p-5 flex italic font-bold">
        <div className=" text-[var(--text-color)]">Software Engineer</div>
      </div>
      <div className="flex max-md:flex-col max-md:space-y-3 max-md:right-5">
        <div
          className="fixed md:hidden text-2xl text-white/60 transition-colors right-5 top-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </div>
        <div
          className={`md:space-x-5 p-5 max-md:fixed max-md:flex-col max-md:space-y-5 max-md:right-5 max-md:top-10 max-md:bg-blue-950 max-md:rounded-md md:flex ${
            isOpen
              ? "flex max-md:opacity-100 max-md:translate-y-0"
              : "hidden max-md:opacity-0 max-md:-translate-y-5"
          } transition-all duration-500`}
        >
          {navigationItems.map((item) => (
            <Link
              activeStyle={{ color: "var(--main-color)" }}
              spy={true}
              // activeClass="text-blue-600"
              id={item.title}
              key={item.title}
              smooth={true}
              duration={300}
              to={item.path}
              className="text-[var(--text-color)] hover:text-blue-600 transition-colors cursor-pointer font-serif font-bold"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <Button className="m-4 py-3 px-4 duration-[5000ms]">Contact me</Button>
    </div>
  );
};
