import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col text-center lg:text-left lg:grid grid-cols-[4fr_2fr_2fr_2fr] lg:w-235 lg:mx-auto gap-10 my-25">
      <div className="flex flex-col items-center lg:items-start">
        <img
          src="https://cdn.prod.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a4ae4ecdfb2_CoffeeStyle%20Logo.png"
          width="112"
          alt=""
          className="mb-3.75"
        ></img>
        <p className="text-gray-700 mb-3.75 ">
          Delivering the best coffee life since 1996. From coffee geeks to the
          real ones.
        </p>

        <p className="mt-5 lg:mt-20 text-gray-500">Phungduclong Blog. © 2004</p>
      </div>
      <div>
        <div className="uppercase text-sm tracking-widest mb-2.5 font-semibold ">
          MENU
        </div>
        <div className="flex flex-col space-y-3 text-gray-700">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/products">Our Product</NavLink>
          <NavLink to="/blogs">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
      <div>
        <div className="uppercase text-sm tracking-widest mb-2.5 font-semibold ">
          FOLLOW US
        </div>
        <div className="flex flex-col space-y-3 text-gray-700">
          <NavLink>Facebook</NavLink>
          <NavLink>Instagram</NavLink>
          <NavLink>Zalo</NavLink>
        </div>
      </div>
      <div>
        <div className="uppercase text-sm tracking-widest mb-2.5 font-semibold ">
          CONTACT US
        </div>
        <p className="text-gray-700 my-3.75">We’re Always Happy to Help</p>
        <p className="text-xl">phungduclong268@gmail.com</p>
        <p className="mt-20 text-gray-500">Powered by PhungDucLong Author</p>
      </div>
    </div>
  );
};

export default Footer;
