import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./../../../components/layout/Button";
import Title from "../../../components/layout/Title";

const HomeCoffeeMagazine = () => {
  return (
    <>
      <Title>Buy 2 mugs and get a coffee magazine free</Title>
      <div className="grid lg:grid-cols-2 gap-10 mb-24 items-center">
        <div className="order-1 lg:order-2 flex flex-col md:flex-row items-center justify-center gap-5">
          <div className=" w-full md:w-70 h-70 bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a2f3decdfa9_Image.jpg')] bg-cover bg-center" />

          <div className="grid grid-cols-2 md:flex md:flex-col w-full md:w-auto gap-5">
            <div className="w-full md:w-32.5 h-32.5 bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7aa6d0ecdfa7_Image%202.jpg')] bg-gray-200 bg-cover bg-center"></div>
            <div className="w-full md:w-32.5 h-32.5 bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a528fecdfa6_Image.jpg')] bg-gray-300 bg-cover bg-center"></div>
          </div>
        </div>

        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start lg:pl-16 text-center lg:text-left">
          <div className="font-semibold uppercase text-gray-500 tracking-[2px] text-xs">
            Premium Offer
          </div>

          <h2 className="mt-3 mb-4 text-3xl font-bold">
            Get our Coffee Magazine
          </h2>

          <p className="mb-6 text-base text-gray-500 max-w-md">
            The most versatile furniture system ever created. Designed to fit
            your life.
          </p>

          <NavLink to="/products">
            <Button className="bg-black! text-white px-6 py-3 hover:opacity-80">
              Start Shopping
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HomeCoffeeMagazine;
