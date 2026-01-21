import Category from '../../models/Category.model.js';

export const getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error('Lỗi khi gọi getAllCategory', error);
        res.status(500).json({ message: 'Lỗi hệ thống' });
    }
};

export const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        console.error('Lỗi khi gọi createCategory', error);
        res.status(500).json({ message: 'Lỗi hệ thống' });
    }
};
