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
    <div className="navbar p-4 md:p-0 bg-base-100">
      <div className="navbar-start">
        <div onClick={toggleMenu} className="md:hidden cursor-pointer">
          {isOpen ? (
            <IoClose className="text-2xl" />
          ) : (
            <HiMenuAlt1 className="text-2xl" />
          )}
        </div>
        <a href="/" className="text-2xl font-bold ml-2 ">Boi Poka</a>
      </div>
      <div
        className={`absolute duration-700 ease-in-out py-2 px-4 rounded-lg text-sm bg-transparent backdrop-blur-md shadow-lg
          ${
          isOpen ? "top-16" : "-top-48"
        } md:static md:duration-75 md:navbar-center md:flex md:py-0 md:px-0 md:rounded-none md:bg-base-100 md:shadow-none`}
      >
        <Links />
      </div>
      <div className="navbar-end flex items-center gap-2">
        <a className="btn bg-green-500 hover:bg-green-600 text-white">Sign In</a>
        <a className="btn bg-blue-500 hover:bg-blue-600 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
