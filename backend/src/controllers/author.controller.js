import Author from '../../models/Author.model.js';

export const getAuthor = async (req, res) => {
    try {
        const author = await Author.find();
        res.status(200).json(author);
    } catch (error) {
        console.error('Lỗi khi gọi getAllCategory', error);
        res.status(500).json({ message: 'Lỗi hệ thống' });
    }
};

export const createAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author);
    } catch (error) {
        console.error('Lỗi khi gọi createCategory', error);
        res.status(500).json({ message: 'Lỗi hệ thống' });
    }
};
