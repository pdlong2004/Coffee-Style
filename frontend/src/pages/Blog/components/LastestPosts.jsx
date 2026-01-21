import React from 'react';
import ShowBlog from '../../../components/layout/ShowBlog';

const LastestPosts = ({ blogs }) => {
    return (
        <>
            <div className="py-2.5 mb-12.5 text-2xl border-b border-gray-100">
                <h2 className="my-3.75">Latest Posts</h2>
            </div>

            <div>
                <ShowBlog
                    blog={blogs}
                    wrapClass="grid grid-cols-[1fr_2fr] gap-8 text-left!"
                    imageClass="w-[260px]! h-[210px]!"
                />
            </div>
        </>
    );
};

export default LastestPosts;
