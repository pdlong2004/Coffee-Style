import React from "react";
import Header from "../../components/layout/Header";
import ProductHeadSection from "./components/ProductHeadsection.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import { useProductDetail } from "../../hooks/useProductDetail";
import { useParams } from "react-router-dom";
import ProductPremiumBlock from "./components/ProductPremiumBlock.jsx";
import ProductSimilar from "./components/ProductSimilar.jsx";
import SubscribeUs from "./../../components/layout/SubscribeUs";
import Footer from "../../components/layout/Footer.jsx";

const ProductDetail = () => {
  const { id } = useParams();
  const { product, loading } = useProductDetail(id);

  return (
    <div className="overflow-x-hidden text-base">
      <Header />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-30">
        <ProductHeadSection />
        {!loading && product && <ProductDetails product={product} />}
      </div>
      <ProductPremiumBlock />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-30">
        <ProductSimilar />
      </div>

      <SubscribeUs />
      <Footer />
    </div>
  );
};

export default ProductDetail;
