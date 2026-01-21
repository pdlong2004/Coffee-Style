import React from "react";
import Header from "../../../components/layout/Header";
import { useParams } from "react-router-dom";
import { useBlogDetail } from "../../../hooks/useBlogDetails";
import BlogDetailTop from "./components/BlogDetailTop";
import BlogDetailContainer from "./components/BlogDetailContainer";
import BlogDetailSimilar from "./components/BlogDetailSimilar";
import SubscribeUs from "../../../components/layout/SubscribeUs";
import Footer from "../../../components/layout/Footer";
const BlogDetails = () => {
  const { slug } = useParams();
  const { blog, loading } = useBlogDetail(slug);

  return (
    <div className="overflow-x-hidden text-base">
      <Header />
      <div className="lg:px-7.5">
        <BlogDetailTop blog={blog} />
        <div className="mt-62.5 mb-25 mx-auto max-w-300">
          <BlogDetailContainer blog={blog} />
          <BlogDetailSimilar />
        </div>
      </div>
      <SubscribeUs />
      <Footer />
    </div>
  );
};

export default BlogDetails;
