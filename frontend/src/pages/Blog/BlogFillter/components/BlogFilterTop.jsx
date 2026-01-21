import React from "react";
import HeaderBlog from "../../components/HeaderBlog";

const BlogFilterTop = ({ blog, type = "category" }) => {
  const isAuthor = type === "author";

  const data = isAuthor ? blog?.author : blog?.category;

  return (
    <HeaderBlog
      blog={blog}
      title={isAuthor ? data?.name : data?.name}
      address={isAuthor ? data?.name : data?.name}
      excerpt={isAuthor ? data?.bio : data?.description}
      subTitle={isAuthor ? data?.type : undefined}
      wClass="w-full!"
    />
  );
};

export default BlogFilterTop;
