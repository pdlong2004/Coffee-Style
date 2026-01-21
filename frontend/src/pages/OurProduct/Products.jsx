import { useLocation, useParams } from "react-router-dom";
import Header from "../../components/layout/Header";
import OurProductBanner from "./components/OurProductBanner";
import OurProductCategory from "./components/OurProductCategory";
import OurProductTop from "./components/OurProductTop";
import articles from "./data/articles";
import { useProductCategory } from "../../hooks/useProductCategory";
import OurProductList from "./components/OurProductList";
import SubscribeUs from "./../../components/layout/SubscribeUs";
import Footer from "../../components/layout/Footer";

const Products = () => {
  const { id } = useParams();
  const { products, loading } = useProductCategory(id);
  const { pathname } = useLocation();

  return (
    <div className="max-w-screen-2xl text-base mx-auto px-8">
      <Header />
      <div className=" md:w-80% lg:w-235 m-auto">
        <OurProductTop />
        <OurProductCategory />
        {pathname === "/products" && <OurProductBanner articles={articles} />}
        {!loading && products && <OurProductList products={products} />}
      </div>
      <SubscribeUs />
      <Footer />
    </div>
  );
};

export default Products;
