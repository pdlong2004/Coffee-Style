import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetailAuthor = ({ blog }) => {
  if (!blog?.author) return null;

  const { name, bio, avatar, _id } = blog.author;

  return (
    <div className="hidden lg:flex flex-col relative -top-37.5 bg-white">
      <div className="p-10 border border-[#ececed] mb-10">
        <p className="uppercase font-medium text-gray-500 tracking-[2px] text-sm">
          Written by
        </p>

        <div className="">
          <div
            className="relative shrink-0 w-full h-40 bg-cover bg-position-[center_top_-3rem] my-5"
            style={{ backgroundImage: `url(${avatar})` }}
          />

          <div>
            <h4 className="text-[16px] mb-3.75">{name}</h4>

            {bio && <p className="text-[14px] mb-3.75 text-gray-500">{bio}</p>}

            <NavLink
              to={`/blog/author/${_id}`}
              className="relative inline-block text-[14px] text-coffee/85 after:content-[''] after:absolute  after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#a25f4b33] hover:text-coffee hover:after:bg-coffee"
            >
              All author's posts
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailAuthor;
