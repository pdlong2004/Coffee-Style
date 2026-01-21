import React from "react";
import { useBlogsByAuthor } from "../../../hooks/useBlogsByAuthor";
import { useParams } from "react-router-dom";
import Header from "../../../components/layout/Header";
import BlogContent from "../components/BlogContent";
import BlogFilterTop from "./components/BlogFilterTop";
import SubscribeUs from "../../../components/layout/SubscribeUs";
import Footer from "../../../components/layout/Footer";

const BlogAuthor = () => {
  const { id } = useParams();
  const { blogs } = useBlogsByAuthor(id);

  return (
    <div className="overflow-x-hidden text-base">
      <Header />
      <div className="w-full px-8.5 lg:w-235 lg:mx-auto">
        {blogs.length > 0 && <BlogFilterTop blog={blogs[0]} type="author" />}
        <BlogContent blogs={blogs} />
      </div>
      <SubscribeUs />
      <Footer />
    </div>
  );
};

export default BlogAuthor;
