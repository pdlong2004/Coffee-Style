import express from 'express';
import {
    createProduct,
    getAllProducts,
    getCategoryProduct,
    getDetailProduct,
    getFeaturedProducts,
} from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/featured', getFeaturedProducts);
router.get('/:id', getDetailProduct);
router.get('/category/:id', getCategoryProduct);

export default router;
