import express from 'express';
import {
    addToCart,
    getCart,
    updateCartItem,
    removeCartItem,
    clearCart,
} from '../controllers/cart.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', protect, getCart);
router.post('/add', protect, addToCart);
router.put('/item/:productId', protect, updateCartItem);
router.delete('/item/:productId', protect, removeCartItem);
router.delete('/clear', protect, clearCart);

export default router;
