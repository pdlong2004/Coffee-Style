import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        oldPrice: { type: Number },
        image: String,
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
        },
        description: String,
        details: String,
        dimensions: [
            {
                label: { type: String, required: true }, // e.g., "Length (in)", "Height (in)"
                value: { type: Number, required: true }, // e.g., 12.0, 10.0
            },
        ],
        isFeatured: { type: Boolean, default: false },
    },
    { timestamps: true },
);

export default mongoose.model('Product', productSchema);
