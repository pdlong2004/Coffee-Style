import mongoose from 'mongoose';
import ProductModel from '../../models/Product.model.js';

export const getAllProducts = async (req, res) => {
    try {
        const { category } = req.query;

        const filter = {};
        if (category) {
            filter.category = category;
        }

        const products = await ProductModel.find(filter).populate('category');
        res.status(200).json(products);
    } catch (error) {
        console.error('Loi khi goi getAllProducts', error);
        res.status(500).json({ message: 'Loi he thong' });
    }
};

export const createProduct = async (req, res) => {
    try {
        const product = await ProductModel.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        console.error('Loi khi goi createProduct', error);
        res.status(500).json({ message: 'Loi he thong' });
    }
};

export const getFeaturedProducts = async (req, res) => {
    try {
        const featured = await ProductModel.find({ isFeatured: true });
        res.status(200).json(featured);
    } catch (error) {
        console.error('Loi khi goi getFeaturedProducts', error);
        res.status(500).json({ message: 'Loi he thong' });
    }
};

export const getCategoryProduct = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid category id',
            });
        }

        const products = await ProductModel.find({ category: id }).populate('category');

        res.status(200).json({
            success: true,
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getDetailProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await ProductModel.findById(id).populate('category');

        if (!product) {
            return res.status(404).json({ message: 'Khong tim thay san pham' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error('Loi khi goi getDetailProduct', error);
        res.status(500).json({ message: 'Loi he thong' });
    }
};
