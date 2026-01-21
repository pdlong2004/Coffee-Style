import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { formatPrice } from '../../utils/formatPrice';
import { useToast } from '../../hooks/useToast';
import Button from '../layout/Button';

export default function CartSidebar({ isOpen, onClose }) {
    const { cart, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
    const { isAuthenticated } = useAuth();
    const { success, error: showError } = useToast();
    const [checkoutLoading, setCheckoutLoading] = useState(false);

    if (!isOpen) {
        return null;
    }

    const cartItems = cart?.items || [];

    const handleQuantityChange = async (productId, newQuantity) => {
        if (newQuantity < 1) {
            return;
        }

        const result = await updateQuantity(productId, newQuantity);
        if (result.success) {
            success('Đã cập nhật số lượng!');
        } else {
            showError(result.message || 'Cập nhật thất bại');
        }
    };

    const handleRemoveItem = async (productId) => {
        const result = await removeItem(productId);
        if (result.success) {
            success('Đã xóa sản phẩm khỏi giỏ hàng!');
        } else {
            showError(result.message || 'Xóa thất bại');
        }
    };

    const handleCheckout = async () => {
        if (cartItems.length === 0) {
            showError('Giỏ hàng của bạn đang trống');
            return;
        }

        setCheckoutLoading(true);
        // Simulate checkout process
        setTimeout(async () => {
            setCheckoutLoading(false);
            success(`Đặt hàng thành công! Tổng tiền: ${formatPrice(totalPrice)} 🎉`);
            // Clear cart after successful checkout
            setTimeout(async () => {
                await clearCart();
                onClose();
            }, 2000);
        }, 1500);
    };

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" onClick={onClose} />

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-[#1d1f2e] text-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                    <h2 className="text-xl font-bold uppercase tracking-wider">YOUR CART</h2>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-gray-300 transition-colors text-2xl font-light"
                    >
                        ×
                    </button>
                </div>

                {/* Cart Items */}
                <div className="p-6">
                    {!isAuthenticated ? (
                        <div className="text-center py-12">
                            <p className="text-gray-400 mb-4">Vui lòng đăng nhập để xem giỏ hàng</p>
                            <Link
                                to="/login"
                                onClick={onClose}
                                className="inline-block bg-white text-[#1d1f2e] px-6 py-2 rounded uppercase tracking-wider hover:bg-gray-100 transition-colors"
                            >
                                Đăng nhập
                            </Link>
                        </div>
                    ) : cartItems.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-400 mb-4">Giỏ hàng của bạn đang trống</p>
                            <Link to="/products" onClick={onClose}>
                                <Button>Tiếp tục mua sắm</Button>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="space-y-6 mb-6">
                                {cartItems.map((item) => (
                                    <div key={item.productId} className="flex gap-4 pb-6 border-b border-gray-700">
                                        {/* Product Image */}
                                        <div className="w-20 h-20 shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover rounded"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-medium mb-2 text-sm">{item.name}</h3>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-2 mb-2">
                                                <button
                                                    onClick={() =>
                                                        handleQuantityChange(item.productId, item.quantity - 1)
                                                    }
                                                    disabled={item.quantity <= 1}
                                                    className="w-6 h-6 border border-gray-600 rounded flex items-center justify-center hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                                                >
                                                    −
                                                </button>
                                                <span className="text-sm w-8 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() =>
                                                        handleQuantityChange(item.productId, item.quantity + 1)
                                                    }
                                                    className="w-6 h-6 border border-gray-600 rounded flex items-center justify-center hover:bg-gray-700 text-xs"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                onClick={() => handleRemoveItem(item.productId)}
                                                className="text-gray-400 hover:text-white text-xs uppercase tracking-wider transition-colors"
                                            >
                                                Remove
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div className="text-right">
                                            <p className="text-sm font-medium">
                                                {formatPrice(item.price * item.quantity)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Subtotal */}
                            <div className="border-t border-gray-700 pt-6 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400 uppercase tracking-wider text-sm">Subtotal</span>
                                    <span className="text-lg font-bold">{formatPrice(totalPrice)}</span>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <button
                                onClick={handleCheckout}
                                disabled={checkoutLoading || cartItems.length === 0}
                                className="w-full bg-white text-[#1d1f2e] py-4 px-6 rounded text-center font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {checkoutLoading ? 'Đang xử lý...' : 'Continue to Checkout'}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
