import api from '../lib/axios';

export const addToCart = (data) => {
    return api.post('/cart/add', data);
};

export const getCart = () => {
    return api.get('/cart');
};

export const updateCartItem = (productId, quantity) => {
    return api.put(`/cart/item/${productId}`, { quantity });
};

export const removeCartItem = (productId) => {
    return api.delete(`/cart/item/${productId}`);
};

export const clearCart = () => {
    return api.delete('/cart/clear');
};