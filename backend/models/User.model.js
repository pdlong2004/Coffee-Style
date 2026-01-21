import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Vui lòng nhập tên'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Vui lòng nhập email'],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Email không hợp lệ'],
        },
        password: {
            type: String,
            required: [true, 'Vui lòng nhập mật khẩu'],
            minlength: [6, 'Mật khẩu phải có ít nhất 6 ký tự'],
            select: false, // Không trả về password khi query
        },
        phone: {
            type: String,
            trim: true,
        },
        address: {
            type: String,
            trim: true,
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
    },
    { timestamps: true },
);

// Hash password trước khi lưu
userSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// Method để so sánh password
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('User', userSchema);

