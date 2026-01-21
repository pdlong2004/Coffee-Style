import React from "react";
import Header from "../../../components/layout/Header";
import BlogFilterTop from "./components/BlogFilterTop";
import { useBlogsByCategory } from "../../../hooks/useBlogsByCategory";
import { useParams } from "react-router-dom";
import BlogContent from "../components/BlogContent";
import SubscribeUs from "../../../components/layout/SubscribeUs";
import Footer from "../../../components/layout/Footer";

const BlogFillter = () => {
  const { slug } = useParams();
  const { blogs } = useBlogsByCategory(slug);

  return (
    <div className="overflow-x-hidden text-base">
      <Header />
      <div className="w-full px-8.5 lg:w-235 lg:mx-auto">
        {blogs.length > 0 && <BlogFilterTop blog={blogs[0]} type="category" />}
        <BlogContent blogs={blogs} />
      </div>
      <SubscribeUs />
      <Footer />
    </div>
  );
};

export default BlogFillter;
