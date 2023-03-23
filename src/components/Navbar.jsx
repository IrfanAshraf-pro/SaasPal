import React, { useState, useEffect } from "react";
import whiteLogo from "../assests/logo/logo-2.svg";
import BlackLogo from "../assests/logo/logo.svg";
const Navbar = () => {
    const [scrolled, setScrolled] = useState(true);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrolled(false);
        } else {
          setScrolled(true);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
      <div className={`flex items-center justify-center`}>
        <div className="sm:w-[90%] md:max-w-[80%] lg:max-w-[90%] navbar py-2 sm:p-5 justify-between">
          <div className="xs:w-10/12 sm:w-[50%] justify-start">
            <a
              className="text-xl normal-case bg-transparent outline-none border-main hover:cursor-pointer"
              href="#home"
            >
              <img
                src={!scrolled ? whiteLogo : BlackLogo}
                alt="logo"
                className="h-10 w-30"
              />
            </a>
          </div>
          <div className=" dropdown bg-transparent dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost bg-transparent lg:hidden"
            >
              <svg
                fill="#fff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#fff"
                className="w-6 h-6"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M2,4A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2H3A1,1,0,0,1,2,4Zm1,9H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0,8H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"></path>
                </g>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow  menu text-black menu-compact text-xl font-medium dropdown-content bg-base-100 rounded-box w-96"
            >
              <li className="hover:text-main bg-transparent">
                <a className="bg-transparent" href="#home">
                  Home
                </a>
              </li>
              <li className="hover:text-main bg-transparent">
                <a className="bg-transparent" href="#features">
                  Features
                </a>
              </li>
              <li className="hover:text-main bg-transparent">
                <a className="bg-transparent" href="#overview">
                  About
                </a>
              </li>
              <li className="hover:text-main bg-transparent">
                <a className="bg-transparent" href="#pricing">
                  Why
                </a>
              </li>
              <li className="hover:text-main bg-transparent">
                <a className="bg-transparent" href="#team">
                  Pricing
                </a>
              </li>
              <li tabIndex={0} className="hover:text-main bg-transparent">
                <a className="bg-transparent" href="#blog">
                  Clients
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 text-xl font-medium  menu menu-horizontal">
              <li>
                <a className="hover:bg-transparent" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:bg-transparent" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:bg-transparent" href="#overview">
                  About
                </a>
              </li>
              <li>
                <a className="hover:bg-transparent" href="#pricing">
                  Why
                </a>
              </li>
              <li>
                <a className="hover:bg-transparent" href="#team">
                  Pricing
                </a>
              </li>
              <li tabIndex={0}>
                <a className="hover:bg-transparent " href="#blog">
                  Clients
                </a>
              </li>
            </ul>
          </div>
         
        </div>
      </div>
    )}

export default Navbar