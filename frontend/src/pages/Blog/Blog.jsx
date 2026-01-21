import React from "react";
import Header from "../../components/layout/Header";
import ShowBlog from "../../components/layout/ShowBlog";
import useBlogs from "./../../hooks/useBlogs.js";
import BlogContent from "./components/BlogContent";
import SubscribeUs from "./../../components/layout/SubscribeUs";
import PageTitle from "../../components/layout/PageTitle.jsx";
import Footer from "../../components/layout/Footer.jsx";

const Blog = () => {
  const { blogs } = useBlogs();
  return (
    <div className="max-w-screen-2xl text-base mx-auto px-8">
      <Header />
      <PageTitle
        h1={"Read coffee stories on our Blog"}
        p={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        }
        title="Featured Posts"
      />
      <div className="relative -top-27.5">
        <div className="relative lg:w-235 mx-auto">
          <div className="lg:grid grid-cols-2 gap-4 mb-12.5">
            <ShowBlog blog={blogs?.slice(0, 2) || []} imageClass="h-[300px]" />
          </div>

          <div>
            <BlogContent blogs={blogs} />
          </div>
        </div>

        <SubscribeUs />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
