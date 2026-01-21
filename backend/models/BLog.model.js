import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema(
    {
        url: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            default: '',
        },
    },
    { _id: false },
);

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        excerpt: {
            type: String,
            default: '',
        },

        content: {
            type: String,
            required: true,
        },

        images: {
            thumbnail: imageSchema,
        },

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'BlogCategory',
            required: true,
        },

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author',
            required: true,
        },

        status: {
            type: String,
            enum: ['draft', 'published'],
            default: 'published',
        },

        publishedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Blog', blogSchema);
