import api from '../lib/axios';

export const getFeaturedProducts = () => api.get('/product/featured');

export const getAllProducts = () => api.get('/product');

export const getProductDetail = (id) => api.get(`/product/${id}`);

export const getProductsByCategory = (id) => api.get(`/product/category/${id}`);
