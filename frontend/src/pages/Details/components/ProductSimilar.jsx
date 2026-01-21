import React from "react";
import ShowProducts from "../../../components/layout/ShowProducts";
import useProduct from "../../../hooks/useProduct";
import Title from "../../../components/layout/title";

const ProductSimilar = () => {
  const { products } = useProduct();
  return (
    <>
      <Title>You might also like these</Title>
      <div className="grid grid-cols-1 w-full md:flex flex-wrap justify-center gap-10 lg:grid lg:grid-cols-3 lg:gap-4 mb-25">
        <ShowProducts products={products.slice(0, 3)} imageClass="h-[380px]" />
      </div>
    </>
  );
};

export default ProductSimilar;
