import React from "react";
import ShowProducts from "../../../components/layout/ShowProducts";

const OurProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 w-full md:flex flex-wrap justify-center gap-10 lg:grid lg:grid-cols-3 lg:gap-4 mb-25">
      <ShowProducts products={products} imageClass="h-[380px]" />
    </div>
  );
};

export default OurProductList;
