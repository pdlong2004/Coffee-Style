import User from '../../models/User.model.js';
import jwt from 'jsonwebtoken';

// Tạo JWT token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'your-secret-key', {
        expiresIn: '30d',
    });
};

// Đăng ký
export const register = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // Kiểm tra các field bắt buộc
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Vui lòng điền đầy đủ thông tin bắt buộc (tên, email, mật khẩu)',
            });
        }

        // Kiểm tra email đã tồn tại chưa
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email đã được sử dụng',
            });
        }

        // Tạo user mới
        const user = await User.create({
            name,
            email,
            password,
            phone: phone || '',
            address: address || '',
        });

        // Tạo token
        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            message: 'Đăng ký thành công',
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    address: user.address,
                    role: user.role,
                },
                token,
            },
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
            error: error.message,
        });
    }
};

// Đăng nhập
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Kiểm tra các field bắt buộc
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Vui lòng nhập email và mật khẩu',
            });
        }

        // Tìm user và lấy password
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Email hoặc mật khẩu không đúng',
            });
        }

        // Kiểm tra password
        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: 'Email hoặc mật khẩu không đúng',
            });
        }

        // Tạo token
        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            message: 'Đăng nhập thành công',
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    address: user.address,
                    role: user.role,
                },
                token,
            },
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
            error: error.message,
        });
    }
};

// Lấy thông tin user hiện tại
export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy người dùng',
            });
        }

        res.status(200).json({
            success: true,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
        });
    } catch (error) {
        console.error('GetMe error:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        });
    }
};

