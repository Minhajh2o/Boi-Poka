import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Links from "../Links/Links";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div onClick={toggleMenu} className="md:hidden cursor-pointer">
          {isOpen ? (
            <IoClose className="text-2xl" />
          ) : (
            <HiMenuAlt1 className="text-2xl" />
          )}
        </div>
        <a className="btn btn-ghost text-xl">Boi Poka</a>
      </div>
      <div
        className={`absolute duration-700 ease-in-out py-2 px-4 rounded-lg text-sm bg-transparent backdrop-blur-md shadow-lg
          ${
          isOpen ? "top-16" : "-top-48"
        } md:static md:duration-75 md:navbar-center md:flex md:text-base md:py-0 md:px-0 md:rounded-none md:bg-base-100 md:shadow-none`}
      >
        <Links />
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
