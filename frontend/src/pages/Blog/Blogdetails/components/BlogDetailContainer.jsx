import React from 'react';
import BlogAuthor from './BlogDetailAuthor';
import BlogContent from './BlogDetailContent';

const BlogDetailContainer = ({ blog }) => {
    if (!blog) return null;

    return (
        <div className="pb-25 mb-25">
            <div
                className="relative right-px bottom-37.5 h-75 w-full lg:w-360 md:h-162.5 -mb-20 lg:bg-cover bg-center "
                style={{
                    backgroundImage: `url(${blog.images?.thumbnail?.url})`,
                }}
            ></div>

            <div className="px-7.5">
                <div className="relative block lg:grid grid-cols-[1fr_2fr] gap-5">
                    <BlogAuthor blog={blog} />
                    <BlogContent blog={blog} />
                </div>
            </div>
        </div>
    );
};

export default BlogDetailContainer;
