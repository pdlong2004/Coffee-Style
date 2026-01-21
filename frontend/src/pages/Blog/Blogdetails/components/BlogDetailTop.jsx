import React from "react";
import HeaderBlog from "../../components/HeaderBlog";

const BlogDetailTop = ({ blog }) => {
  if (!blog) return null;

  return (
    <HeaderBlog
      blog={blog}
      title={blog.title}
      excerpt={blog.excerpt}
      address={blog?.category?.name}
      isActive={true}
    />
  );
};

export default BlogDetailTop;
