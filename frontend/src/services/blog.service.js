import api from "../lib/axios";

export const getBlog = () => {
  return api.get("/blog");
};

export const getBlogDetail = (slug) => {
  return api.get(`/blog/${slug}`);
};

export const getBlogsByCategory = (slug) => api.get(`/blog/category/${slug}`);

export const getBlogsByAuthor = (id) => api.get(`/blog/author/${id}`);
