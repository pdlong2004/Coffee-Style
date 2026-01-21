import React, { useEffect, useState } from 'react';
import { getCategoryBlog } from '../services/categoryblog.service';

const useCategoryBlog = () => {
    const [categoryblogs, useCategoryBlogs] = useState([]);

    useEffect(() => {
        const getCategoryBlogs = async () => {
            try {
                const res = await getCategoryBlog();
                useCategoryBlogs(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCategoryBlogs();
    }, []);

    return { categoryblogs };
};

export default useCategoryBlog;
