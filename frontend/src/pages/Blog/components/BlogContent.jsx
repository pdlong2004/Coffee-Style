import React from 'react';
import LastestPosts from './LastestPosts';
import AboutUs from './AboutUs';
import Category from './Category';
import Author from './Author';
const BlogContent = ({ blogs }) => {
    return (
        <div className="my-25 lg:grid grid-cols-[2fr_1fr] gap-8">
            <div>
                <LastestPosts blogs={blogs} />
            </div>
            <div>
                <AboutUs />
                <Category />
                <Author />
            </div>
        </div>
    );
};

export default BlogContent;
