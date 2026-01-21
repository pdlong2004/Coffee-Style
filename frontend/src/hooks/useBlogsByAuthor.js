import { useEffect, useState } from "react";
import { getBlogsByAuthor } from "../services/blog.service";

export const useBlogsByAuthor = (id) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogsAuthor = async () => {
      setLoading(true);
      try {
        const res = await getBlogsByAuthor(id);
        setBlogs(res.data.data);
      } catch (err) {
        console.error(err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogsAuthor();
  }, [id]);

  return { blogs, loading };
};
