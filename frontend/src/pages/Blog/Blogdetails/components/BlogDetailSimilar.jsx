import React from 'react';
import ShowBlog from '../../../../components/layout/ShowBlog';
import Title from '../../../../components/layout/title';
import useBlogs from '../../../../hooks/useBlogs';
import Button from '../../../../components/layout/Button';
import { NavLink } from 'react-router-dom';

const BlogDetailSimilar = () => {
    const { blogs } = useBlogs();
    return (
        <>
            <Title>Further Reading</Title>
            <div className="block px-7.5 lg:grid grid-cols-2 gap-10 mb-10">
                <ShowBlog blog={blogs?.slice(0, 2) || []} imageClass="h-75" />
            </div>

            <NavLink className="flex justify-center" to="/blogs">
                <Button className="bg-black! text-white">View all articles</Button>
            </NavLink>
        </>
    );
};

export default BlogDetailSimilar;
