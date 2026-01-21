import { useEffect, useState } from 'react';
import { getBlogDetail } from '../services/blog.service';

export const useBlogDetail = (slug) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        if (!slug) return;

        const fetchBlogDetails = async () => {
            setLoading(true);
            try {
                const res = await getBlogDetail(slug);
                setBlog(res.data.data);
            } catch (error) {
                console.error(error);
                setBlog(null);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogDetails();
    }, [slug]);

    return { blog, loading };
};
