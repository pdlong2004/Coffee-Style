import { useEffect, useState } from 'react';
import { getBlogsByCategory } from '../services/blog.service';

export const useBlogsByCategory = (slug) => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogsCategory = async () => {
            setLoading(true);
            try {
                const res = await getBlogsByCategory(slug);
                setBlogs(res.data.data);
            } catch (err) {
                console.error(err);
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogsCategory();
    }, [slug]);

    return { blogs, loading };
};
