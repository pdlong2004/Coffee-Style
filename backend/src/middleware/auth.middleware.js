import jwt from 'jsonwebtoken';
import User from '../../models/User.model.js';

export const protect = async (req, res, next) => {
    try {
        let token;

        // Kiểm tra token trong header
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Không có quyền truy cập, vui lòng đăng nhập',
            });
        }

        try {
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

            // Lấy user từ token
            req.user = await User.findById(decoded.id);
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: 'Người dùng không tồn tại',
                });
            }

            // Thêm id vào req.user để dễ sử dụng
            req.user.id = req.user._id;

            next();
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: 'Token không hợp lệ hoặc đã hết hạn',
            });
        }
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi hệ thống',
        });
    }
};

