import React from "react";
import image1 from "../assets/homeimage/logo.png";
import image2 from "../assets/homeimage/threelines.png";
import image3 from "../assets/homeimage/add-to-cart-3046.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="w-screen h-20 flex bg-[#E3E6F3] justify-between items-center md:px-16 p-3 shadow-md fixed z-50 top-0">
        <img className="self-center" src={image1} alt="caralogo" />
        <div>
          <ul className="hidden md:flex text-lg font-semibold gap-10 justify-center items-center text-[#1a1a1a]  ">
            <li className="mx-2 hover:text-white hover:bg-orange-500  hover:rounded-full px-2 py-1">
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "",
                })}
              >
                Home
              </NavLink>
            </li>
            <li className="mx-2  hover:text-white hover:bg-orange-500  hover:rounded-full px-2 py-1">
              <NavLink
                to="/shop"
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "",
                })}
              >
                Shop
              </NavLink>
            </li>

            <li className="mx-2  hover:text-white hover:bg-orange-500  hover:rounded-full px-2 py-1">
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "",
                })}
              >
                About
              </NavLink>
            </li>
            <li className="mx-2  hover:text-white hover:bg-orange-500  hover:rounded-full px-2 py-1">
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "",
                })}
              >
                Contact
              </NavLink>
            </li>
            <li className="w-12  hover:scale-110 hover:text-slate-200 ">
              <NavLink
                to="/addTocart"
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "",
                })}
              >
                <img src={image3} alt="Add to Cart" />
              </NavLink>
            </li>
            <li className=" hover:scale-110 ">
              <NavLink
                className="bg-blue-600 rounded-full px-2 py-1 text-white font-semibold"
                to="/login"
              >
                logIn/SignIn
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="md:hidden w-12 mix-blend-color-burn">
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
