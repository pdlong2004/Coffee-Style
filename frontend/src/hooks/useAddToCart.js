import { useState } from 'react';
import { addToCart } from '../services/cart.service';
import { useCart } from '../contexts/CartContext';
import { useToast } from './useToast';

export const useAddToCart = () => {
    const [loading, setLoading] = useState(false);
    const { fetchCart } = useCart();
    const { success, error: showError } = useToast();

    const handleAddToCart = async ({ productId, quantity }) => {
        try {
            setLoading(true);
            const response = await addToCart({ productId, quantity });
            if (response.data) {
                await fetchCart();
                success('Đã thêm vào giỏ hàng thành công! 🛒');
            }
        } catch (error) {
            console.error('Add to cart error', error);
            const errorMessage = error.response?.data?.message || 'Thêm vào giỏ hàng thất bại';
            showError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return {
        handleAddToCart,
        loading,
    };
};
