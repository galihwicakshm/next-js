import Link from "next/link";
import React, { useState } from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-gray-700">
      <div className="max-w-[1240px] m-auto flex justify-between items-center sm:py-2 py-4 px-10 text-white">
        <Link href="/">
          <h1 className="font-bold text-3xl text-white">Blog's</h1>
        </Link>
        <ul className="hidden sm:flex gap-4">
          <li className="p-4 text-xl">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 text-xl">
            <Link href="/users">Users</Link>
          </li>
        </ul>

        {/* <div className="hidden sm:block">
          <DarkModeSwitch />
        </div> */}

        {/* Mobile Button */}
        <div className="sm:hidden flex gap-4">
          {/* <DarkModeSwitch /> */}
          <div
            onClick={handleNav}
            className="block sm:hidden z-10 cursor-pointer gap-4"
          >
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-700 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
