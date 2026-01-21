import React, { useEffect, useState } from 'react';
import { getBlog } from '../services/blog.service';

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getMoreBlogs = async () => {
            try {
                const res = await getBlog();
                setBlogs(res.data.data || []);
            } catch (error) {
                console.error(error);
                setBlogs([]);
            }
        };

        getMoreBlogs();
    }, []);

    return { blogs };
};

export default useBlogs;
