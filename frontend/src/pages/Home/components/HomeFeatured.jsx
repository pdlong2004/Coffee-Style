import ShowProducts from "../../../components/layout/ShowProducts";
import Title from "../../../components/layout/Title.jsx";
import useProduct from "../../../hooks/useProduct.js";

const HomeFeatured = () => {
  const { products } = useProduct();

  return (
    <>
      <Title>Featured Mugs</Title>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-25">
        <ShowProducts products={products.slice(0, 2)} imageClass="h-135" />
      </div>
    </>
  );
};

export default HomeFeatured;
