import { Link } from "react-scroll";
import { navigationItems } from "~/constants/navigationItems";
export const Navigation = () => {
  return (
    <div className="fixed flex justify-between w-full bg-gray-950 z-20 border-b">
      <div className=" font-sans text-2xl p-5 flex italic ">
        <div className=" text-blue-600">My Port</div>
        <div className=" text-blue-900">folio</div>
      </div>
      <div className="">
        <div className="flex space-x-5 p-5">
          {navigationItems.map((item) => (
            <Link
              activeStyle={{ color: "rgb(37 99 235)" }}
              spy={true}
              activeClass="text-blue-600"
              id={item.title}
              key={item.title}
              smooth={true}
              duration={300}
              to={item.path}
              className="text-white/60 hover:text-blue-600 transition-colors cursor-pointer font-serif"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
