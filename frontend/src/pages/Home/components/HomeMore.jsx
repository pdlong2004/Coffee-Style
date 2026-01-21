import ShowProducts from "../../../components/layout/ShowProducts";
import Title from "../../../components/layout/Title.jsx";
import useProduct from "../../../hooks/useProduct.js";

const HomeMore = () => {
  const { products } = useProduct();
  return (
    <>
      <Title>More Products</Title>
      <div className="grid grid-cols-1 w-full md:flex flex-wrap justify-center gap-10 lg:grid lg:grid-cols-3 lg:gap-4 mb-25">
        <ShowProducts
          products={products.slice(0, 9)}
          imageClass="h-[380px] w-full"
        />
      </div>
    </>
  );
};

export default HomeMore;
