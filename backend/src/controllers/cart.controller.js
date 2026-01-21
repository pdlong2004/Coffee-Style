import Cart from '../../models/Card.model.js';
import Product from '../../models/Product.model.js';

export const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.user.id;

        // 1. Lấy sản phẩm
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
        }

        // 2. Tìm cart
        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            cart = new Cart({ user: userId, items: [] });
        }

        // 3. Check item tồn tại chưa
        const index = cart.items.findIndex((item) => item.productId.toString() === productId);

        if (index > -1) {
            cart.items[index].quantity += quantity;
        } else {
            cart.items.push({
                productId: product._id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity,
            });
        }

        await cart.save();

        res.status(200).json({
            message: 'Đã thêm vào giỏ hàng',
            cart,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi server' });
    }
};

export const getCart = async (req, res) => {
    try {
        const userId = req.user.id;

        const cart = await Cart.findOne({ user: userId });

        res.status(200).json({
            success: true,
            data: cart || { user: userId, items: [] },
        });
    } catch (error) {
        console.error('getCart error:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        });
    }
};

// Cập nhật số lượng sản phẩm trong cart
export const updateCartItem = async (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity } = req.body;
        const userId = req.user.id;

        if (!quantity || quantity < 1) {
            return res.status(400).json({
                success: false,
                message: 'Số lượng phải lớn hơn 0',
            });
        }

        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            return res.status(404).json({
                success: false,
                message: 'Giỏ hàng không tồn tại',
            });
        }

        const itemIndex = cart.items.findIndex(
            (item) => item.productId.toString() === productId
        );

        if (itemIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Sản phẩm không có trong giỏ hàng',
            });
        }

        cart.items[itemIndex].quantity = quantity;
        await cart.save();

        res.status(200).json({
            success: true,
            message: 'Đã cập nhật số lượng',
            cart,
        });
    } catch (error) {
        console.error('updateCartItem error:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        });
    }
};

// Xóa sản phẩm khỏi cart
export const removeCartItem = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.user.id;

        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            return res.status(404).json({
                success: false,
                message: 'Giỏ hàng không tồn tại',
            });
        }

        cart.items = cart.items.filter(
            (item) => item.productId.toString() !== productId
        );

        await cart.save();

        res.status(200).json({
            success: true,
            message: 'Đã xóa sản phẩm khỏi giỏ hàng',
            cart,
        });
    } catch (error) {
        console.error('removeCartItem error:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        });
    }
};

// Xóa toàn bộ cart
export const clearCart = async (req, res) => {
    try {
        const userId = req.user.id;

        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            return res.status(404).json({
                success: false,
                message: 'Giỏ hàng không tồn tại',
            });
        }

        cart.items = [];
        await cart.save();

        res.status(200).json({
            success: true,
            message: 'Đã xóa toàn bộ giỏ hàng',
            cart,
        });
    } catch (error) {
        console.error('clearCart error:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        });
    }
};
