import { createContext, useContext, useState, useEffect } from 'react';
import {
    getCart as getCartApi,
    updateCartItem as updateCartItemApi,
    removeCartItem as removeCartItemApi,
    clearCart as clearCartApi,
} from '../services/cart.service';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(false);
    const { isAuthenticated } = useAuth();

    // Tính tổng số lượng sản phẩm
    const totalItems = cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0;

    // Tính tổng tiền
    const totalPrice = cart?.items?.reduce((total, item) => total + item.price * item.quantity, 0) || 0;

    // Lấy giỏ hàng
    const fetchCart = async () => {
        if (!isAuthenticated) {
            setCart(null);
            return;
        }

        try {
            setLoading(true);
            const response = await getCartApi();
            if (response.data.success) {
                setCart(response.data.data);
            }
        } catch (error) {
            console.error('Fetch cart error:', error);
            setCart(null);
        } finally {
            setLoading(false);
        }
    };

    // Cập nhật số lượng
    const updateQuantity = async (productId, quantity) => {
        try {
            const response = await updateCartItemApi(productId, quantity);
            if (response.data.success) {
                setCart(response.data.cart);
                return { success: true };
            }
            return { success: false, message: response.data.message };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Cập nhật thất bại',
            };
        }
    };

    // Xóa sản phẩm
    const removeItem = async (productId) => {
        try {
            const response = await removeCartItemApi(productId);
            if (response.data.success) {
                setCart(response.data.cart);
                return { success: true };
            }
            return { success: false, message: response.data.message };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Xóa thất bại',
            };
        }
    };

    // Xóa toàn bộ cart
    const clearCart = async () => {
        try {
            const response = await clearCartApi();
            if (response.data.success) {
                setCart(response.data.cart);
                return { success: true };
            }
            return { success: false, message: response.data.message };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Xóa giỏ hàng thất bại',
            };
        }
    };

    // Load cart khi đăng nhập
    useEffect(() => {
        if (isAuthenticated) {
            fetchCart();
        } else {
            setCart(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    const value = {
        cart,
        loading,
        totalItems,
        totalPrice,
        fetchCart,
        updateQuantity,
        removeItem,
        clearCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

