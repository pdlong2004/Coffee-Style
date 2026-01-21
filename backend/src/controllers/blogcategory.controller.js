import BlogCategory from '../../models/CategoryBlog.model.js';

export const getAllBlogCategory = async (req, res) => {
    try {
        const categories = await BlogCategory.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error('Lỗi khi gọi getAllCategory', error);
        res.status(500).json({ message: 'Lỗi hệ thống' });
    }
};

export const createBlogCategory = async (req, res) => {
    try {
        const category = await BlogCategory.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        console.error('Lỗi khi gọi createCategory', error);
        res.status(500).json({ message: 'Lỗi hệ thống' });
    }
};
